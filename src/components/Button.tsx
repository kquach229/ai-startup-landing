import React from 'react';

const Button = ({ btnText }: { btnText: string }) => {
  return (
    <button className='relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190D2E] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]'>
      <div className='absolute inset-0'>
        <div className='rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]' />
        <div className='rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]' />
        <div className='absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,0.7)_inset' />
      </div>
      <span>{btnText}</span>
    </button>
  );
};

export default Button;
