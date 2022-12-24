import type { DocumentProps } from "next/document";
import { Head, Html, Main, NextScript } from "next/document";

const MyDocument: React.FC<DocumentProps> = () => {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=BIZ+UDGothic:wght@400;700&family=Fira+Mono&family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main></Main>
        <NextScript></NextScript>
      </body>
    </Html>
  );
};

export default MyDocument;
