import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content={`FOSTIFEST (FOSTI Festival) merupakan kegiatan tahunan yang diselenggarakan oleh Forum Open Source Teknik Informatika (FOSTI) UMS. FOSTIFEST 2023 merupakan ajang yang keempat dengan mengusung tema "The Art of Proficiency and Landing Page Allure".`} />
        <meta property="og:title" content="FOSTIFEST 2023" />
        <meta property="og:description" content={`FOSTIFEST (FOSTI Festival) merupakan kegiatan tahunan yang diselenggarakan oleh Forum Open Source Teknik Informatika (FOSTI) UMS. FOSTIFEST 2023 merupakan ajang yang keempat dengan mengusung tema "The Art of Proficiency and Landing Page Allure".`} />
        <meta property="og:image" content="/logo_fostifest_meta_tag.png" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
