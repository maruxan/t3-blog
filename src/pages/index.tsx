import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { trpc } from 'utils/trpc';

const Home: NextPage = () => {
  const { data, error, isLoading } = trpc.useQuery(['hello']);

  return (
    <div className="bg-black text-gray-50 h-screen w-full flex flex-col items-center justify-center">
      <Head>
        <title>t3-blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 className="text-6xl">t3-blog</h1>
      {isLoading && <div>loading...</div>}
      {error && <p>{JSON.stringify(error)}</p>}
      {data && <p>{JSON.stringify(data)}</p>}
    </div>
  );
};

export default Home;
