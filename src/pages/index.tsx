import React, { useEffect, useState } from "react";
import Head from 'next/head';
import LayOut from "@/components/LayOut";
import HeroSection from '@/container/Home/HeroSection';
import RequestSection from "@/container/Home/RequestSection";
import WhySection from "@/container/Home/WhySection";
import ServicesSection from "@/container/Home/ServicesSection";
import WorkSection from "@/container/Home/GallerySection";
import TeamSection from "@/container/Home/TeamSection";
import ClientsReview from "@/container/Home/ClientsReviewSection";
import GalleryList from "./residences";


const HomePage: React.FC = () => {

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
        <title>Wellcome | Belletti-Niresidence</title>
        <meta
          name="description"
          content="T ACTIVE"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='home-page'>
        <HeroSection />
        <RequestSection />
        <WhySection />
        <ServicesSection />
        <WorkSection />
        <GalleryList/>
        {/* <TeamSection /> */}
        {/* <ClientsReview /> */}
      </div>
    </LayOut>
  );
}
export default HomePage;