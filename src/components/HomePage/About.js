import Skills from './Skills';
import Button from '../UI/Button';

const About = () => {
  return (
    <section id="about" className="pt-16 pb-16 lg:pt-20">
      <div className="px-2 mb-12 text-center lg:mb-16">
        <h2>About Me</h2>
        <p className="max-w-2xl px-4 mx-auto text-lg text-gray-800 sm:px-10 md:text-xl md:max-w-3xl md:px-0">
          Here you will find more information about me, what I do, and my
          current skills in terms of programming and technology.
        </p>
      </div>

      <div className="container mx-auto max-w-7xl flex flex-col space-y-12 px-4 sm:px-10 lg:flex-row lg:space-y-0 lg:space-x-16">
        <div className="w-full">
          <h3 className="mb-6">Get to know me!</h3>
          <div className="flex flex-col items-center space-y-4 mb-8 text-lg text-gray-800 lg:mb-10">
            <p>
             I'm a dynamic and innovative <span className='font-semibold'>Software Developer </span>hailing from the vibrant city of Lagos, Nigeria. With a deep-rooted passion for crafting digital experiences and a solid background in <span className='font-semibold'>Software Development</span>, I've spent over 3 years honing my skills and pushing the boundaries of what's possible in the world of web development.
            </p>
            {/*<p>
              I enjoy sharing and interacting with people in the Web Dev world.
              I believe that this helps me to grow and learn in this field. You
              can connect with me on{' '}
              <span>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/mfonpeeter/"
                  className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600 font-bold"
                >
                  LinkedIn
                </a>
              </span>{' '}
              and{' '}
              <span>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://twitter.com/mfonPeeter"
                  className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600 font-bold"
                >
                  Twitter
                </a>
              </span>{' '}
              where I share my experiences and thoughts on various topics
              related to Web Development.
            </p>*/}
            <p>
              I'm open to <span className="font-semibold">Job</span>{' '}
              opportunities where I can learn, share ideas and work with
              like-minded peole. If you have any good opportunities that matches
              my skills and experience, please don't hesitate to {''}
              <span className="font-semibold">contact</span> me.
            </p>
          </div>
          <Button link="ajiboyemuyideen7@gmail.com" text="Contact" />
        </div>

        <div className="w-full">
          <h3 className="mb-6">My Skills</h3>
          <div className="grid grid-cols-2 gap-2.5 mb-2.5 xs:grid-cols-3 sm:grid-cols-4">
            <Skills text="HTML" />
            <Skills text="CSS" />
            <Skills text="JavaScript" />
            <Skills text="TypeScript" />
            <Skills text="React" />
            <Skills text="Next.js" />
            <Skills text="Git" />
            <Skills text="GitHub" />
            <Skills text="Node.js" />
            <Skills text="MongoDb" />
            <Skills text="JWT" />
            <Skills text="Express.js" />
          </div>
          <div className="grid grid-cols-1 gap-2.5 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
            <Skills text="SQL" />
            <Skills text="Tailwind CSS" />
            <Skills text="Responsive Design" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
