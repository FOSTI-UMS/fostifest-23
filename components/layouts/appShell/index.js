import { useRouter } from "next/router";
import Navbar from "../navbar";

// page yang tidak ada navbarnya
const disableNavbar = ["/auth/login", "/auth/register", "/404"];

export default function AppShell(props) {
  const { children } = props;
  const { pathname } = useRouter();

  return (
    <main>
      {!disableNavbar.includes(pathname) && <Navbar />}
      {children}
    </main>
  );
}