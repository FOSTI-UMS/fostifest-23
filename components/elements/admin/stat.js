import supabase from "@/pages/api/supabase";
import { useEffect, useState } from "react";

export default function Statistics() {
  const [allUser, setAllUser] = useState(0);
  const [paidUser, setPaidUser] = useState(0);
  const [allCompe, setAllCompe] = useState(0);
  const [paidCompe, setPaidCompe] = useState(0);

  useEffect(() => {
    async function fetchWebinar() {
      const { data } = await supabase
        .from("users")
        .select("payment_verif")
        .eq("jenis", "WEBINAR");
      setAllUser(data.length);
      const paid = data.filter((user) => user.payment_verif === true);
      setPaidUser(paid.length);
    }
    async function fetchLomba() {
      const { data } = await supabase
        .from("users")
        .select("payment_verif")
        .eq("jenis", "LOMBA DESIGN");
      setAllCompe(data.length);
      const paid = data.filter((compe) => compe.payment_verif === true);
      setPaidCompe(paid.length);
    }
    fetchWebinar();
    fetchLomba();
  }, []);

  return (
    <div className="row my-5 w-50">
      <div className="col-6 d-flex justify-content-center">
        <div className="text-center">
          <h3 className="font-bold">Webinar</h3>
          <p className="text-gray-500">Total User: {allUser}</p>
          <p className="text-gray-500">User Terbayar: {paidUser}</p>
        </div>
      </div>
      <div className="col-6 d-flex justify-content-center">
        <div className="text-center">
          <h3 className="font-bold">Lomba</h3>
          <p className="text-gray-500">Total User: {allCompe}</p>
          <p className="text-gray-500">User Terbayar: {paidCompe}</p>
        </div>
      </div>
    </div>
  );
}
