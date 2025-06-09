import { Github, Linkedin, Mail } from 'lucide-react';
import Projects from './components/Projects';
import Skills from './components/Skills';
import description from './config/description';
import Footer from './components/Footer';


const App: React.FC = () => {

  return (
    <div className="bg-black text-white min-h-screen flex justify-center nunito-regular px-4">
      <div className="w-full max-w-[600px] flex flex-col items-center py-12">
        {/* Header Section */}
        <header className="flex flex-col items-center text-center w-full mb-12 sm:mb-16">
          <div className="relative mb-6">
            <div className="absolute inset-0"></div>
            <img
              src="profile-pic2.jpg"
              alt="Syam T S"
              className="w-28 h-28 sm:w-[180px] sm:h-[215px] rounded-2xl border object-fill border-[#7f8077] relative z-10"
            />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold bg-white bg-clip-text text-transparent nunito-regular">
            Syam T S
          </h1>
          <p className="text-md sm:text-lg text-gray-400 mt-2 nunito-regular">
            Fullstack Developer | MERN Stack 
          </p>
        </header>

        {/* Bio Section */}
        <section className="w-full mb-12 sm:mb-20 px-4 py-6 sm:px-6 sm:py-8 bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors">
          <p className="text-sm sm:text-md leading-relaxed text-gray-300 line-clamp-5 montserrat-regular">
            {description}
          </p>
        </section>

        {/* Skills Section */}
        <section className="w-full mb-12 sm:mb-20">
          <div className="flex items-center mb-6 sm:mb-8">
            <div className="h-px bg-gray-700 flex-grow"></div>
            <p className="text-2xl sm:text-3xl font-semibold px-4 nunito-regular">Skills</p>
            <div className="h-px bg-gray-700 flex-grow"></div>
          </div>
          <Skills />
        </section>

        {/* Projects Section */}
        <section className="w-full mb-12 sm:mb-20">
          <div className="flex items-center mb-6 sm:mb-8">
            <div className="h-px bg-gray-700 flex-grow"></div>
            <h2 className="text-2xl sm:text-3xl font-semibold px-4 nunito-regular">Projects</h2>
            <div className="h-px bg-gray-700 flex-grow"></div>
          </div>
          <div className="space-y-6 sm:space-y-8 w-full">
            <Projects />
          </div>
        </section>

        {/* Social Media Section */}
        <section className="w-full mb-12 sm:mb-16">
          <div className="flex items-center mb-6 sm:mb-8">
            <div className="h-px bg-gray-700 flex-grow"></div>
            <h2 className="text-2xl sm:text-3xl font-semibold px-4 nunito-regular">Connect</h2>
            <div className="h-px bg-gray-700 flex-grow"></div>
          </div>

          <div className="flex justify-center gap-4 sm:gap-6">
            <a
              href="https://github.com/syam-ts"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 bg-gray-900 rounded-full hover:bg-gray-800 transition-colors group"
            >
              <Github size={24} className="text-gray-400 group-hover:text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/syamts"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 bg-gray-900 rounded-full hover:bg-gray-800 transition-colors group"
            >
              <Linkedin size={24} className="text-gray-400 group-hover:text-white" />
            </a>
            <a
              href="mailto:syamnandhu3@gmail.com"
              className="p-3 sm:p-4 bg-gray-900 rounded-full hover:bg-gray-800 transition-colors group"
            >
              <Mail size={24} className="text-gray-400 group-hover:text-white" />
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