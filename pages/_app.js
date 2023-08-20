import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/styles/globals.css";
import AppShell from "@/components/layouts/appShell"; // AppShell buat layoutnya
import Script from "next/script";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <AppShell>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>FOSTIFEST</title>
      </Head>
      <Component {...pageProps} />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" />
    </AppShell>
  );
}

export default MyApp;
