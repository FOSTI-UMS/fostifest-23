import styles from "./register.module.css";
import Link from "next/link";
import LoginGif from "/assets/gifs/login.json";
import Lottie from "lottie-react";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useState } from "react"
import { useRouter } from 'next/router';

const supabase = createClientComponentClient();

export default function FormRegister({ title, href, submit, changePage }) {
  const router = useRouter();
  const [nama, setNama] = useState('');
  const [alamat, setAlamat] = useState('');
  const [instansi, setInstansi] = useState('');
  const [jenis, setJenis] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
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
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
      }}
    >
      <div className="row pb-5 d-flex-md align-items-center justify-content-center">
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
                  <label htmlFor="inputNama" className={`fw-bold form-label me-auto ms-4 ${styles["label-custom"]}`}>
                    Nama
                  </label>
                  <input type="text" id="inputNama" className={`form-control ${styles["input-custom"]}`} aria-describedby="namaHelpBlock" onChange={(e) => setNama(e.target.value)} required />
                </div>
                <div className="d-flex align-items-center justify-content-center flex-column mb-3 ">
                  <label htmlFor="inputAlamat" className={`fw-bold form-label me-auto ms-4 ${styles["label-custom"]}`}>
                    Alamat
                  </label>
                  <input type="text" id="inputAlamat" className={`form-control ${styles["input-custom"]}`} aria-describedby="alamatHelpBlock" onChange={(e) => setAlamat(e.target.value)} required />
                </div>
                <div className="d-flex align-items-center justify-content-center flex-column mb-3 ">
                  <label htmlFor="inputInstansi" className={`fw-bold form-label me-auto ms-4 ${styles["label-custom"]}`}>
                    Instansi
                  </label>
                  <input type="text" id="inputInstansi" className={`form-control ${styles["input-custom"]}`} aria-describedby="instansiHelpBlock" onChange={(e) => setInstansi(e.target.value)} required />
                </div>
                <div className="d-flex align-items-center justify-content-center flex-column mb-3 ">
                  <label htmlFor="inputJenis" className={`fw-bold form-label me-auto ms-4 ${styles["label-custom"]}`}>
                    Jenis
                  </label>
                  {/* <input type="text" id="inputJenis" className={`form-control ${styles["input-custom"]}`} aria-describedby="jenisHelpBlock" onChange={(e) => setInstansi(e.target.value)} required /> */}
                  <select type="text" id="inputJenis" className={`form-control ${styles["input-custom"]}`} value={jenis} onChange={(e)=>setJenis(e.target.value)}>
                    <option value="webinar">Webinar</option>
                    <option value="web design">Web Design</option>
                  </select>
                </div>
                <div className="d-flex align-items-center justify-content-center flex-column mb-3 ">
                  <label htmlFor="inputEmail5" className={`fw-bold form-label me-auto ms-4 ${styles["label-custom"]}`}>
                    Email
                  </label>
                  <input type="email" id="inputEmail5" className={`form-control ${styles["input-custom"]}`} aria-describedby="emailHelpBlock" onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="d-flex align-items-center justify-content-center flex-column mb-5">
                  <label htmlFor="inputPassword5" className={`fw-bold form-label me-auto ms-4 ${styles["label-custom"]}`}>
                    Password
                  </label>
                  <input type="password" id="inputPassword5" className={`form-control ${styles["input-custom"]}`} aria-describedby="passwordHelpBlock" onChange={(e) => setPassword(e.target.value)} required />
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
