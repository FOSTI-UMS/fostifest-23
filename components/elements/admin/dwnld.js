import supabase from "@/pages/api/supabase";
import * as XLSX from 'xlsx';

// get data user then save it as xlsx
export default async function getDataUser() {
    const { data: user, error } = await supabase
        .from("users")
        .select("id_user, nama, email, jenis, no_telp")
        .neq('jenis', 'PANITIA')
        .eq('is_admin', false)
        .eq('super_admin', false)
        .order('nama');

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(user);

    const columnWidths = [
        { wpx: 72 },
        { wpx: 350 },
        { wpx: 280 },
        { wpx: 140 },
        { wpx: 140 },
    ];
    ws['!cols'] = columnWidths;
    XLSX.utils.book_append_sheet(wb, ws, "data semua users");
    XLSX.writeFile(wb, "public/data-user.xlsx");
}