import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className="bg-black h-screen w-full flex items-center justify-center">
      <h1 className="text-gray-50 text-6xl">t3-blog</h1>
    </div>
  );
};

export default Home;
