import LogoFostiFest from "@/assets/images/logo_fostifest.png";
import Image from "next/image";
import Link from "next/link";
const NavbarAdmin = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-white shadow fixed-top "
      data-aos="fade-down"
    >
      <div className="container">
        <Image src={LogoFostiFest} alt="logonavbar" height={50} priority />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mt-2 mb-2" id="navbarNav">
          <ul className="navbar-nav ms-auto fw-bold d-flex align-items-start justify-content-start ">
            <li className="nav-item ">
              <Link className=" nav-link" href="/admin/competition/users">
                Peserta Lomba
              </Link>
            </li>
            <li className="nav-item ">
              <Link className=" nav-link " href="/admin/webinar/users">
                Peserta Webinar
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarAdmin;
