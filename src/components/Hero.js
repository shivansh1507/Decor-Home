import React, { useRef } from 'react';
import { hero } from '../data';

const Hero = () => {
  const { title, subtitle, buttonText } = hero;
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <section className='h-[850px] w-full bg-hero bg-right bg-cover bg-no-repeat text-white pt-[225px] pb-[254px] relative mb-12 lg:bg-center lg:mb-28'>
      <div className='container mx-auto text-center'>
        <h1 className='text-2x1 mx-auto font-semibold mb[30px] lg:text-[64px] lg:leading-tight lg:max-w-[888px]'>{title}</h1>
        <h2 className='mb-[30px] max-w-[627px] mx-auto lg:bg-[65px] lg:text-x;'>{subtitle}</h2>
        <button
          className='bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.5)] px-[35px] py-[9px]
          mb-[160px] text-xl rounded-md backdrop-blur-md transition lg:px-[80px] lg:py-[16px] lg:mb-[194px]'
          onClick={handleUploadClick}
        >
          {buttonText}
        </button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={(e) => {
            const selectedFile = e.target.files[0];
            if (selectedFile) {
              console.log(`Selected file: ${selectedFile.name}`);
            }
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
