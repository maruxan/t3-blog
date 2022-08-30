import type { NextPage } from 'next';
import Head from 'next/head';
import { trpc } from 'utils/trpc';

const Home: NextPage = () => {
  return (
    <div className="bg-black text-gray-50 h-screen w-full flex flex-col items-center justify-center">
      <Head>
        <title>t3-blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 className="text-6xl">t3-blog</h1>
    </div>
  );
};

export default Home;
