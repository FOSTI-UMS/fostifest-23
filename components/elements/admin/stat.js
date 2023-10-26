import supabase from "@/pages/api/supabase";
import { useEffect, useState } from "react";

export default async function Statistics() {
    const [allUser, setAllUser] = useState(0);
    const [paidUser, setPaidUser] = useState(0);
    const [allCompe, setAllCompe] = useState(0);
    const [paidCompe, setPaidCompe] = useState(0);

    useEffect(() => {
        async function fetch() {
            const { data } = await supabase.from("users").select("payment_verif").eq("jenis", "WEBINAR");
            setAllUser(data.length);
            const paid = data.filter((user) => user.payment_verif === true);
            setPaidUser(paid.length);
        }
        fetch();
    }
    , []);

    useEffect(() => {
        async function fetch() {
            const { data } = await supabase.from("users").select("payment_verif").eq("jenis", "LOMBA DESIGN");
            setAllCompe(data.length);
            const paid = data.filter((compe) => compe.payment_verif === true);
            setPaidCompe(paid.length);
        }
        fetch();
    }
    , []);

    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow-lg p-4">
                <h1 className="text-2xl font-bold">Webinar</h1>
                <p className="text-gray-500">Total User: {allUser}</p>
                <p className="text-gray-500">User Terbayar: {paidUser}</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
                <h1 className="text-2xl font-bold">Lomba Design</h1>
                <p className="text-gray-500">Total User: {allCompe}</p>
                <p className="text-gray-500">User Terbayar: {paidCompe}</p>
            </div>
        </div>
    )
}