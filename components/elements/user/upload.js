import supabase from "@/api/supabase";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';

export default function Upload() {
    const router = useRouter();
    const [file, setFile] = useState(null);
    const [fileUp, setUp] = useState("");
    const [isItDisabled, setBtn] = useState(false);

    const cekFile = async (e) => {
        const user = await supabase.auth.getUser();
        const userid = user.data.user.id;
        const { data, error } = await supabase.storage.from("file_submitted").list("public", { search: `${userid}` });
        if (error) {
            alert(error.message);
        }

        if (data.length > 0) {
            setUp("Sudah Upload Data: " + data[0].name);
        } else {
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
            alert("Please select a file to upload.");
            return;
        }

        const ext = file.name.split('.').pop();
        const allowedExt = ['zip', '7z', 'rar', 'tar', 'gz', 'tar.gz'];
        if (!allowedExt.includes(ext)) {
            alert('File yang diupload harus berupa file arsip');
            return;
        }
        else {
            const user = await supabase.auth.getUser();
            const userid = user.data.user.id
            const { data, error } = await supabase.storage.from("file_submitted").upload(`public/${userid + '.' + ext}`, file, {
                cacheControl: '3600',
                upsert: false
            });

            if (error) {
                // Buat FE: Edit alert ini jadi modal popup
                alert(error.message);
            } else {
                // Buat FE: tambahin modal popup, kalo klik OK, reload pagenya
                router.push(router.asPath);
            }
        }
    }

    const deleteFile = async (e) => {
        e.preventDefault();
        const user = await supabase.auth.getUser();
        const userid = user.data.user.id;
        const { data: filename, error: searchError } = await supabase.storage.from("file_submitted").list("public", { search: `${userid}` });
        if (filename) {
            const hapus = `public/${filename[0].name}`;
            const { data, error } = await supabase.storage.from("file_submitted").remove([hapus]);
            if (error) {
                alert(error.message);
            } else {
                router.push(router.asPath);
            }
        }

        if(searchError){
            alert(searchError.message);
        }
    }

    useEffect(() => {
        cekFile();
    });

    useEffect(() => {
        cekUploadFile();
    });

    return (
        <div className="mx-auto w-75">
            <h5>{fileUp}</h5>
            <form onSubmit={upload}>
                <div className="mb-3">
                    <label className="form-label">Upload File Kamu</label>
                    <input className="form-control" type="file" accept=".zip,.7z,.rar,.tar,.gz,.tar.gz"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <button type="submit" className="btn btn-sm btn-primary mt-3" disabled={isItDisabled}>Submit</button>
                    <button onClick={deleteFile} className={`btn btn-sm btn-outline-danger mt-3 mx-3 ${isItDisabled ? "" : "d-none"}`}>Hapus</button>
                </div>
            </form>
        </div>
    )
}