import { useEffect, useState } from "react";
import supabase from "@/pages/api/supabase";

export default function GetFileLomba() {
    const [files, setFiles] = useState([]);
    const [users, setUsers] = useState([]);

    const fetchFiles = async () => {
        const { data, error } = await supabase
            .from("submit_status")
            .select("*");
        if (error) console.log(error);
        else setFiles(data);
    }

    const fetchUsers = async () => {
        const { data, error } = await supabase
            .from("users")
            .select("email, nama")
            .eq("jenis", "LOMBA DESIGN");
        if (error) console.log(error);
        else setUsers(data);
    }

    useEffect(() => {
        fetchFiles();
        fetchUsers();
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3 className="text-center">File Lomba</h3>
                    <p className="">Terdaftar: {users.length}</p>
                    <p className="">Sudah Upload: {files.length}</p>
                    <p className="">Belum Upload: {users.length - files.length}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Nama</th>
                                <th>File</th>
                                <th>Upload Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                files.map((file, index) => {
                                    const user = users.find(user => user.email === file.email);
                                    const createdAt = new Date(file.created_at);

                                    createdAt.setHours(createdAt.getHours() + 7);
                                    const options = {
                                        weekday: 'long',
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric',
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    };

                                    const formattedDate = createdAt.toLocaleDateString('id-ID', options);
                                    return (
                                        <tr key={index.id}>
                                            <td>{index + 1}</td>
                                            <td>{user ? user.email : 'User not found'}</td>
                                            <td>{file.nama_file}</td>
                                            <td>{formattedDate}</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )


}