import ButtonComponent from "../../home/button";

export default function FormLogin({ title, href, submit, change }) {
  return (
    <div
      className=" text-center container"
      style={{
        backgroundColor: "white",
        width: "100%",
        borderRadius: "20px",
        border: "1px solid #ccc",
        boxShadow: "0px 8px 10px rgba(0, 0, 0, 0.2), 0px 15px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <p className="fw-bold pt-5">{title}</p>
      <div className="d-flex align-items-center justify-content-center flex-column mb-3">
        <label
          htmlFor="inputEmail5"
          className="fw-bold form-label me-auto ms-4"
          style={{
            fontSize: "12px",
          }}
        >
          Email
        </label>
        <input type="email" id="inputEmail5" className="form-control" aria-describedby="emailHelpBlock" style={{ height: "40px", backgroundColor: "whitesmoke", borderRadius: "20px", width: "90%", border: "none", fontSize: "12px" }} />
      </div>
      <div className="d-flex align-items-center justify-content-center flex-column mb-5">
        <label
          htmlFor="inputEmail5"
          className="form-label fw-bold me-auto ms-4"
          style={{
            fontSize: "12px",
          }}
        >
          Password
        </label>
        <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" style={{ height: "40px", backgroundColor: "whitesmoke", borderRadius: "20px", width: "90%", border: "none" }} />
      </div>
      <div className="pb-2 d-flex align-items-center- justify-content-center">
        <ButtonComponent text={submit} buttonType="button2" buttonColorType="button1-color" href="#" />
      </div>
      <div className="pb-5 mb-4 d-flex align-items-center- justify-content-center">
        <ButtonComponent text={change} buttonType="button2" buttonColorType="button2-color" href={href} />
      </div>
    </div>
  );
}
