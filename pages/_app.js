import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/styles/globals.css";
import AppShell from "@/components/layouts/appShell"; // AppShell buat layoutnya
import Script from "next/script";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <AppShell>
      <Head>
        <title>FOSTIFEST</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content={`FOSTIFEST (FOSTI Festival) merupakan kegiatan tahunan yang diselenggarakan oleh Forum Open Source Teknik Informatika (FOSTI) UMS. FOSTIFEST 2023 merupakan ajang yang keempat dengan mengusung tema "The Art of Proficiency and Landing Page Allure".`}
        />
        <meta property="og:title" content="FOSTIFEST" />
        <meta
          property="og:description"
          content={`FOSTIFEST (FOSTI Festival) merupakan kegiatan tahunan yang diselenggarakan oleh Forum Open Source Teknik Informatika (FOSTI) UMS. FOSTIFEST 2023 merupakan ajang yang keempat dengan mengusung tema "The Art of Proficiency and Landing Page Allure".`}
        />
        <meta property="og:url" content="https://fostifest.fostiums.org" />
        <meta property="og:image" content="/logo_fostifest_meta_tag.png" />
        <meta property="og:type" content="website" />
      </Head>
      <Component {...pageProps} />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" />
    </AppShell>
  );
}

export default MyApp;
