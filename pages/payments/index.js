import Payments from "@/components/elements/afterRegister/payments";
import PendaftaranTutup from "@/components/elements/afterRegister/tutup";
import SideBarAfterRegist from "@/components/layouts/sideAfterRegist";

export default function PaymentsPage() {
  return (
    <SideBarAfterRegist>
      <Payments />

      {/* Kalau Pendaftaran Tutup */}
      {/* <PendaftaranTutup /> */}
    </SideBarAfterRegist>
  );
}
