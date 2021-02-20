import {
  defineDocument,
  Html,
  Head,
  Main,
  MicrositeScript,
} from "microsite/document";

const Document = () => (
  <Html>
    <Head>
        <link rel="preconnect" href="https://use.typekit.net" />
        <link rel="stylesheet" href="https://use.typekit.net/tgv0ryr.css" />
    </Head>
    <body>
      <Main />
      <MicrositeScript />
    </body>
  </Html>
);

export default defineDocument(Document, {
  async prepare({ renderPage }) {
    const page = await renderPage();
    return { ...page };
  },
});
