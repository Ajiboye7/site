import { Fragment } from 'react';
import { BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs';

import Navigation from './Navigation/Navigation';
import Button from '../UI/Button';
import mfonImg from '../../assets/portfolio.jpg';

const HeroSection = () => {
  return (
    <Fragment>
      <header className="relative px-4 pb-16 bg-[#fdf2e9]">
        <Navigation />
        <div className="container mx-auto animate-heroMoveInBottom md:py-10 lg:px-10 xl:px-24">
          <div className="flex flex-col-reverse items-center justify-between space-y-reverse space-y-10 md:flex-row md:space-x-4 md:space-y-0 lg:ml-8 xl:space-x-14 xl:ml-20">
            <div className="w-11/12 text-center bg-orange-200 shadow-[inset_0_0_50px_50px_#fdf2e9]">
              <h1 className="mb-3 text-3xl text-gray-800 font-bold uppercase transition-all animate-moveInLeft sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl">
                Hi, I'm Ajiboye Muyideen
              </h1>
              <p className="mb-8 max-w-xl flex text-lg text-center mx-auto text-gray-800 transition-all animate-moveInRight sm:text-xl md:text-lg lg:text-xl lg:mb-10">
              A Software Web Developer dedicated to crafting exceptional user experiences by seamlessly integrating frontend and backend technologies. With a strong emphasis on both the frontend and backend development, I specialize in architecting robust, scalable solutions that drive the success of digital products.
              </p>
              <div className="animate-btnMoveInBottom">
                <Button link ="/Ajiboye Muyideen Software Eng..pdf" text="Download Cv" />
              </div>
            </div>

            <div className="w-3/4 border-dotted border-4 border-orange-200 rounded-lg shadow-[inset_0_0_50px_50px_#fdf2e9] animate-imgMoveInRight sm:w-3/5 sm:ml-6 md:w-1/2">
              <div className="bg-orange-200 rounded-lg">
                <img src={mfonImg} alt="Mfon" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="hidden absolute top-1/2 flex-col space-y-4 -translate-y-1/2 px-2 py-4 bg-white rounded-full shadow-2xl sm:flex md:hidden lg:flex">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/ajiboye-muyideen-b5a5291b0/"
          className="p-3 inline-block rounded outline-orange-700 transition-colors hover:bg-orange-100"
        >
          <BsLinkedin size={28} />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://x.com/MuyideenAjiboye"
          className="p-3 inline-block rounded outline-orange-700 transition-colors hover:bg-orange-100"
        >
          <BsTwitter size={28} />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
            href="https://github.com/Ajiboye7"
          className="p-3 inline-block rounded outline-orange-700 transition-colors hover:bg-orange-100"
        >
          <BsGithub size={28} />
        </a>
      </div>
    </Fragment>
  );
};

export default HeroSection;
