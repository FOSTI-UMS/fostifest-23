import EventContent from "@/components/elements/home/eventContent";
import CompetitionEvent from "@/components/elements/home/competitionEvent";
import Header from "@/components/elements/home/header";
import SupportedBy from "@/components/elements/home/supportedBy";
import MediaPartner from "@/components/elements/home/mediaPartner";
import SocialMedia from "@/components/elements/home/socialMedia";
import FostiFest from "@/components/elements/home/fostiFest";
import RoadShow from "@/components/elements/home/roadShow";
import PosterEvent from "@/components/elements/home/posterEvent";
import Head from "next/head";

export default function Index() {
  return (
    <div className="pb-5">
      <Header />
      <FostiFest />
      <RoadShow />
      <EventContent />
      <CompetitionEvent />
      <PosterEvent />
      <SupportedBy />
      <MediaPartner />
      <SocialMedia />
      <p className="m-5 text-center fosti-ums">@FOSTI UMS</p>
    </div>
  );
}
