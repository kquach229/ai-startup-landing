'use client';

import {
  DotLottieCommonPlayer,
  DotLottiePlayer,
} from '@dotlottie/react-player';
import productImage from '@/assets/product-image.png';
import Image from 'next/image';
import { useRef } from 'react';

const tabs = [
  {
    icon: '/assets/lottie/vroom.lottie',
    title: 'User-friendly dashboard',
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: '/assets/lottie/click.lottie',
    title: 'One-click optimization',
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: '/assets/lottie/stars.lottie',
    title: 'Smart keyword generator',
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

interface Tab {
  title: string;
  icon: string;
  isNew: Boolean;
  backgroundPositionX: number;
  backgroundPositionY: number;
  backgroundSizeX: number;
}

const FeaturesTab = (tab: Tab) => {
  const dotLottieRef = useRef<DotLottieCommonPlayer>(null);

  const handleTabHover = () => {
    if (dotLottieRef.current === null) return;
    dotLottieRef.current.seek(0);
    dotLottieRef.current.play();
  };
  return (
    <div
      onMouseEnter={handleTabHover}
      key={tab.title}
      className='border border-white/15 flex lg:flex-1 p-2.5 rounded-xl gap-2.5 items-center'>
      <div className='h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center'>
        <DotLottiePlayer
          ref={dotLottieRef}
          className='h-5 w-5'
          src={tab.icon}
        />
      </div>
      <div className='font-medium'>{tab.title}</div>
      {tab.isNew && (
        <div className='text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] text-black'>
          New
        </div>
      )}
    </div>
  );
};

export const Features = () => {
  return (
    <section className='py-20'>
      <div className='container'>
        <h2 className='text-5xl md:text-6xl font-medium text-center tracking-tighter'>
          Elevate your SEO efforts.
        </h2>
        <p className='text-white/70 text-lg tracking-tight text-center max-w-2xl mx-auto mt-5'>
          From small startups to l arge enterprises, our Ai driven tool has
          revolutionaized the way businesses approach SEO.
        </p>
        <div className='mt-10 flex flex-col lg:flex-row justify-center gap-3'>
          {tabs.map((tab) => (
            <FeaturesTab key={tab.title} {...tab} />
          ))}
        </div>
        <div className='border border-white/20 p-2.5 rounded-xl mt-3'>
          <div
            className='aspect-video bg-cover border border-white/20 rounded-lg'
            style={{ backgroundImage: `url(${productImage.src})` }}></div>
        </div>
      </div>
    </section>
  );
};
