import supabase from "@/pages/api/supabase";
import * as XLSX from "xlsx";

export default async function getDataUser() {
  const noww = new Date().getTime();
  const { data: user_lomba } = await supabase
    .from("users")
    .select("id_user, nama, email, jenis, no_telp,payment_verif")
    .eq("jenis", "LOMBA DESIGN")
    .eq("is_admin", false)
    .eq("super_admin", false)
    .order("nama");
  const { data: user_webinar } = await supabase
    .from("users")
    .select("id_user, nama, email, jenis, no_telp,payment_verif")
    .eq("jenis", "WEBINAR")
    .eq("is_admin", false)
    .eq("super_admin", false)
    .order("nama");

  user_lomba.forEach((user) => {
    user.payment_verif = user.payment_verif
      ? "Terverifikasi"
      : "Belum Verifikasi";
  });

  user_webinar.forEach((user) => {
    user.payment_verif = user.payment_verif
      ? "Terverifikasi"
      : "Belum Verifikasi";
  });

  const book = XLSX.utils.book_new();
  const sheetLomba = XLSX.utils.json_to_sheet(user_lomba);
  const sheetWebinar = XLSX.utils.json_to_sheet(user_webinar);

  const columnWidths = [
    { wpx: 72 },
    { wpx: 350 },
    { wpx: 280 },
    { wpx: 140 },
    { wpx: 140 },
  ];
  sheetLomba["!cols"] = columnWidths;
  sheetWebinar["!cols"] = columnWidths;
  XLSX.utils.book_append_sheet(book, sheetLomba, "LOMBA");
  XLSX.utils.book_append_sheet(book, sheetWebinar, "WEBINAR");
  XLSX.writeFile(book, `data_user_${noww}.xlsx`);
}
