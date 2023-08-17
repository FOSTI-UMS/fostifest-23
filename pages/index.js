import EventContent from "@/components/elements/home/eventContent";
import CompetitionEvent from "@/components/elements/home/competitionEvent";
import Fostifest from "@/components/elements/home/header";
import SupportedBy from "@/components/elements/home/supportedBy";
import MediaPartner from "@/components/elements/home/mediaPartner";
import SocialMedia from "@/components/elements/home/socialMedia";

export default function Index() {
  return (
    <div className="pb-5">
      <Fostifest />
      <EventContent />
      <CompetitionEvent />
      <SupportedBy />
      <MediaPartner />
      <SocialMedia />
      <p className="m-5 text-center fosti-ums">@FOSTI UMS</p>
    </div>
  );
}
