import BodyContent from "@/components/elements/home/body";
import WebinarAnimation from "/assets/gifs/webinar.json";
import LombaAnimation from "/assets/gifs/lomba.json";
import Fostifest from "@/components/elements/home/fostifest";
import { useEffect, useState } from "react";
import SupportedBy from "@/components/elements/home/supportedBy";
import MediaPartner from "@/components/elements/home/mediaPartner";
import SocialMedia from "@/components/elements/home/socialMedia";

export default function Index() {
  const [gifOnTop, setGifOnTop] = useState(false);
  // kalau layar mobile, gif yang di kanan pindah ke atas. kalau gk kayak gini gif yang di kanan kebawah
  // pas layar mobile
  useEffect(() => {
    const handleResize = () => {
      setGifOnTop(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Fostifest />
      <BodyContent
        onClick={"./auth/register.js"}
        gifOnLeft={true}
        gif={WebinarAnimation}
        tag="Webinar"
        title={
          <p>
            Exploring <span className="title-span">Modern</span> Web <span className="title-span">Frameworks</span>
          </p>
        }
        description="Webinar nasional dan perlombaan membuat Landing Page, bertutujuan menampilkan informasi dan meningkatkan kredibilitas , Webinar kali ini menghadirkan ********** sebagai Front-End Developer"
      />
      <BodyContent
        onClick={"./auth/register.js"}
        gifOnLeft={false}
        gifOnTop={gifOnTop}
        gif={LombaAnimation}
        tag="Lomba"
        title={
          <p>
            Futuristic <span className="text-primary">Landing</span> Page <span className="text-primary">Desain</span>
          </p>
        }
        description="Webinar nasional dan perlombaan membuat Landing Page, bertutujuan menampilkan informasi dan meningkatkan kredibilitas , Webinar kali ini menghadirkan ********** sebagai Front-End Developer"
      />
      <p
        className="text-center"
        style={{
          marginBottom: 200,
        }}
      >
        Timeline
      </p>
      <SupportedBy />
      <MediaPartner />
      <SocialMedia />
      <p className="m-5 text-center fosti-ums">@FOSTI UMS</p>
    </>
  );
}
