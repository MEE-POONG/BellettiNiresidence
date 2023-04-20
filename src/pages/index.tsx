import React, { useEffect, useState } from "react";
import Head from 'next/head';
import LayOut from "@/components/LayOut";
import HeroSection from '@/container/Home/HeroSection';
import AboutUsSection from "@/container/Home/AboutUsSection";
import WhySection from "@/container/Home/WhySection";
import ServicesSection from "@/container/Home/ServicesSection";
import WorkSection from "@/container/Home/WorkSection";
import TeamSection from "@/container/Home/TeamSection";
import ClientsReview from "@/container/Home/ClientsReviewSection";


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
        <title>HOME | Belletti-Niresidence</title>
        <meta
          name="description"
          content="T ACTIVE"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='home-page'>
        <HeroSection />
        <AboutUsSection />
        <WhySection />
        <ServicesSection />
        <WorkSection />
        <TeamSection />
        <ClientsReview />
      </div>
    </LayOut>
  );
}
