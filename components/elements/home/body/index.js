import Lottie from "lottie-react";
import styles from "./body.module.css";
import ButtonComponent from "../button";

export default function BodyContent({ gifOnLeft, gifOnTop, gif, tag, description, title, onClick }) {
  return (
    <div className="m-5">
      <div className="row text-center d-flex align-items-center justify-content-center">
        {/* ini untuk gif yang muncul diselebah kiri (desktop)*/}
        {gifOnLeft && (
          <div className={`col-md-5 ${styles["webinar-gif"]}`}>
            <Lottie animationData={gif} />
          </div>
        )}
        {/* ini kalau layar desktop, gifnya di kanan. kalau layar mobile gifnya diatas*/}
        {gifOnTop && (
          <div className={`col-md-5 ${styles["lomba-gif"]}`}>
            <Lottie animationData={gif} />
          </div>
        )}
        <div className={`col-sm col-md mb-5 ${styles["content"]}`}>
          <div className="col-sm">
            <div
              className="fw-bold mb-2 text-light text-center d-flex align-items-center justify-content-center"
              style={{
                height: 30,
                width: 100,
                borderRadius: 20,
                fontSize: 14,
                backgroundColor: "#5a96e3",
              }}
            >
              {tag}
            </div>
          </div>
          <div className="col-sm">
            <div className={`fw-bold ${styles["title-font"]}`}>{title}</div>
          </div>
          <div className={`col-sm ${styles["description-font"]}`}>
            <p>{description}</p>
          </div>
          <div className="col-sm">
            <ButtonComponent text="Daftar" href="/auth/register" buttonColorType="button1-color" buttonType="button1" />
          </div>
        </div>
        {/* ini untuk gif yang muncul diselebah kanan (desktop)*/}
        {!gifOnLeft && !gifOnTop && (
          <div className={`col-md-6 ${styles["gif"]}`}>
            <Lottie animationData={gif} />
          </div>
        )}
      </div>
    </div>
  );
}
