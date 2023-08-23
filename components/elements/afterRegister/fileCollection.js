import styles from "./style.module.css";
import Link from "next/link";
import supabase from "@/api/supabase";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';

export default function FileCollection() {
  const router = useRouter();
  const [file, setFile] = useState(null);
  const [fileUp, setUp] = useState("");
  const [isItDisabled, setBtn] = useState(false);

  const cekFile = async (e) => {
    const user = await supabase.auth.getUser();
    const usermail = user.data.user.email;
    const { data, error } = await supabase.from("submit_status").select("*").eq("email", usermail);
    if (data.length > 0) {
      setUp("Sudah Upload Data: " + data[0].nama_peserta + "_" + data[0].judul_karya);
    }
    else {
      setUp("Belum Upload");
    }
  }

  const cekUploadFile = async () => {
    if (fileUp === "Belum Upload") {
      setBtn(false);
    } else {
      setBtn(true);
    }
  }

  const upload = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Pilih File terlebih dahulu");
      return;
    }
    else if (file.name.split('_').length !== 2) {
      alert("Nama file tidak sesuai format");
      return;
    }
    else if (file.size > 10000000) {
      alert("File terlalu besar, maksimal 10MB");
      return;
    }

    else {
      const parts = file.name.split('_');
      const namaPeserta = parts[0];
      const judulKarya = parts[1];
      const ext = judulKarya.split('.').pop();
      const allowedExt = ['zip', '7z', 'rar', 'tar'];
      if (!allowedExt.includes(ext)) {
        alert('File yang diupload harus berupa file arsip');
        return;
      }
      else {
        const user = await supabase.auth.getUser();
        const usermail = user.data.user.email;

        const { data, error } = await supabase.storage.from("file_submitted").upload(`public/${file.name}`, file, {
          cacheControl: '3600',
          upsert: false
        });

        const { data: insertStat, error: insertErr } = await supabase.from("submit_status").insert([
          { email: usermail, nama_peserta: namaPeserta, judul_karya: judulKarya.split('.')[0] }
        ]);

        if (insertErr) {
          alert("insert err: " + insertErr.message);
        }
        else if (error) {
          // Buat FE: Edit alert ini jadi modal popup
          alert("upld err: " + error.message);
        }
        document.cookie = `file=${file.name}; path=/file-collection; max-age=60`;
        router.push('/file-collection')
      }
    }
  }

  // const deleteFile = async (e) => {
  //   e.preventDefault();
  //   const user = await supabase.auth.getUser();
  //   const userid = user.data.user.id;
  //   const { data: filename, error: searchError } = await supabase.storage.from("file_submitted").list("public", { search: `${userid}` });
  //   if (filename) {
  //     const hapus = `public/${filename[0].name}`;
  //     const { data, error } = await supabase.storage.from("file_submitted").remove([hapus]);
  //     if (error) {
  //       alert(error.message);
  //     } else {
  //       router.push(router.asPath);
  //     }
  //   }

  //   if (searchError) {
  //     alert(searchError.message);
  //   }
  // }

  // useEffect(() => {
  //   cekFile();
  // });

  useEffect(() => {
    cekUploadFile();
  });

  useEffect(() => {
    cekFile();
  });

  return (
    <div className={`${styles["content-pengumpulan"]} `} data-aos="fade">
      <div className="mb-3">
        <div
          className={`fw-bold text-center mb-5 d-flex justify-content-center align-items-center  ${styles["title"]}`}
        >
          Pengumpulan Hasil Desain Landing Page
        </div>
        <form onSubmit={upload}>
          <div className={`input-group ${styles["input-box"]}`}>
            <input
              type="file"
              className={`form-control ${styles["input"]}`}
              id="inputGroupFile02"
              accept=".zip, .rar, .7z, .tar"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <button type="submit" className="btn btn-sm btn-primary mt-3" disabled={isItDisabled}>Upload</button>
        </form>
        <p className="fw-bold">{fileUp}</p>
        <div className={`${styles["description"]}`}>
          <div>
            Note : <br />
            1. Format File Zip, Rar, 7z, Tar <br />
            2. Nama File ( contoh : Nama Kalian_Judul Karya.zip) <br />
            3. Ukuran File Maksimal 10 MB <br />
            4. Hanya dapat mengumpulkan 1 kali, pastikan file sudah benar
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Link
            href="/profile"
            className="btn btn-primary rounded-4"
            style={{ fontSize: "12px" }}
          >
            Kembali Ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
