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

export default function Index() {
  return (
    <div className="pb-5">
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
