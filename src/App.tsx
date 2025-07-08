import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import description from "./config/description";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import { useState } from "react";
import ShinyText from "./components/React-Bits/ShinyText";
import BlurText from "./components/React-Bits/BlurText";
import SpotlightCard from "./components/React-Bits/SpotLight";

const App: React.FC = () => {
  const [image, setImage] = useState("profile-pic2.jpg");

  return (
    <div className="bg-black text-white min-h-screen flex justify-center nunito-regular px-4">
      <div className="w-full max-w-[600px] flex flex-col items-center py-12">
        {/* Header Section */}
        <header className="flex flex-col items-center text-center w-full mb-12 sm:mb-16">
          <div className="relative mb-6">
            <div className="absolute inset-0"></div>

            <div
              onMouseEnter={() => {
                setImage("img1.png");
              }}
              onMouseLeave={() => {
                setImage("profile-pic2.jpg");
              }}
            >
              <img
                src={image}
                alt="Syam T S"
                className="w-28 h-28 sm:w-[180px] hover:rotate-0 duration-500 hover:-translate-y-6 hover:scale-105 sm:h-[215px] rounded-2xl border object-cover border-[#7f8077] relative z-10"
              />
            </div>
          </div>

          <ShinyText
            text="Syam T S"
            disabled={false}
            speed={3}
            className="custom-class text-2xl sm:text-3xl font-bold bg-white bg-clip-text text-transparent nunito-regular"
          />

          <ShinyText
            text="Fullstack Developer | MERN Stack"
            disabled={false}
            speed={3}
            className="text-md sm:text-lg text-gray-400 nunito-regular"
          />

          <p className="flex gap-2 text-gray-400 nunito-regular">
            <div>
              <Github
                className={
                  image === "img1.png"
                    ? "h-5 w-5 shadow-xl shadow-white"
                    : "h-5 w-5"
                }
              />
            </div>
            <a href="https://github.com/syam-ts" target="_blank">
              <span
                className={
                  image === "img1.png"
                    ? "text-md border-b"
                    : "text-md hover:border-b"
                }
              >
                <ShinyText
                  text="github"
                  disabled={false}
                  speed={3}
                  className="text-sm sm:text-sm text-gray-400 nunito-regular"
                />
              </span>
            </a>
          </p>
        </header>

        {/* Bio Section */}
        <section className="w-full mb-12 sm:mb-20 px-4 py-6 sm:px-6 sm:py-8 bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors">
          <p className="text-sm sm:text-md leading-relaxed text-gray-300 line-clamp-5 montserrat-regular">
            <BlurText
              text={description}
              delay={150}
              animateBy="words"
              direction="top"
              className="text-md"
            />
          </p>
        </section>

        {/* Skills Section */}


        
        <section className="w-full mb-12 sm:mb-20">
          <div className="flex items-center mb-6 sm:mb-8">
            <div className="h-px bg-gray-700 flex-grow"></div>
            <p className="text-2xl sm:text-3xl font-semibold px-4 nunito-regular">
              Skills
            </p>
            <div className="h-px bg-gray-700 flex-grow"></div>
          </div>
          <Skills />
        </section>

        {/* Projects Section */}
        <section className="w-full mb-12 sm:mb-20">
          <div className="flex items-center mb-6 sm:mb-8">
            <div className="h-px bg-gray-700 flex-grow"></div>
            <h2 className="text-2xl sm:text-3xl font-semibold px-4 nunito-regular">
              Projects
            </h2>
            <div className="h-px bg-gray-700 flex-grow"></div>
          </div>
          <div className="space-y-6 sm:space-y-8 w-full">
            <Projects />
          </div>
        </section>



        <section className="w-full mb-12 sm:mb-20">
          <div>
            <div className="flex items-center mb-6 sm:mb-8">
              <div className="h-px bg-gray-700 flex-grow"></div>
              <h2 className="text-2xl sm:text-3xl font-semibold px-4 nunito-regular">
                Resume
              </h2>
              <div className="h-px bg-gray-700 flex-grow"></div>
            </div>
            <Resume />
          </div>
        </section>

        {/* Social Media Section */}
        <section className="w-full mb-12 sm:mb-16">
          <div className="flex items-center mb-6 sm:mb-8">
            <div className="h-px bg-gray-700 flex-grow"></div>
            <h2 className="text-2xl sm:text-3xl font-semibold px-4 nunito-regular">
              Connect
            </h2>
            <div className="h-px bg-gray-700 flex-grow"></div>
          </div>

          <div className="flex justify-center gap-4 sm:gap-6">
            <a
              href="https://github.com/syam-ts"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 bg-gray-900 rounded-full hover:bg-gray-800 transition-colors group"
            >
              <Github
                size={24}
                className="text-gray-400 group-hover:text-white"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/syamts"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 bg-gray-900 rounded-full hover:bg-gray-800 transition-colors group"
            >
              <Linkedin
                size={24}
                className="text-gray-400 group-hover:text-white"
              />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=syamnandhu3@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 bg-gray-900 rounded-full hover:bg-gray-800 transition-colors group"
            >
              <Mail
                size={24}
                className="text-gray-400 group-hover:text-white"
              />
            </a>
            <a
              href="https://www.instagram.com/xtreamer3/"
              target="_blank"
              className="p-3 sm:p-4 bg-gray-900 rounded-full hover:bg-gray-800 transition-colors group"
            >
              <Instagram
                size={24}
                className="text-gray-400 group-hover:text-white"
              />
            </a>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
