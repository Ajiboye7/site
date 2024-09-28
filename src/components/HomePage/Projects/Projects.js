import { useState } from 'react';
import { ButtonSmall } from '../../UI/Button';
import {
  LaonDetails,
  BettershotzDetails,
  MfonAiDetails,
  MPBlogDetails,
} from './ProjectsDetails';
import CryptoImage from '../../../assets/cryptoapp.png';
import workoutIng from '../../../assets/excercise photo.png';
import emedicImg from '../../../assets/emdeic.png';
import cardcircuitImg from '../../../assets/card.png';
import youtube from '../../../assets/youtube.png';

const Projects = () => {
  const [openLaonDetails, setOpenLaonDetails] = useState(false);
  const [openBettershotzDetails, setOpenBettershotzDetails] = useState(false);
  const [openMfonAiDetails, setOpenMfonAiDetails] = useState(false);
  const [openMPBlogDetails, setOpenMPBlogDetails] = useState(false);

  const [openYoutubeDetails, setYoutubeDetails] = useState(false);

  const openLaonDetailsHandler = () => setOpenLaonDetails(preVal => !preVal);
  const openBettershotzDetailsHandler = () =>
    setOpenBettershotzDetails(preVal => !preVal);
  const openMfonAiDetailsHandler = () =>
    setOpenMfonAiDetails(preVal => !preVal);
  const openMPBlogDetailsHandler = () =>
    setOpenMPBlogDetails(preVal => !preVal);

  const openYoutubeHandler = () =>
    setYoutubeDetails(preVal => !preVal);

  return (
    <section id="projects" className="pt-16 pb-16 bg-[#fdf2e9]">
      <div className="px-2 mb-12 text-center md:mb-16">
        <h2>Projects</h2>
        <p className="max-w-2xl px-4 mx-auto text-lg text-gray-800 sm:px-10 md:text-xl md:max-w-3xl md:px-0">
          Here you will find some of the personal projects that I created from
          scratch based on my current skillset. Click on the live link to see
          the live version of the project. To find out more, click on More
          Details
        </p>
      </div>

      <div className="container mx-auto max-w-7xl grid grid-cols-1 gap-y-14 px-4 md:gap-y-20">
        {/* PROJECT 1 */}
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-y-0 md:gap-x-14">
          <div className="flex items-end justify-center bg-white/50 rounded-xl">
            <img
              src={CryptoImage}
              alt="Laon E-Commerce"
              className="w-[90%] h-[95%] rounded-t-xl shadow-top-left-right xs:w-[70%]"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="mb-2">Cryptocurrency App</h3>
            <p className="mb-4 text-gray-800 md:text-lg">
            This Cryptocurrency App is designed to provide users with the latest trends, prices, daily news, and more about various cryptocurrencies. The app integrates two different APIs to fetch real-time data and display it to the users in an intuitive manner.
            </p>
            <div className="grid grid-cols-2 gap-1 mb-4 text-[14.5px] font-semibold xs:flex">
              <span className="flex items-center justify-center px-3 py-0.5 text-orange-500 bg-orange-100 rounded-full">
                JavaScript
              </span>
              <span className="flex items-center justify-center px-3 py-0.5 text-orange-500 bg-orange-100 rounded-full">
                React
              </span>
            </div>
            <div className="grow shrink" />
            <div className="flex flex-col space-y-2 xs:flex-row xs:space-x-2 xs:space-y-0">
              <ButtonSmall link="https://cryptotradingapp.netlify.app/" text="Live Link" />
              <button
                onClick={openLaonDetailsHandler}
                className="relative px-6 py-2 text-white font-bold uppercase bg-gradient-to-r from-zinc-400 to-zinc-600 rounded-full outline-none transition-all duration-200 after:inline-block after:w-full after:h-full after:absolute after:inset-0 after:bg-gradient-to-r after:from-zinc-500 after:to-zinc-700 after:rounded-full after:-z-10 after:duration-500 hover:from-zinc-500 hover:to-zinc-700 hover:-translate-y-[3px] hover:shadow-2xl hover:after:scale-x-[1.3] hover:after:scale-y-[1.3] hover:after:opacity-0 focus:-translate-y-[1px] focus:animate-pulsate"
              >
                More Details
              </button>
            </div>
          </div>
          <LaonDetails
            openLaonDetails={openLaonDetails}
            openLaonDetailsHandler={openLaonDetailsHandler}
          />
        </div>

        {/* PROJECT 2 */}
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-y-0 md:gap-x-14">
          <div className="flex flex-col">
            <h3 className="mb-2">Workout App</h3>
            <p className="mb-4 text-gray-800 md:text-lg">
              <span>
              This Workout App is a comprehensive fitness platform that provides users with various workout routines, exercise demonstrations, and videos tailored to their needs. It integrates two APIs to fetch workout data and instructional videos, and utilizes state management for a seamless user experience.
              </span>
            </p>
            <div className="grid grid-cols-2 gap-1 mb-4 text-[14.5px] font-semibold xs:flex">
              <span className="flex items-center justify-center px-3 py-0.5 text-orange-500 bg-orange-100 rounded-full">
                JavaScript
              </span>
              <span className="flex items-center justify-center px-3 py-0.5 text-orange-500 bg-orange-100 rounded-full">
                React
              </span>
              <span className="flex items-center justify-center px-3 py-0.5 text-orange-500 bg-orange-100 rounded-full">
                Rapid Api
              </span>
            </div>
            <div className="grow shrink" />
            <div className="flex flex-col space-y-2 xs:flex-row xs:space-x-2 xs:space-y-0">
              <ButtonSmall
                link="https://excerciseapp.netlify.app/"
                text="Live Link"
              />
              <button
                onClick={openBettershotzDetailsHandler}
                className="relative px-6 py-2 text-white font-bold uppercase bg-gradient-to-r from-zinc-400 to-zinc-600 rounded-full outline-none transition-all duration-200 after:inline-block after:w-full after:h-full after:absolute after:inset-0 after:bg-gradient-to-r after:from-zinc-500 after:to-zinc-700 after:rounded-full after:-z-10 after:duration-500 hover:from-zinc-500 hover:to-zinc-700 hover:-translate-y-[3px] hover:shadow-2xl hover:after:scale-x-[1.3] hover:after:scale-y-[1.3] hover:after:opacity-0 focus:-translate-y-[1px] focus:animate-pulsate"
              >
                More Details
              </button>
            </div>
          </div>
          <div className="flex row-start-1 items-end justify-center bg-white/50 rounded-xl md:row-start-auto">
            <img
              src={workoutIng}
              alt="Bettershotz"
              className="w-[90%] h-[95%] rounded-t-xl shadow-top-left-right xs:w-[70%]"
            />
          </div>
          <BettershotzDetails
            openBettershotzDetails={openBettershotzDetails}
            openBettershotzDetailsHandler={openBettershotzDetailsHandler}
          />
        </div>

        {/* PROJECT 3 */}
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-y-0 md:gap-x-14">
          <div className="flex items-end justify-center bg-white/50 rounded-xl">
            <img
              src={emedicImg}
              alt="Mfon.ai"
              className="w-[90%] h-[95%] rounded-t-xl shadow-top-left-right xs:w-[70%]"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="mb-2">e-medics</h3>
            <p className="mb-4 text-gray-800 md:text-lg">
            The medical app is a professional platform offering pharmaceutical services like consultations with pharmacists, prescription drug deliveries, and health-related information. It provides a seamless user experience with modern design, responsive layout, and secure data handling. Key features include consultations, medication deliveries, and educational resources.
            </p>
            <div className="grid grid-cols-2 gap-1 mb-4 text-[14.5px] font-semibold xs:flex">
              <span className="flex items-center justify-center px-3 py-0.5 text-orange-500 bg-orange-100 rounded-full">
                Next.js
              </span>
              <span className="flex items-center justify-center px-3 py-0.5 text-orange-500 bg-orange-100 rounded-full">
                TypeScript
              </span>
              <span className="flex items-center justify-center px-3 py-0.5 text-orange-500 bg-orange-100 rounded-full">
                Tailwind CSS
              </span>
              <span className="flex items-center justify-center px-3 py-0.5 text-orange-500 bg-orange-100 rounded-full">
                Animations
              </span>
            </div>
            <div className="grow shrink" />
            <div className="flex flex-col space-y-2 xs:flex-row xs:space-x-2 xs:space-y-0">
              <ButtonSmall
                link="https://emedicstore.vercel.app/"
                text="Live Link"
              />
              <button
                onClick={openMfonAiDetailsHandler}
                className="relative px-6 py-2 text-white font-bold uppercase bg-gradient-to-r from-zinc-400 to-zinc-600 rounded-full outline-none transition-all duration-200 after:inline-block after:w-full after:h-full after:absolute after:inset-0 after:bg-gradient-to-r after:from-zinc-500 after:to-zinc-700 after:rounded-full after:-z-10 after:duration-500 hover:from-zinc-500 hover:to-zinc-700 hover:-translate-y-[3px] hover:shadow-2xl hover:after:scale-x-[1.3] hover:after:scale-y-[1.3] hover:after:opacity-0 focus:-translate-y-[1px] focus:animate-pulsate"
              >
                More Details
              </button>
            </div>
          </div>
          <MfonAiDetails
            openMfonAiDetails={openMfonAiDetails}
            openMfonAiDetailsHandler={openMfonAiDetailsHandler}
          />
        </div>

        {/* PROJECT 4 */}
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-y-0 md:gap-x-14">
          <div className="flex flex-col">
            <h3 className="mb-2">Card Circuit</h3>
            <p className="mb-4 text-gray-800 md:text-lg">
            This project is a finance-related <span className='font-semibold'>landing page</span> promoting a banking service or product. It highlights key features, customer testimonials, and encourages interaction through call-to-action buttons. The page uses smooth scrolling for navigation and includes modern design elements like hover animations for an engaging user experience. The buttons currently act as placeholders for future links and functionalities.
            </p>
            <div className="grid grid-cols-2 gap-1 mb-4 text-[14.5px] font-semibold xs:grid-cols-3 lg:grid-cols-4 xl:flex">
              <span className="flex items-center justify-center px-3 py-0.5 text-orange-500 bg-orange-100 rounded-full">
                Next.js
              </span>
              <span className="flex items-center justify-center px-3 py-0.5 text-orange-500 bg-orange-100 rounded-full">
                TypeScript
              </span>
              <span className="flex items-center justify-center px-3 py-0.5 text-orange-500 bg-orange-100 rounded-full">
                Tailwind CSS
              </span>
            </div>
            <div className="grow shrink" />
            <div className="flex flex-col space-y-2 xs:flex-row xs:space-x-2 xs:space-y-0">
              <ButtonSmall
                link="https://mfon-ai.vercel.app/"
                text="Live Link"
              />
              <button
                onClick={openMPBlogDetailsHandler}
                className="relative px-6 py-2 text-white font-bold uppercase bg-gradient-to-r from-zinc-400 to-zinc-600 rounded-full outline-none transition-all duration-200 after:inline-block after:w-full after:h-full after:absolute after:inset-0 after:bg-gradient-to-r after:from-zinc-500 after:to-zinc-700 after:rounded-full after:-z-10 after:duration-500 hover:from-zinc-500 hover:to-zinc-700 hover:-translate-y-[3px] hover:shadow-2xl hover:after:scale-x-[1.3] hover:after:scale-y-[1.3] hover:after:opacity-0 focus:-translate-y-[1px] focus:animate-pulsate"
              >
                More Details
              </button>
            </div>
          </div>
          <div className="flex row-start-1 items-end justify-center bg-white/50 rounded-xl md:row-start-auto">
            <img
              src={cardcircuitImg}
              alt="Bettershotz"
              className="w-[90%] h-[95%] rounded-t-xl shadow-top-left-right xs:w-[70%]"
            />
          </div>
          <MPBlogDetails
            openMPBlogDetails={openMPBlogDetails}
            openMPBlogDetailsHandler={openMPBlogDetailsHandler}
          />
        </div>


         {/* PROJECT 5 */}
         <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-y-0 md:gap-x-14">
          <div className="flex items-end justify-center bg-white/50 rounded-xl">
            <img
              src={youtube}
              alt="Mfon.ai"
              className="w-[90%] h-[95%] rounded-t-xl shadow-top-left-right xs:w-[70%]"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="mb-2">e-medics</h3>
            <p className="mb-4 text-gray-800 md:text-lg">
            The YouTube clone app is a dynamic video-streaming platform, built with Next.js, leveraging RapidAPI for real-time video data, and ensuring smooth navigation using state management. With a sleek, responsive design powered by Tailwind CSS, the app offers a seamless user experience across devices. Key features include real-time video updates, easy-to-navigate video categories, and robust state management for optimal performance and data handling
            </p>
            <div className="grid grid-cols-2 gap-1 mb-4 text-[14.5px] font-semibold xs:flex">
              <span className="flex items-center justify-center px-3 py-0.5 text-orange-500 bg-orange-100 rounded-full">
                Next.js
              </span>
              <span className="flex items-center justify-center px-3 py-0.5 text-orange-500 bg-orange-100 rounded-full">
                Rapid Api
              </span>
              <span className="flex items-center justify-center px-3 py-0.5 text-orange-500 bg-orange-100 rounded-full">
                Tailwind CSS
              </span>
              <span className="flex items-center justify-center px-3 py-0.5 text-orange-500 bg-orange-100 rounded-full">
                Animations
              </span>
            </div>
            <div className="grow shrink" />
            <div className="flex flex-col space-y-2 xs:flex-row xs:space-x-2 xs:space-y-0">
              <ButtonSmall
                link="https://youtubelone.vercel.app/"
                text="Live Link"
              />
              <button
                onClick={openMfonAiDetailsHandler}
                className="relative px-6 py-2 text-white font-bold uppercase bg-gradient-to-r from-zinc-400 to-zinc-600 rounded-full outline-none transition-all duration-200 after:inline-block after:w-full after:h-full after:absolute after:inset-0 after:bg-gradient-to-r after:from-zinc-500 after:to-zinc-700 after:rounded-full after:-z-10 after:duration-500 hover:from-zinc-500 hover:to-zinc-700 hover:-translate-y-[3px] hover:shadow-2xl hover:after:scale-x-[1.3] hover:after:scale-y-[1.3] hover:after:opacity-0 focus:-translate-y-[1px] focus:animate-pulsate"
              >
                More Details
              </button>
            </div>
          </div>
          <MfonAiDetails
            openMfonAiDetails={setYoutubeDetails}
            openMfonAiDetailsHandler={openYoutubeHandler}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
