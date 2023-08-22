import supabase from "@/api/supabase";
import { useState } from "react";

export default function Upload() {
    const [file, setFile] = useState(null);

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
                // Buat FE: Edit alert ini jadi modal popup
                alert("Upload Berhasil");
            }
        }


    }

    return (
        <div className="mx-auto w-75">
            <form onSubmit={upload}>
                <div className="mb-3">
                    <label className="form-label">Upload File Kamu</label>
                    <input className="form-control" type="file" accept=".zip,.7z,.rar,.tar,.gz,.tar.gz"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </div>
            </form>
        </div>
    )
}