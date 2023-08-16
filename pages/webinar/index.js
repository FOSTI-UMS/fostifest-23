import LangkahDaftar from "@/components/elements/afterRegister/langkahDaftar";
import SideBarAfterRegist from "@/components/layouts/sideAfterRegist";
import PendaftaranTutup from "@/components/elements/afterRegister/tutup";

export default function Webinar() {
  return (
    <SideBarAfterRegist>
      <LangkahDaftar page="Webinar" />

      {/* Kalau Pendaftaran Tutup */}
      {/* <PendaftaranTutup /> */}
    </SideBarAfterRegist>
  );
}
