import Link from "next/link";

export default function SocialMedia() {
  return (
    <div className="container  my-5 " data-aos="fade-up">
      <h3 className="fw-bold text-center">Frequently Asked Question</h3>
      <p style={{ fontSize: "14px" }} className="d-none d-md-block w-50 mx-auto text-center">
        Jika ada pertanyaan mengenai lomba maupun webinar dapat menghubungi contact person di bawah ini
      </p>
      <p style={{ fontSize: "14px" }} className="d-md-none d-block text-center">
        Jika ada pertanyaan mengenai lomba maupun webinar dapat menghubungi contact person di bawah ini
      </p>
      <div className="row justify-content-center">
        <div className="col-md-1 col-2 d-flex justify-content-center">
          <Link href="https://www.instagram.com/fosti_ums">
            <img src="https://img.freepik.com/premium-vector/purple-gradiend-social-media-logo_197792-1883.jpg" alt="ig" height={50} width={50} />
          </Link>
        </div>
        <div className="col-md-1 col-2 d-flex justify-content-center">
          <Link href="https://github.com/FOSTI-UMS">
            <img src="https://www.pngmart.com/files/22/GitHub-PNG-Isolated-Transparent-Image.png" alt="github" height={50} width={50} />
          </Link>
        </div>
        <div className="col-md-1 col-2 d-flex justify-content-center">
          <Link href="/whatsapp">
            <img src="https://static.vecteezy.com/system/resources/previews/022/101/124/original/whatsapp-logo-transparent-free-png.png" alt="wa" height={50} width={50} />
          </Link>
        </div>
      </div>
    </div>
  );
}
