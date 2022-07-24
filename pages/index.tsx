import type { NextPage } from 'next';
import Head from 'next/head';
import { useState, useContext } from 'react';

import Navigation from '../components/navigation/Navigation';
import HeroSection from '../components/sections/heroSection/HeroSection';
import FeedSection from '../components/sections/feedSection/FeedSection';
import LoginOverlay from '../components/overlays/LoginOverlay';
import BottomMenu from '../components/bottomMenu/BottomMenu';

import { useUserContext } from '../contexts';

const Home: NextPage = (props) => {
  const { user, setUser } = useUserContext();
  const handleClick = () => setUser(!user);

  return (
    <div className='dark:bg-black'>
      <Head>
        <title>nocolor.io | black and white</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={`${!user && 'h-screen overflow-hidden'}text-black dark:text-white`}>
        <Navigation />
        {!user
          ? (
            <>
              <LoginOverlay handleClick={handleClick} />
              <HeroSection />
            </>
          )
          : <FeedSection />}
        <BottomMenu user={user} handleClick={handleClick} />
      </main>
    </div>
  );
};

export default Home;
