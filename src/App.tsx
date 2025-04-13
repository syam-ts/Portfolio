import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';



export default function App() {
  return (
    <div className="bg-black text-white min-h-screen flex justify-center nunito-regular">
      <div className="w-1/3 flex flex-col items-center px-4 py-12" style={{ maxWidth: '700px', margin: '0 auto' }}>
        {/* Header Section - with more prominence */}
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

        {/* Bio Section - with stylish border */}
        <section className="w-full mb-20 px-6 py-8 bg-gray-900 rounded-xl">
          <p className="text-lg leading-relaxed text-gray-300">
            I'm a passionate web developer with expertise in React.js, Node.js, Express.js, Mongodb, Javascript,
            Docker, Postgress, TypeScript and more. I love crafting elegant user interfaces and bringing designs to life through clean, maintainable code and modern development practices.
          </p>
        </section>

        {/* Skills Section - with improved visual design */}
        <section className="w-full mb-20">
          <div className="flex items-center mb-8">
            <div className="h-px bg-gray-700 flex-grow"></div>
            <p className="text-3xl font-semibold px-4">Skills</p>
            <div className="h-px bg-gray-700 flex-grow"></div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Git', 'Express.js', 'Docker'].map((skill) => (
              <div key={skill} className="bg-gray-900 rounded-lg p-4 flex items-center justify-center transform transition-transform hover:scale-105 hover:bg-black">
                <span className="text-lg font-medium ">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section - with enhanced cards */}
        <section className="w-full mb-20">
          <div className="flex items-center mb-8">
            <div className="h-px bg-gray-700 flex-grow"></div>
            <h2 className="text-3xl font-semibold px-4">Projects</h2>
            <div className="h-px bg-gray-700 flex-grow"></div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gray-900 p-6 rounded-xl gradient-border shadow-lg border border-gray-800 transform transition-all">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-200">DevLink</h3>
                <a href="https://dev-link-frontend.vercel.app/" className="p-2 rounded-full bg-gray-800 text-gray-300 hover:bg-blue-500 hover:text-white transition-colors">
                  <ExternalLink size={16} />
                </a>
              </div>
              <div className='py-3'>
              <p className="text-gray-400 mb-4 line-clamp-2">
              Businesses and individuals can connect through this platform to conduct business. Clients post a description of their job and a price range they are willing to pay for a freelancer to complete it. The client may invite specific freelancers to apply for their jobs, or post the job for any freelancer who 
              </p>
              </div>
              <div className="flex flex-wrap gap-2 line-clamp-1">
                <span className="px-3 py-1 bg-gray-800 text-xs rounded-full text-blue-400">React</span>
                <span className="px-3 py-1 bg-gray-800 text-xs rounded-full text-purple-400">TypeScript</span>
                <span className="px-3 py-1 bg-gray-800 text-xs rounded-full text-green-400">Node.js</span>
                <span className="px-3 py-1 bg-gray-800 text-xs rounded-full text-yellow-400">MongoDB</span>
                <span className="px-3 py-1 bg-gray-800 text-xs rounded-full text-pink-400">Docker</span>
                <span className="px-3 py-1 bg-gray-800 text-xs rounded-full text-sky-400">Stripe</span>
                <span className="px-3 py-1 bg-gray-800 text-xs rounded-full text-green-400">AWS</span>
                <span className="px-3 py-1 bg-gray-800 text-xs rounded-full text-sky-400">...</span>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl gradient-border shadow-lg border border-gray-800 transform transition-all hover:border-blue-500">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-200">OneCart</h3>
                <a href="www.onecart.services" className="p-2 rounded-full bg-gray-800 text-gray-300 hover:bg-blue-500 hover:text-white transition-colors">
                  <ExternalLink size={16} />
                </a>
              </div>
              <p className="text-gray-400 mb-4">Another brief project description to showcase your work and experience with modern web technologies.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-800 text-xs rounded-full text-blue-400">Node.s</span>
                <span className="px-3 py-1 bg-gray-800 text-xs rounded-full text-yellow-400">JavaScript</span>
                <span className="px-3 py-1 bg-gray-800 text-xs rounded-full text-pink-400">CSS</span>
                <span className="px-3 py-1 bg-gray-800 text-xs rounded-full text-sky-400">Tailwind</span>
                <span className="px-3 py-1 bg-gray-800 text-xs rounded-full text-green-400">Razorpay</span>
              </div>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-xl gradient-border shadow-lg border border-gray-800 transform transition-all hover:border-blue-500">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-200">Clever-AI</h3>
                <a href="https://clever-ai-16m6.onrender.com/" className="p-2 rounded-full bg-gray-800 text-gray-300 hover:bg-blue-500 hover:text-white transition-colors">
                  <ExternalLink size={16} />
                </a>
              </div>
              <p className="text-gray-400 mb-4">Another brief project description to showcase your work and experience with modern web technologies.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-800 text-xs rounded-full text-blue-400">React</span>
                <span className="px-3 py-1 bg-gray-800 text-xs rounded-full text-yellow-400">TypeScript</span>
                <span className="px-3 py-1 bg-gray-800 text-xs rounded-full text-pink-400">Aceternity</span>
                <span className="px-3 py-1 bg-gray-800 text-xs rounded-full text-yellow-400">Framer Motion</span>
                <span className="px-3 py-1 bg-gray-800 text-xs rounded-full text-green-400">Firebase</span>
                <span className="px-3 py-1 bg-gray-800 text-xs rounded-full text-pink-400">...</span>
              </div>
            </div>
          
          </div>
        </section>

        {/* Social Media Section - with attractive icons */}
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
        <footer className="w-full pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Syam T S Devloper.</p>
        </footer>
      </div>
    </div>
  );
}