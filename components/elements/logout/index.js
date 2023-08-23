import { useRouter } from "next/router";
import supabase from "@/api/supabase";

export default function Logout() {
  const router = useRouter();

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        console.error("Error signing out:", error.message);
      } else {
        // hapus semua cookie, kalo ada cara yg lebih efektif, bisa diganti aja banh
        document.cookie.split(";").forEach((c) => {
          document.cookie = c
            .replace(/^ +/, "")
            .replace(
              /=.*/,
              "=;expires=" + new Date().toUTCString() + ";path=/"
            );
        });
        router.push({
          pathname: "/",
        });
      }
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <button
      className={`mb-3 btn btn-outline-danger d-flex align-items-center justify-content-center`}
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}
