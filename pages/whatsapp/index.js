import { useEffect } from "react";

const WhatsAppPage = () => {
  useEffect(() => {
    const message = encodeURIComponent("Assalamualaikum wr.wb, Hallo kak saya ingin bertanya tentang FOSTIFEST.\nPertanyaan:");

    const phoneNumber = "6281246531544";

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

    window.location.href = whatsappUrl;
  }, []);

  return null;
};

export default WhatsAppPage;
