import { Github, Linkedin, Mail } from 'lucide-react';
import Projects from './components/Projects';
import Skills from './components/Skills';
import description from './config/description';
import Footer from './components/Footer';


const App: React.FC = () => {

  return (
    <div className="bg-black text-white min-h-screen flex justify-center nunito-regular">
      <div className="w-1/3 flex flex-col items-center px-4 py-12" style={{ maxWidth: '700px', margin: '0 auto' }}>
        {/* Header Section  */}
        <header className="flex flex-col items-center text-center w-full mb-16">
          <div className="relative mb-6">
            <div className="absolute inset-0"></div>
            <img
              src="profile-pic.jpg"
              alt="Your Name"
              className="w-32 h-32 rounded-2xl border border-[#7f8077] relative z-10"
            />
          </div>
          <h1 className="text-3xl font-bold bg-white bg-clip-text text-transparent">Syam T S</h1>
          <p className="text-lg text-gray-400 mt-2">Fullstack Developer</p>
        </header>

        {/* Bio Section */}
        <section className="w-full mb-20 px-6 py-8 bg-gray-900 rounded-xl hover:bg-gray-800">
          <p className="text-lg leading-relaxed text-gray-300 line-clamp-5">
            {description}
          </p>
        </section>

        {/* Skills Section*/}
        <section className="w-full mb-20">
          <div className="flex items-center mb-8">
            <div className="h-px bg-gray-700 flex-grow"></div>
            <p className="text-3xl font-semibold px-4">Skills</p>
            <div className="h-px bg-gray-700 flex-grow"></div>
          </div>

          <Skills />
        </section>

        {/* Projects Section*/}
        <section className="w-full mb-20">
          <div className="flex items-center mb-8">
            <div className="h-px bg-gray-700 flex-grow"></div>
            <h2 className="text-3xl font-semibold px-4">Projects</h2>
            <div className="h-px bg-gray-700 flex-grow"></div>
          </div>

          <div className="space-y-8 w-full">
            <Projects />

          </div>
        </section>

        {/* Social Media Section*/}
        <section className="w-full mb-16">
          <div className="flex items-center mb-8">
            <div className="h-px bg-gray-700 flex-grow"></div>
            <h2 className="text-3xl font-semibold px-4">Connect</h2>
            <div className="h-px bg-gray-700 flex-grow"></div>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/syam-ts"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-900 rounded-full hover:bg-gray-800 transition-colors group"
            >
              <Github size={24} className="text-gray-400 group-hover:text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/syamts"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-900 rounded-full hover:bg-gray-800 transition-colors group"
            >
              <Linkedin size={24} className="text-gray-400 group-hover:text-white" />
            </a>
            <a
              href="syamnandhu3@gmail.com"
              className="p-4 bg-gray-900 rounded-full hover:bg-gray-800 transition-colors group"
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