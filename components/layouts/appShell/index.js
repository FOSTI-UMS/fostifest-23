import { useRouter } from "next/router";
import Navbar from "../navbar";
import NavbarAdmin from "../navbarAdmin";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react"; // You can also use <link> for styles

// page yang tidak ada navbarnya
const disableNavbar = [
  "/login",
  "/register",
  "/404",
  "/webinar",
  "/payments",
  "/file-collection",
  "/admin",
  "/admin/manager",
  "/admin/login",
  "/admin/register/[token]",
  "/admin/competition/users",
  "/admin/webinar/users",
];

const adminNavbar = [
  "/admin",
  "/admin/manager",
  "/admin/competition/users",
  "/admin/webinar/users",
];

export default function AppShell(props) {
  const { children } = props;
  const { pathname } = useRouter();
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <main>
      {!disableNavbar.includes(pathname) && <Navbar />}
      {adminNavbar.includes(pathname) && <NavbarAdmin />}
      {children}
    </main>
  );
}
