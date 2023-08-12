import FormLogin from "@/components/elements/login/formLogin";
import LoginGif from "/assets/gifs/login.json";
import Lottie from "lottie-react";

export default function Register() {
  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
      }}
    >
      <div className="row gx-5 pb-5 d-flex align-items-center justify-content-center">
        <div className="col-sm">
          <div className="px-2 d-flex align-items-center justify-content-center">
            <Lottie animationData={LoginGif} className="lottie-login" />
          </div>
        </div>
        <div className="col-sm">
          <div className="px-2">
            <FormLogin title="Register" href="/auth/login" submit="Daftar" change="Login" />
          </div>
        </div>
      </div>
    </div>
  );
}
