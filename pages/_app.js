import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/styles/globals.css";
import AppShell from "@/components/layouts/appShell"; // AppShell buat layoutnya
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <AppShell>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous" />
      <title>FOSTIFEST</title>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossOrigin="anonymous" />
      <Component {...pageProps} />
    </AppShell>
  );
}

export default MyApp;
