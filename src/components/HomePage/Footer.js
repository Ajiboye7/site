import { BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs';



const Footer = () => {
  return (
    <footer className="container mx-auto max-w-7xl pt-12 pb-8 px-4 text-gray-800 lg:pt-16 md:px-10 lg-pt-20">
      <div className="flex flex-col-reverse items-start justify-between space-y-reverse space-y-12 mb-10 sm:flex-row sm:space-y-0">
        <div>
          <h4 className="mb-4 text-2xl font-bold uppercase">Ajiboye Muyideen</h4>
          <p className="max-w-lg">
            A Software Engineer focused on building the frontend and backend of
            websites that leads to the success of the overall product
          </p>
        </div>

        <div className="flex flex-col items-start md:items-center">
          <h4 className="mb-4 text-2xl font-bold uppercase">Social</h4>
          <div className="flex space-x-4">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/ajiboye-muyideen-b5a5291b0/"
              className="inline-block transition-all hover:scale-110"
             
            >
              <BsLinkedin size={24} />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://x.com/MuyideenAjiboye"
              className="inline-block transition-all hover:scale-110"
            >
              <BsTwitter size={24} />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/Ajiboye7"
              className="inline-block transition-all hover:scale-110"
            >
              <BsGithub size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
