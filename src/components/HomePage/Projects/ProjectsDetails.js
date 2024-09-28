import { BsX, BsFillCheckCircleFill } from 'react-icons/bs';
import { ButtonSmall, ButtonSmallZinc } from '../../UI/Button';
import {
  LaonDetailsOverlay,
  BettershotzDetailsOverlay,
  MfonAiDetailsOverlay,
  MPBlogDetailsOverlay,
  YoutubeDetailsOverlay,
} from './ProjectsOverlay';


export const LaonDetails = ({ openLaonDetails, openLaonDetailsHandler }) => {
  return (
    <>
      <LaonDetailsOverlay
        openLaonDetails={openLaonDetails}
        openLaonDetailsHandler={openLaonDetailsHandler}
      />
      <aside
        className={`absolute z-10 left-0 w-[90%] bg-white rounded-xl transiton-all duration-500 lg:w-auto ${
          openLaonDetails ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          onClick={openLaonDetailsHandler}
          className="absolute top-2 right-2 bg-orange-400 rounded transition-colors hover:bg-orange-300"
        >
          <BsX size="25" color="white" />
        </button>
        <div className="pb-6 px-2 mt-12 sm:px-4">
          <div className="flex justify-between">
            <h3 className="mb-2">Cryptocurrency App</h3>
          </div>
          <p className="mb-2 text-lg font-semibold">
            Below, you'll discover additional details about my process in
            building the Cryptocurrency App.
          </p>
          <ul className="flex flex-col space-y-2 mb-4">
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
              Real-Time Data: Utilizes two APIs to fetch up-to-date information on cryptocurrency trends and prices.
              </span>
            </li>
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
              Data Visualization: Implements Chart.js to create interactive and visually appealing charts for better data understanding.
              </span>
            </li>
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                Incorporated Stripe payment gateway into CommerceJS for seamless
                payment processing.
              </span>
            </li>
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
              State Management: Employs state management techniques to ensure seamless data flow and efficient state handling throughout the app.
              </span>
            </li>
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                Implemented React Context for automatic user logout after one
                hour of inactivity.
              </span>
            </li>
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
              Comprehensive Information: Provides daily news updates and detailed information on various cryptocurrencies.
              </span>
            </li>
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                Employed React Context for efficient state management across
                multiple components.
              </span>
            </li>
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                Integrated React Router to facilitate routing functionalities
                within the application.
              </span>
            </li>
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                Developed custom hooks to efficiently reuse logic across
                different React components.
              </span>
            </li>
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                Deployed the e-commerce site on Netlify and established
                continuous deployment practices.
              </span>
            </li>
          </ul>

          <div className="flex flex-col space-y-2 xs:flex-row xs:space-y-0 xs:space-x-2">
            <ButtonSmall link="https://cryptotradingapp.netlify.app/" text="Live Link" />
            <ButtonSmallZinc
              link="https://github.com/Ajiboye7/cryptoapp.git"
              text="GitHub Link"
            />
          </div>
        </div>
      </aside>
    </>
  );
};







export const BettershotzDetails = ({
  openBettershotzDetails,
  openBettershotzDetailsHandler,
}) => {
  return (
    <>
      <BettershotzDetailsOverlay
        openBettershotzDetails={openBettershotzDetails}
        openBettershotzDetailsHandler={openBettershotzDetailsHandler}
      />
      <aside
        className={`absolute z-10 left-0 w-[90%] bg-white rounded-xl transiton-all duration-500 lg:w-auto ${
          openBettershotzDetails ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          onClick={openBettershotzDetailsHandler}
          className="absolute top-2 right-2 bg-orange-400 rounded transition-colors hover:bg-orange-300"
        >
          <BsX size="25" color="white" />
        </button>
        <div className="pb-6 px-2 mt-12 sm:px-4">
          <div className="flex justify-between">
            <h3 className="mb-2">Workout App</h3>
          </div>
          <p className="mb-2 text-lg font-semibold">
            Below, you'll discover additional details about my process in
            creating the workout App.
          </p>
          <ul className="flex flex-col space-y-2 mb-4">
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
              Exercise Variety: Offers a wide range of workout routines and exercises targeting different muscle groups.
              </span>
            </li>
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
              Instructional Videos: Provides instructional videos for each exercise to ensure proper form and technique.
              </span>
            </li>
            
           
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
              Personalized Experience: Allows users to customize their workout plans based on their fitness goals and preferences.
              </span>
            </li>
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
              Data Visualization: Visualizes workout progress and performance metrics to track fitness goals.
              </span>
            </li>
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                Deployed the site on Netlify and integrated continuous
                deployment
              </span>
            </li>
          </ul>

          <div className="flex flex-col space-y-2 xs:flex-row xs:space-y-0 xs:space-x-2">
            <ButtonSmall
              link="https://excerciseapp.netlify.app/"
              text="Live Link"
            />
            <ButtonSmallZinc
              link="https://github.com/Ajiboye7/ExcerciseApp.git"
              text="GitHub Link"
            />
          </div>
        </div>
      </aside>
    </>
  );
};






export const MfonAiDetails = ({
  openMfonAiDetails,
  openMfonAiDetailsHandler,
}) => {
  return (
    <>
      <MfonAiDetailsOverlay
        openMfonAiDetails={openMfonAiDetails}
        openMfonAiDetailsHandler={openMfonAiDetailsHandler}
      />
      <aside
        className={`absolute z-10 left-0 w-[90%] bg-white rounded-xl transiton-all duration-500 lg:w-auto ${
          openMfonAiDetails ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          onClick={openMfonAiDetailsHandler}
          className="absolute top-2 right-2 bg-orange-400 rounded transition-colors hover:bg-orange-300"
        >
          <BsX size="25" color="white" />
        </button>
        <div className="pb-6 px-2 mt-12 sm:px-4">
          <div className="flex justify-between">
            <h3 className="mb-2">e-medics</h3>
          </div>
          <p className="mb-2 text-lg font-semibold">
            Below, you'll discover additional details about my process in
            building the e-medics app
          </p>
          <ul className="flex flex-col space-y-2 mb-8">
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
               I used Next.js 14, a powerful React framework for building the app with server-side rendering and a modern web architecture.
              </span>
            </li>
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>I Used typescript to ensure type safety and reduce errors during development</span>
            </li>
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
              Tailwind css was used for designing the layout and styling the components with a focus on responsive design and utility-based classes
              </span>
            </li>
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                I Leveraged CSS animations for smooth transitions and hover effects, such as hover-triggered testimonials and buttons with dynamic effects.
              </span>
            </li>
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                I  Created visually appealing text and button borders with gradient colors to enhance the look and feel of the UI.
              </span>
            </li>
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>Deployed the site on Vercel</span>
            </li>
          </ul>

          <div className="flex flex-col space-y-2 xs:flex-row xs:space-y-0 xs:space-x-2">
            <ButtonSmall link="https://emedicstore.vercel.app/" text="Live Link" />
            <ButtonSmallZinc
              link=" https://github.com/Ajiboye7/emedicstore.git"
              text="GitHub Link"
            />
          </div>
        </div>
      </aside>
    </>
  );
};








export const MPBlogDetails = ({
  openMPBlogDetails,
  openMPBlogDetailsHandler,
}) => {
  return (
    <>
      <MPBlogDetailsOverlay
        openMPBlogDetails={openMPBlogDetails}
        openMPBlogDetailsHandler={openMPBlogDetailsHandler}
      />
      <aside
        className={`absolute z-10 left-0 w-[90%] bg-white rounded-xl transiton-all duration-500 lg:w-auto ${
          openMPBlogDetails ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          onClick={openMPBlogDetailsHandler}
          className="absolute top-2 right-2 bg-orange-400 rounded transition-colors hover:bg-orange-300"
        >
          <BsX size="25" color="white" />
        </button>
        <div className="pb-6 px-2 mt-12 sm:px-4">
          <div className="flex justify-between">
            <h3 className="mb-2">Card Circuit</h3>
            <span className="font-semibold text-lg">2024</span>
          </div>
          <p className="mb-2 text-lg font-semibold">
            Below, you'll discover additional details about my process so far in building this finance app.
          </p>
          <ul className="flex flex-col space-y-2 mb-4">
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
               I used Next.js 14, a powerful React framework for building the app with server-side rendering and a modern web architecture.
              </span>
            </li>
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>I Used typescript to ensure type safety and reduce errors during development</span>
            </li>
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
              Tailwind css was used for designing the layout and styling the components with a focus on responsive design and utility-based classes
              </span>
            </li>
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                I Leveraged CSS animations for smooth transitions and hover effects, such as hover-triggered testimonials and buttons with dynamic effects.
              </span>
            </li>
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                I  Created visually appealing text and button borders with gradient colors to enhance the look and feel of the UI.
              </span>
            </li>
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                I deployed it using vercel.
              </span>
            </li>
          </ul>
         
          <div className="flex flex-col space-y-2 xs:flex-row xs:space-y-0 xs:space-x-2">
            <ButtonSmall
              link="https://card-circuit.vercel.app/"
              text="Live Link"
            />
            <ButtonSmallZinc
              link="https://github.com/Ajiboye7/CardCircuit.git"
              text="GitHub Link"
            />
          </div>
        </div>
      </aside>
    </>
  );
};



export const YoutubeDetails = ({
  openYoutubeDetails,
  openYoutubeDetailsHandler,
}) => {
  return (
    <>
      <YoutubeDetailsOverlay
        openMfonAiDetails={openYoutubeDetails}
        openMfonAiDetailsHandler={openYoutubeDetailsHandler}
      />
      <aside
        className={`absolute z-10 left-0 w-[90%] bg-white rounded-xl transiton-all duration-500 lg:w-auto ${
          openYoutubeDetails ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          onClick={openYoutubeDetailsHandler}
          className="absolute top-2 right-2 bg-orange-400 rounded transition-colors hover:bg-orange-300"
        >
          <BsX size="25" color="white" />
        </button>
        <div className="pb-6 px-2 mt-12 sm:px-4">
          <div className="flex justify-between">
            <h3 className="mb-2">Youtube Clone</h3>
          </div>
          <p className="mb-2 text-lg font-semibold">
            Below, you'll discover additional details about my process in
            building the finance app
          </p>
          <ul className="flex flex-col space-y-2 mb-8">
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
              Used to build a modern and scalable web application with server-side rendering (SSR) and static site generation (SSG), ensuring fast load times and enhanced SEO.
              </span>
            </li>
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>Rapid Api was Integrated to fetch up-to-date video content directly from YouTube, allowing the app to stay current with the latest video trends and recommendations.</span>
            </li>
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
              I Utilized to create a sleek, modern, and fully responsive user interface (UI) that looks great across all devices, while minimizing the need for custom CSS.
              </span>
            </li>
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
              React Components were used to modularize the application, creating reusable components like video cards, sidebars, and search functionality for a more maintainable and scalable codebase
              </span>
            </li>
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
              I Effectively implemented to handle data fetching and content updates, ensuring users always see the latest videos, trending topics, and personalized content.
              </span>
            </li>
            <li className="flex space-x-2 max-w-3xl">
     
        </div>
      </aside>
    </>
  );
};













