import styles from "./style.module.css";
import Link from "next/link";
import supabase from "@/pages/api/supabase";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import SuccesImage from "@/assets/gifs/succesfully.json";
import Lottie from "lottie-react";
import Cookies from "js-cookie";

export default function FileCollection() {
  const router = useRouter();
  const [file, setFile] = useState(null);
  const [message, setUp] = useState("");
  const [isItDisabled, setBtn] = useState(false);
  const [statusUpload, setStatus] = useState();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dataTime, setDataTime] = useState({});
  const todai = new Date().getTime();

  const formatDate = (date) => {
    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    return date.toLocaleDateString("id-ID", options);
  };

  const formatTime = (date) => {
    const options = {
      hour: "numeric",
      minute: "numeric",
    };
    return date.toLocaleTimeString("id-ID", options);
  };

  const cekFile = async () => {
    const user = await supabase.auth.getUser();
    const usermail = user.data.user.email;
    const { data } = await supabase
      .from("submit_status")
      .select("*")
      .eq("email", usermail);

    if (data.length > 0) {
      const formattedDate = formatDate(new Date(data[0].created_at));
      const formattedTime = formatTime(new Date(data[0].created_at));
      const message = `File: <strong>${data[0].nama_file}</strong><br> Pada Hari ${formattedDate}<br/>Jam ${formattedTime}`;
      const stat = `<span class="badge text-bg-success">Sudah Upload</span> 🎉`;
      setUp(message);
      setStatus(stat);
    } else {
      setStatus(`<span class="badge text-bg-danger">Belum Upload</span> 🥺`);
      setUp("");
    }
  };

  const cekUploadFile = async () => {
    if (message === "") {
      setBtn(false);
    } else {
      setBtn(true);
    }
  };

  const upload = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Pilih File terlebih dahulu");
    } else if (file.name.split("_").length !== 2) {
      alert("Nama file tidak sesuai format");
      return;
    } else if (file.size > 52428800) {
      alert("File terlalu besar, maksimal 50 MB. Jika lebih, bisa diupload ke Google Drive masing-masing");
      return;
    } else {
      const ext = file.name.split(".").pop();
      const allowedExt = ["zip", "7z", "rar", "tar", "txt"];
      if (!allowedExt.includes(ext)) {
        alert("File yang diupload harus berupa file arsip atau txt untuk link google drive");
        return;
      } else {
        const user = await supabase.auth.getUser();
        const usermail = user.data.user.email;

        const { error } = await supabase.storage
          .from("file_submitted")
          .upload(`public/${file.name}`, file, {
            cacheControl: "3600",
            upsert: false,
          });

        const { error: insertErr } = await supabase
          .from("submit_status")
          .insert([
            {
              email: usermail,
              nama_file: file.name
            },
          ]);

        if (insertErr) {
          alert("insert err: " + insertErr.message);
        } else if (error) {
          alert("upld err: " + error.message);
        }
        Cookies.set("successUploaded", "true");
        router.push("/file-collection");
      }
    }
  };

  const openModal = () => {
    const checkCookies = Cookies.get("successUploaded");
    if (checkCookies) {
      setShowModal(true);
      Cookies.remove("successUploaded");
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    async function fetchTimerData() {
      const res = await fetch("/api/pengumpulan");
      const d = await res.json()
      setDataTime(d.timer);
    }

    fetchTimerData();
  }, []);

  useEffect(() => {
    cekUploadFile();
    cekFile();
    openModal();
    setLoading(false);
  });

  return (
    <div className={`${styles["content-pengumpulan"]} `} data-aos="fade">
      <div className="mb-3">
        <div
          className={`fw-bold text-center mb-5 d-flex justify-content-center align-items-center  ${styles["title"]}`}
        >
          Pengumpulan Hasil Desain Landing Page
        </div>
        {
          todai < new Date(dataTime.time_start).getTime() ? (
            <div className="text-center mb-5">
              <p className="fw-bold mb-3">
                Waktu Pengumpulan Akan Dimulai Pada
              </p>
              <p className="fw-bold mb-3">
                {formatDate(new Date(dataTime.time_start))} Jam{" "}
                {formatTime(new Date(dataTime.time_start))}
              </p>
            </div>
          ) : (
            todai > new Date(dataTime.time_end).getTime() ? (
              <div className="text-center mb-5">
                <p className="fw-bold mb-3">
                  Waktu Pengumpulan Telah Berakhir
                </p>
              </div>
            ) : (
              <form onSubmit={upload} className="mb-5">
                <div className={`input-group mb-3 ${styles["input-box"]}`}>
                  <input
                    type="file"
                    className={`form-control ${styles["input"]}`}
                    id="inputGroupFile02"
                    accept=".zip, .rar, .7z, .tar, .txt"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-success rounded-4"
                    disabled={isItDisabled}
                    onClick={() => setLoading(true)}
                  >
                    {loading ? (
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    ) : (
                      "Kirim"
                    )}
                  </button>
                </div>
              </form>
            )
          )

        }
        <div>
          <p>
            Status: <span dangerouslySetInnerHTML={{ __html: statusUpload }} />
          </p>
        </div>
        <p dangerouslySetInnerHTML={{ __html: message }} />
        <div className={`${styles["description"]}`}>
          <div>
            Note : <br />
            1. Format File Zip, Rar, 7z, Tar <br />
            2. Nama File ( contoh : LPFOSTIFEST_NamaLengkap.zip) <br />
            3. Ukuran File Maksimal 50 MB. Jika lebih, bisa diupload ke Google Drive masing-masing <br />
            4. Kumpulkan alamat google drive dengan akses publik dalam sebuah file txt (LPFOSTIFEST_NamaLengkap.txt) <br />
            5. Hanya dapat mengumpulkan 1 kali, pastikan file dan format nama sudah benar <br />
            6. Batas waktu Submit pada hari {formatDate(new Date(dataTime.time_end))} Jam {formatTime(new Date(dataTime.time_end))} WIB
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
      {showModal && (
        <div>
          <div
            className="modal fade show d-block"
            tabIndex="-1"
            role="dialog"
            aria-hidden="true"
            onClick={closeModal}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="container-fluid">
                    <div className="d-flex justify-content-center">
                      <Lottie
                        animationData={SuccesImage}
                        autoPlay={true}
                        loop={true}
                        className="w-75"
                      />
                    </div>
                    <div className="mb-4 text-center">
                      <h3 className="fw-bold mb-3">Berhasil Mengumpulkan!</h3>
                      <small className="text-secondary">
                        Yeay Anda Telah Berhasil Mengumpulkan File Lomba.
                        Pengumuman Juara Akan Diumumkan Saat Webinar, Jadi
                        Jangan Lupa Join Yaa. Good Luck !
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </div>
      )}
    </div>
  );
}
