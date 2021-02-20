import { FunctionalComponent } from 'preact';
import { definePage } from 'microsite/page';
import { Head, seo } from 'microsite/head';

interface IndexProps {}

const Index: FunctionalComponent<IndexProps> = () => {
  return (
    <>
      <Head>
        <seo.title>Graveyard</seo.title>

        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Graveyard!</h1>
        <p>
          Ready to build something amazing? <a href="https://github.com/natemoo-re/microsite">Read the docs</a> to get started.
        </p>
      </main>
    </>
  );
};

export default definePage(Index);
