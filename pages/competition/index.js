import LangkahDaftar from "@/components/elements/afterRegister/langkahDaftar";
import PendaftaranTutup from "@/components/elements/afterRegister/tutup";
import SideBarAfterRegist from "@/components/layouts/sideAfterRegist";

export default function Competition() {
  return (
    <SideBarAfterRegist>
      <LangkahDaftar page="Lomba" />

      {/* Kalau Pendaftaran Tutup */}
      {/* <PendaftaranTutup /> */}
    </SideBarAfterRegist>
  );
}
