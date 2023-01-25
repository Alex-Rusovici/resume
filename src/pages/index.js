import Head from 'next/head';
import { css } from '@emotion/css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container mx-auto">
          <p className="text-2xl background: bg-zinc-500">This is fine</p>
        </div>
      </main>
    </>
  );
}
