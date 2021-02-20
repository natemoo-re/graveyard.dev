import { FunctionalComponent } from 'preact';
import { definePage } from 'microsite/page';
import { Head, seo } from 'microsite/head';
import { Logo } from '@/components/Logo';
import { Footer } from '@/components/Footer';

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
        <div class="content">
          <div class="logo">
            <Logo />
            <h1>Graveyard</h1>
          </div>
          <article>
            <p>
              Here lie <a class="link" href="https://twitter.com/n_moore">Nate</a>'s unfinished side projects, including this one.
            </p>
            <p>One day you might be able to rescue some of his neglected logos and/or domains... but not today.</p>
          </article>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default definePage(Index);
