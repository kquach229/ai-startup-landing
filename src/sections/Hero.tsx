'use client';

import Button from '@/components/Button';
import starsBG from '@/assets/stars.png';
import { motion } from 'framer-motion';
export const Hero = () => {
  return (
    <section
      className='h-screen flex'
      style={{ backgroundImage: `url(${starsBG.src})` }}>
      <div className='container relative mt-[15rem]'>
        <motion.h1
          initial={{ scale: 0.7, opacity: 0.1 }}
          animate={{ scale: 1, opacity: 1, transition: { duration: 1.5 } }}
          className='text-8xl font-semibold tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center'>
          AI SEO
        </motion.h1>
        <p className='text-lg text-white/70 mt-5 text-center'>
          Elevate your site&apos;s visibility effortlessly with Ai, where smart
          technology meets user-friendly SEO tools.
        </p>
        <div className='flex justify-center mt-5'>
          <Button btnText='Join waitlist' />
        </div>
      </div>
    </section>
  );
};
