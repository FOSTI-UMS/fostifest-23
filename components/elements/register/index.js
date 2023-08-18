import styles from "./register.module.css";
import Link from "next/link";
import { useState } from "react";
import LoginGif from "/assets/gifs/login.json";
import Lottie from "lottie-react";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/router';

const supabase = createClientComponentClient();

export default function FormRegister() {
  const [page, setPage] = useState("first");
  const router = useRouter();
  const [nama, setNama] = useState('');
  const [alamat, setAlamat] = useState('');
  const [instansi, setInstansi] = useState('');
  const [jenis, setJenis] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [no_telp, setTelp] = useState('');

  const handleRegist = async (e) => {
    console.log(jenis);
    e.preventDefault();
    if(password.length<6){
      alert('Password should be at least 6 characters')
    }

    try {
      const { data } = await supabase.from("users").select('email').eq('email', email);
      if(data.length>0){
        alert('email telah digunakan, gunakan email lain!')
      }
      else{
        
          const { data, error } = await supabase.auth.signUp({
            email,
            password,
          });
    
          if (error) {
            console.error('Error signing in:', error.message);
          } 
          else {
            const { data: users, error: errorInsertUser } = await supabase.from("users").insert(
              {
                nama,
                alamat,
                instansi,
                email,
                jenis,
                no_telp
              }
            ).select();
            if(errorInsertUser){console.log('ERROR while inserting user :', errorInsertUser.message);}
            console.log(users);
            // router.push({
            //   pathname: '/profile',
            //   query: { userData: JSON.stringify(data) },
            // });
          }

      }
    } catch (error) {
      console.error('Error signing in:', error.message);
    }
  };

  return (
    <div className="container">
      <div className="row align-items-center" style={{ minHeight: "100vh" }}>
        <div className="col-md-6 d-none d-md-block">
          <div className="d-flex justify-content-center" data-aos="fade">
            <Lottie animationData={LoginGif} style={{ width: "60%" }} />
          </div>
        </div>
        <div className="col-md-6">
          <div
            className={`card rounded-4 shadow ${styles["card-width"]}`}
            data-aos="fade"
          >
            <div className="card-body">
              <div className="fw-bold my-2 text-center">Register</div>
              <form onSubmit={handleRegist}>
                <div className={page === "first" ? "d-block" : "d-none"}>
                  <div className="mb-2">
                    <label
                      htmlFor="namaLengkap"
                      className={`fw-bold form-label me-auto ms-2 ${styles["label-custom"]}`}
                    >
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="namaLengkap"
                      name="namaLengkap"
                      className={`form-control ${styles["input-custom"]}`}
                      onChange={(e) => setNama(e.target.value)}
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="alamat"
                      className={`fw-bold form-label me-auto ms-2 ${styles["label-custom"]}`}
                    >
                      Alamat
                    </label>
                    <input
                      type="text"
                      id="alamat"
                      name="alamat"
                      className={`form-control ${styles["input-custom"]}`}
                      onChange={(e) => setAlamat(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="noTelp"
                      className={`fw-bold form-label me-auto ms-2 ${styles["label-custom"]}`}
                    >
                      No Telp
                    </label>
                    <input
                      type="number"
                      id="noTelp"
                      name="noTelp"
                      className={`form-control ${styles["input-custom"]}`}
                      onChange={(e) => setTelp(e.target.value)}
                    />
                  </div>
                  <div className="d-grid">
                    <button
                      type="button"
                      onClick={() => setPage("second")}
                      className={`btn ${styles["btn-login"]} rounded-4`}
                    >
                      Next
                    </button>
                  </div>
                </div>
                <div className={page === "second" ? "d-block" : "d-none"}>
                  <div className="mb-2">
                    <a
                      onClick={() => setPage("first")}
                      className={`${styles["btn-back"]} text-decoration-none ms-2`}
                    >
                      Kembali
                    </a>
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="inputEmail5"
                      className={`fw-bold form-label me-auto ms-2 ${styles["label-custom"]}`}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="inputEmail5"
                      name="email"
                      className={`form-control ${styles["input-custom"]}`}
                      aria-describedby="emailHelpBlock"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="inputPassword5"
                      className={`fw-bold form-label me-auto ms-2 ${styles["label-custom"]}`}
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="inputPassword5"
                      name="password"
                      className={`form-control ${styles["input-custom"]}`}
                      aria-describedby="passwordHelpBlock"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="inputChoose"
                      className={`fw-bold form-label me-auto ms-2 ${styles["label-custom"]}`}
                    >
                      Pilih Event
                    </label>
                    <select
                      id="inputChoose"
                      name="event"
                      className={`form-select ${styles["input-custom"]}`}
                      onChange={(e) => setJenis(e.target.value)}
                    >
                      <option value={"webinar"}>Webinar</option>
                      <option value={"lomba"}>Lomba Landing Page</option>
                    </select>
                  </div>
                  <div className="d-grid">
                    <button
                      type="submit"
                      className={`btn ${styles["btn-login"]} rounded-4`}
                    >
                      Register
                    </button>
                  </div>
                </div>
              </form>

              <Link
                href="/login"
                className="text-dark fw-bold text-decoration-none mb-5 d-flex align-items-center justify-content-center mt-3"
              >
                <div className={`${styles["change-page"]}`}>
                  Sudah punya akun?
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
