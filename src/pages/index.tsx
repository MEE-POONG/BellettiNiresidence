import React, { useEffect, useState } from "react";
import Head from 'next/head';
import LayOut from "@/components/LayOut";
import HeroSection from '@/container/Home/HeroSection';
import MenuSection from '@/container/Home/MenuSection';
import NewsSection from "@/container/Home/NewsSection";


export default function HomePage(): JSX.Element {
  const [srcollBG, setSrcollBG] = useState<number>(0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    setSrcollBG(0 - (document.documentElement.scrollTop / 10));

  };

  return (
    <LayOut>
      <Head>
        <title>HOME | T-Active Stevia</title>
        <meta
          name="description"
          content="T ACTIVE"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='home-page'>
        <HeroSection />
        <MenuSection />
        <NewsSection />
        {/* <SteviaSection id={''} translateX={0} translateY={srcollBG} />
        <AboutSection />
        <ArtistsSection />
        <ScheduleSection/>
        <ContactSection /> */}
      </div>
    </LayOut>
  );
}
