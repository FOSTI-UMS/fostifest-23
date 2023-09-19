import Link from "next/link";
import Image from "next/image";
import InstagramLogo from "@/assets/images/instagram.png";
import GithubLogo from "@/assets/images/github-logo.png";
import WaLogo from "@/assets/images/wa.png";

export default function SocialMedia() {
  return (
    <div className="container  my-5 " data-aos="fade-up">
      <h3 className="fw-bold text-center">Frequently Asked Question</h3>
      <p
        style={{ fontSize: "14px" }}
        className="d-none d-md-block w-50 mx-auto text-center"
      >
        Jika ada pertanyaan mengenai lomba maupun webinar dapat menghubungi
        contact person di bawah ini
      </p>
      <p style={{ fontSize: "14px" }} className="d-md-none d-block text-center">
        Jika ada pertanyaan mengenai lomba maupun webinar dapat menghubungi
        contact person di bawah ini
      </p>
      <div className="row justify-content-center">
        <div className="col-md-1 col-2 d-flex justify-content-center">
          <Link href="https://www.instagram.com/fostifest">
            <Image src={InstagramLogo} alt="ig" height={35} width={35} />
          </Link>
        </div>
        <div className="col-md-1 col-2 d-flex justify-content-center">
          <Link href="https://github.com/FOSTI-UMS">
            <Image src={GithubLogo} alt="github" height={35} width={35} />
          </Link>
        </div>
        <div className="col-md-1 col-2 d-flex justify-content-center">
          <Link href="/whatsapp">
            <Image src={WaLogo} alt="wa" height={35} width={35} />
          </Link>
        </div>
      </div>
    </div>
  );
}
