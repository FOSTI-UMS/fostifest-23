import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/styles/globals.css";
import AppShell from "@/components/layouts/appShell"; // AppShell buat layoutnya

function MyApp({ Component, pageProps }) {
  return (
    <AppShell>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>FOSTIFEST</title>
      <Component {...pageProps} />
    </AppShell>
  );
}

export default MyApp;
