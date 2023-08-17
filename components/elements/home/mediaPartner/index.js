export default function MediaPartner() {
  return (
    <div
      className="container text-center"
      style={{ marginTop: "100px", marginBottom: "100px" }}
      data-aos="fade-up"
    >
      <h3 className="fw-bold mb-5">Media Partner</h3>
      <div className="row row-cols-3 row-cols-md-4 align-items-start justify-content-center">
        <div className="col d-flex justify-content-center">
          <img
            src="https://fostifest.fostiums.org/asset/rapma.png"
            alt="rapma"
            className="w-75"
          />
        </div>
        <div className="col d-flex justify-content-center ">
          <img
            src="https://news.ums.ac.id/id/wp-content/uploads/sites/2/2022/12/Resmi_Logo_UMS_Color_FullText.png"
            alt="ums"
            className="w-75"
          />
        </div>
        <div className="col d-flex justify-content-center">
          <img
            src="https://pabelan-online.com/wp-content/uploads/2020/10/logo-himakom-1.jpg"
            alt="himakom"
            className="w-75"
          />
        </div>
      </div>
    </div>
  );
}
