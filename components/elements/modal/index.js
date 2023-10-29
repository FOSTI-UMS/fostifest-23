import React from "react";
import Lottie from "lottie-react";
import Congratulations from "../../../assets/gifs/congratulation.json";
import { useState } from "react";

const Modal = () => {
  const [showModal, setShowModal] = useState(true);
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div>
      {showModal && (
        <div>
          <div
            className="modal fade show d-block"
            tabIndex="-1"
            role="dialog"
            aria-hidden="true"
            onClick={closeModal}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="container-fluid">
                    <div className="d-flex justify-content-center">
                      <Lottie
                        animationData={Congratulations}
                        autoPlay={true}
                        loop={true}
                        className="w-75"
                      />
                    </div>
                    <div className="mb-4 ">
                      <h4 className="fw-bold mb-3 text-center">
                        Congratulations!
                      </h4>
                      <h6 className="text-center mb-3">
                        Juara Lomba Landing Page
                      </h6>
                      <small className="fw-bold">
                        Juara 1 : Sarah Rizqi Firyal <br />
                        Juara 2 : Syifaul Qolbi Auliya' Darojat <br />
                        Juara 3 : Amir Zuhdi Wibowo <br />
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </div>
      )}
    </div>
  );
};

export default Modal;
