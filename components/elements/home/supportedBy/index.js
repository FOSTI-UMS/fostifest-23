export default function SupportedBy() {
  return (
    <div className="container text-center mb-5 ">
      <p
        className="fw-bold support-media"
        style={{
          textShadow: "0px 2px 2px rgba(0, 0, 0, 0.4)",
        }}
      >
        Supported By
      </p>
      <div className="row align-items-start logo-image">
        <div className="col">
          <img src="https://www.dicoding.com/blog/wp-content/uploads/2014/12/dicoding-header-logo.png" alt="dicoding" />
        </div>
        <div className="col">
          <img src="https://idcloudhost.com/wp-content/uploads/2019/08/Logo-IDCloudHost-AMP-Header.png" alt="idCloudHost" />
        </div>
      </div>
    </div>
  );
}
