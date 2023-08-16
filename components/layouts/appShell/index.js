import { useRouter } from "next/router";
import Navbar from "../navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react"; // You can also use <link> for styles

// page yang tidak ada navbarnya
const disableNavbar = ["/auth/login", "/auth/register", "/404", "/webinar", "/competition", "/pengumpulan"];

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
      {children}
    </main>
  );
}
