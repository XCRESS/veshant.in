
export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-gray-900 dark:text-white">
              Veshant Singh Dahiya
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
              <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
              <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a>
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I&apos;m <span className="text-blue-600 dark:text-blue-400">Veshant</span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Web Developer at Cosmos Financial Group
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Passionate full-stack developer specializing in building scalable web applications, 
              RAG applications, and AI-powered chatbots. Based in Faridabad, Delhi NCR.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Get In Touch
              </a>
              <a 
                href="#projects" 
                className="border border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-8 py-3 rounded-lg font-medium transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I&apos;m a web developer at Cosmos Financial Group with expertise in building 
              enterprise-level applications and AI-powered solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Current Role</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Working as a Web Developer at Cosmos Financial Group, where I develop and maintain 
                complex web applications, implement AI chatbots, and create scalable solutions 
                for enterprise clients.
              </p>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Expertise</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Full-stack web development with MERN stack and Next.js</li>
                <li>• RAG (Retrieval-Augmented Generation) applications</li>
                <li>• AI chatbots and conversational interfaces</li>
                <li>• Enterprise-level HRMS and job portal systems</li>
                <li>• Cloud deployment and AWS services</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Location:</span>
                  <span className="text-gray-900 dark:text-white">Faridabad, Delhi NCR</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Company:</span>
                  <span className="text-gray-900 dark:text-white">Cosmos Financial Group</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Specialization:</span>
                  <span className="text-gray-900 dark:text-white">Full-stack Development</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Focus:</span>
                  <span className="text-gray-900 dark:text-white">AI & Web Apps</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Technologies</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Technologies I work with to build amazing digital experiences
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Languages</h3>
              <div className="space-y-2">
                <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">JavaScript</span>
                <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">TypeScript</span>
                <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">Python</span>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Frontend</h3>
              <div className="space-y-2">
                <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">React</span>
                <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">Next.js</span>
                <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Backend</h3>
              <div className="space-y-2">
                <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">Node.js</span>
                <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">Express</span>
                <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">MongoDB</span>
                <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Cloud & Tools</h3>
              <div className="space-y-2">
                <span className="inline-block bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-3 py-1 rounded-full text-sm">AWS</span>
                <span className="inline-block bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-3 py-1 rounded-full text-sm">Git</span>
                <span className="inline-block bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-3 py-1 rounded-full text-sm">REST APIs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Some of the projects I&apos;ve worked on recently
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* HRMS Project */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Enterprise HRMS Platform</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Comprehensive HR management system with employee directory, attendance tracking, 
                  AI chatbot (HR Buddy), salary slip generation, and role-based authentication.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">React</span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">Node.js</span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">MongoDB</span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">AI Chatbot</span>
                </div>
                <div className="flex gap-4">
                  <a 
                    href="https://hr.intakesense.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Live Demo →
                  </a>
                </div>
              </div>
            </div>

            {/* Job Portal Project */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Job Portal Platform</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Complete job portal solution with company listings, advanced fuzzy search, 
                  separate dashboards for job seekers and employers, and intelligent matching algorithms.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm">Next.js</span>
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm">TypeScript</span>
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm">PostgreSQL</span>
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm">Fuzzy Search</span>
                </div>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/xcress" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View Code →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Let&apos;s discuss your next project or collaboration opportunity
            </p>
          </div>
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <a 
                href="mailto:veshantdahiya@gmail.com" 
                className="text-2xl text-blue-600 dark:text-blue-400 hover:underline"
              >
                veshantdahiya@gmail.com
              </a>
            </div>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://github.com/xcress" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/veshant-dahiya" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://twitter.com/_Veshant" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Twitter
              </a>
              <a 
                href="https://veshant.hashnode.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Blog
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Veshant Singh Dahiya. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
