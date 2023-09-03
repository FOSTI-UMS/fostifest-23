import EventContent from "@/components/elements/home/eventContent";
import CompetitionEvent from "@/components/elements/home/competitionEvent";
import Header from "@/components/elements/home/header";
import SupportedBy from "@/components/elements/home/supportedBy";
import MediaPartner from "@/components/elements/home/mediaPartner";
import SocialMedia from "@/components/elements/home/socialMedia";
import FostiFest from "@/components/elements/home/fostiFest";
import RoadShow from "@/components/elements/home/roadShow";
import TimelineImg from "@/assets/images/timeline.png";
import Image from "next/image";
import Head from "next/head";

export default function Index() {
  return (
    <div className="pb-5">
      <Head>
        <title>FOSTIFEST</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content={`FOSTIFEST (FOSTI Festival) merupakan kegiatan tahunan yang diselenggarakan oleh Forum Open Source Teknik Informatika (FOSTI) UMS. FOSTIFEST 2023 merupakan ajang yang keempat dengan mengusung tema "The Art of Proficiency and Landing Page Allure".`} />
          <meta property="og:title" content="FOSTIFEST" />
          <meta property="og:description" content={`FOSTIFEST (FOSTI Festival) merupakan kegiatan tahunan yang diselenggarakan oleh Forum Open Source Teknik Informatika (FOSTI) UMS. FOSTIFEST 2023 merupakan ajang yang keempat dengan mengusung tema "The Art of Proficiency and Landing Page Allure".`} />
          <meta property="og:url" content="https://fostifest.fostiums.org" />
        <meta property="og:image" content="/logo_fostifest_meta_tag.png" />
        <meta property="og:type" content="website" />
      </Head>
      <Header />
      <FostiFest />
      <RoadShow />
      <EventContent />
      <CompetitionEvent />
      <Image className="d-flex justify-content-center align-items-center m-auto my-5 timeline-img" src={TimelineImg} alt="timeline"/>
      <SupportedBy />
      <MediaPartner />
      <SocialMedia />
      <p className="m-5 text-center fosti-ums">@FOSTI UMS</p>
    </div>
  );
}
