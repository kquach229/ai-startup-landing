'use client';

import Button from '@/components/Button';
import starsImage from '@/assets/stars.png';
import gridlinesImage from '@/assets/grid-lines.png';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

export const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );
  return (
    <section className='py-20 md:py-24' ref={sectionRef}>
      <div className='container'>
        <motion.div
          animate={{ backgroundPositionX: starsImage.width }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: 'linear',
          }}
          className='border border-white/15 py-24 rounded-xl overflow-hidden relative'
          style={{
            backgroundPositionY,
            backgroundImage: `url(${starsImage.src})`,
          }}>
          <div
            className='absolute inset-0 bg-[rgb(74,32,1338)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]'
            style={{ backgroundImage: `${gridlinesImage.src}` }}></div>
          <div className='relative'>
            <h2 className='p-2 text-5xl md:text-6xl max-w-sm mx-auto text-center font-medium'>
              AI-driven SEO for everyone.
            </h2>
            <p className='text-center max-w-xs mx-auto text-lg md:text-xl text-white/70 px-4 mt-5 tracking-tight'>
              Archinve clear, impactful results withiout the complexity.
            </p>
            <div className='flex justify-center mt-8'>
              <Button btnText='Join waitlist' />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
