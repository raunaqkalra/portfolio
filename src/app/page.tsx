import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-32 relative">
        <div className="absolute inset-0 bg-blue-600/10 backdrop-blur-3xl rounded-full filter blur-3xl"></div>
        <div className="text-center relative animate-fade-in">
          <h1 className="text-6xl font-bold mb-4">Raunaq Kalra</h1>
          <p className="text-2xl text-gray-300 mb-8">Senior Software Engineer</p>
          <div className="flex justify-center space-x-6">
            <a 
              href="#contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Contact Me
            </a>
            <a 
              href="https://www.linkedin.com/in/raunaqkalra/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="border border-blue-600 hover:border-blue-700 hover:bg-blue-600/10 text-white px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-20" id="about">
        <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-gray-800/80 backdrop-blur-lg border border-gray-700 shadow-xl">
          <h2 className="text-4xl font-bold text-center mb-12">Summary</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Meticulous Software Engineer with 4 years of experience designing, testing and developing software solutions. 
            In-depth understanding of mobile technologies with focus on delivering innovative business solutions. 
            Excels in fast-paced, high-energy and deadline-driven environment with willingness to take on additional tasks.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto px-4 py-20" id="experience">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
          
          <div className="space-y-8">
            <div className="p-8 rounded-2xl bg-gray-800/80 backdrop-blur-lg border border-gray-700 shadow-xl">
              <h3 className="text-2xl font-bold mb-2">Senior Software Engineer</h3>
              <p className="text-blue-400 mb-2">Kellton Tech Solutions Ltd. - Gurugram</p>
              <p className="text-gray-400 mb-4">May 2023 - Present</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Leading the development of AdaniOne mobile application</li>
                <li>Implementing new features and optimizing performance</li>
                <li>Mentoring junior developers and conducting code reviews</li>
              </ul>
              <Link href="/experience/kellton" className="mt-4 inline-block text-blue-400 hover:text-blue-300">
                View Details →
              </Link>
            </div>

            <div className="p-8 rounded-2xl bg-gray-800/80 backdrop-blur-lg border border-gray-700 shadow-xl">
              <h3 className="text-2xl font-bold mb-2">Flutter Developer</h3>
              <p className="text-blue-400 mb-2">VerboseTechLabs</p>
              <p className="text-gray-400 mb-4">Jan 2023 - May 2023</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Developed cross-platform mobile applications</li>
                <li>Implemented UI/UX designs and animations</li>
                <li>Integrated RESTful APIs and third-party services</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-gray-800/80 backdrop-blur-lg border border-gray-700 shadow-xl">
              <h3 className="text-2xl font-bold mb-2">Flutter Developer</h3>
              <p className="text-blue-400 mb-2">ALGOWIRE TRADING TECHNOLOGIES PVT. LTD.</p>
              <p className="text-gray-400 mb-4">Aug 2021 - Jan 2023</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Built e-commerce mobile applications</li>
                <li>Integrated payment gateways and authentication</li>
                <li>Optimized app performance and user experience</li>
              </ul>
              <Link href="/experience/algowire" className="mt-4 inline-block text-blue-400 hover:text-blue-300">
                View Details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-20" id="skills">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-gray-800/80 backdrop-blur-lg border border-gray-700 shadow-xl text-center">
              <h3 className="text-xl font-bold mb-2">Mobile Development</h3>
              <p className="text-gray-300">Flutter, Dart, React Native</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-800/80 backdrop-blur-lg border border-gray-700 shadow-xl text-center">
              <h3 className="text-xl font-bold mb-2">Web Development</h3>
              <p className="text-gray-300">React, Next.js, TypeScript</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-800/80 backdrop-blur-lg border border-gray-700 shadow-xl text-center">
              <h3 className="text-xl font-bold mb-2">Backend</h3>
              <p className="text-gray-300">Node.js, Express, MongoDB</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-800/80 backdrop-blur-lg border border-gray-700 shadow-xl text-center">
              <h3 className="text-xl font-bold mb-2">UI/UX</h3>
              <p className="text-gray-300">Figma, Material Design</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-800/80 backdrop-blur-lg border border-gray-700 shadow-xl text-center">
              <h3 className="text-xl font-bold mb-2">Version Control</h3>
              <p className="text-gray-300">Git, GitHub, Bitbucket</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-800/80 backdrop-blur-lg border border-gray-700 shadow-xl text-center">
              <h3 className="text-xl font-bold mb-2">Testing</h3>
              <p className="text-gray-300">Jest, Flutter Test</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="container mx-auto px-4 py-20" id="education">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
          <div className="p-8 rounded-2xl bg-gray-800/80 backdrop-blur-lg border border-gray-700 shadow-xl">
            <h3 className="text-2xl font-bold mb-2">Bachelor of Technology</h3>
            <p className="text-blue-400 mb-2">Computer Science Engineering</p>
            <p className="text-gray-400">Guru Gobind Singh Indraprastha University - 2017-2021</p>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="container mx-auto px-4 py-20" id="languages">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Languages</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-gray-800/80 backdrop-blur-lg border border-gray-700 shadow-xl text-center">
              <p className="text-gray-300">English</p>
              <p className="text-sm text-gray-400">Professional</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-800/80 backdrop-blur-lg border border-gray-700 shadow-xl text-center">
              <p className="text-gray-300">Hindi</p>
              <p className="text-sm text-gray-400">Native</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-800/80 backdrop-blur-lg border border-gray-700 shadow-xl text-center">
              <p className="text-gray-300">French</p>
              <p className="text-sm text-gray-400">Beginner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="container mx-auto px-4 py-20" id="activities">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Activities & Honors</h2>
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-gray-800/80 backdrop-blur-lg border border-gray-700 shadow-xl">
              <h3 className="text-xl font-bold mb-2">Hackathon Winner</h3>
              <p className="text-gray-300">Won first prize in CodeFest 2020 for developing a healthcare app</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-800/80 backdrop-blur-lg border border-gray-700 shadow-xl">
              <h3 className="text-xl font-bold mb-2">Technical Speaker</h3>
              <p className="text-gray-300">Regular speaker at local tech meetups and conferences</p>
            </div>
          </div>
        </div>
      </section>

      {/* Accomplishments Section */}
      <section className="container mx-auto px-4 py-20" id="accomplishments">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Accomplishments</h2>
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-gray-800/80 backdrop-blur-lg border border-gray-700 shadow-xl">
              <h3 className="text-xl font-bold mb-2">ADL Catalyst Award</h3>
              <p className="text-gray-300">Recognized for exceptional performance and innovation in software development</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-800/80 backdrop-blur-lg border border-gray-700 shadow-xl">
              <h3 className="text-xl font-bold mb-2">Performer of the Month</h3>
              <p className="text-gray-300">Awarded for outstanding contributions and consistent high performance</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-800/80 backdrop-blur-lg border border-gray-700 shadow-xl">
              <h3 className="text-xl font-bold mb-2">Published Apps</h3>
              <p className="text-gray-300">Successfully published 5+ apps on Google Play Store</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-800/80 backdrop-blur-lg border border-gray-700 shadow-xl">
              <h3 className="text-xl font-bold mb-2">Performance Optimization</h3>
              <p className="text-gray-300">Reduced app loading time by 40% through code optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-20" id="contact">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Information</h2>
          <div className="p-8 rounded-2xl bg-gray-800/80 backdrop-blur-lg border border-gray-700 shadow-xl">
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <a href="mailto:kraunaq58@gmail.com" className="text-blue-400 hover:text-blue-300">
                  kraunaq58@gmail.com
                </a>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <p className="text-gray-300">+91 9996666582</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Location</h3>
                <p className="text-gray-300">Gurugram, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
