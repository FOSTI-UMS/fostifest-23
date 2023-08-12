export default function SocialMedia() {
  return (
    <div className="container text-center social-media d-flex flex-column align-items-center justify-content-center ">
      <h3 className="fw-bold">Frequently Asked Question</h3>
      <p>Jika ada pertanyaan mengenai lomba maupun webinar dapat menghubungi contact person di bawah ini</p>
      <div
        className="flex-row text-center d-flex align-items-center justify-content-center logo-image"
        style={{
          width: "8%",
          height: "50px",
        }}
      >
        <div className="col-10 logo-social-media">
          <a className="image-link">
            <img src="https://img.freepik.com/premium-vector/purple-gradiend-social-media-logo_197792-1883.jpg" alt="ig" height={50} width={50} />
          </a>
        </div>
        <div className="col-12 logo-social-media">
          <a className="image-link ">
            <img src="https://www.pngmart.com/files/22/GitHub-PNG-Isolated-Transparent-Image.png" alt="github" height={50} width={50} />
          </a>
        </div>
        <div className="col-10 logo-social-media">
          <a className="image-link">
            <img src="https://static.vecteezy.com/system/resources/previews/022/101/124/original/whatsapp-logo-transparent-free-png.png" alt="wa" height={50} width={50} />
          </a>
        </div>
      </div>
    </div>
  );
}
