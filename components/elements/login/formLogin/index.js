import styles from "./login.module.css";
import Link from "next/link";
import LoginGif from "/assets/gifs/login.json";
import Lottie from "lottie-react";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useState } from "react"
import { useRouter } from 'next/router';

const supabase = createClientComponentClient();

export default function FormLogin({ title, href, submit, changePage }) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error('Error signing in:', error.message);
      } else {
        router.push({
          pathname: '/profile',
          query: { userData: JSON.stringify(data) },
        });
      }
    } catch (error) {
      console.error('Error signing in:', error.message);
    }
  };

  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
      }}
    >
      <div className="row pb-5 d-flex align-items-center justify-content-center">
        <div className="col-sm">
          <div className="px-2 d-flex align-items-center justify-content-center">
            <Lottie animationData={LoginGif} className="lottie-login" data-aos="fade-right" />
          </div>
        </div>
        <div className="col-sm" data-aos="fade-left">
          <div className="px-3">
            <div className={`text-center container ${styles["form-box"]}`}>
              <div className="fw-bold pt-5">{title}</div>
              <form onSubmit={handleLogin}>
                <div className="d-flex align-items-center justify-content-center flex-column mb-3 ">
                  <label htmlFor="inputEmail5" className={`fw-bold form-label me-auto ms-4 ${styles["label-custom"]}`}>
                    Email
                  </label>
                  <input type="email" id="inputEmail5" className={`form-control ${styles["input-custom"]}`} aria-describedby="emailHelpBlock" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="d-flex align-items-center justify-content-center flex-column mb-5">
                  <label htmlFor="inputPassword5" className={`fw-bold form-label me-auto ms-4 ${styles["label-custom"]}`}>
                    Password
                  </label>
                  <input type="password" id="inputPassword5" className={`form-control ${styles["input-custom"]}`} aria-describedby="passwordHelpBlock" onChange={(e) => setPassword(e.target.value)} />
                </div>
                {/* <Link href={"#"} className="text-white fw-bold text-decoration-none d-flex align-items-center justify-content-center">
                  <div className={`mb-3 d-flex align-items-center justify-content-center ${styles["btn-login"]}`}>{submit}</div>
                </Link> */}
                <div className="text-white fw-bold text-decoration-none d-flex align-items-center justify-content-center">
                  <button type="submit" className={`mb-3 text-white fw-bold d-flex align-items-center justify-content-center ${styles["btn-login"]}`}>
                    {submit}
                  </button>
                </div>
              </form>
              <Link href={href} className="text-dark fw-bold text-decoration-none mb-5 d-flex align-items-center justify-content-center">
                <div className={`${styles["change-page"]}`}>{changePage}</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
