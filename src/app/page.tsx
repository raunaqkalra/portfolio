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
              <p className="text-blue-600 dark:text-blue-400 mb-2">Kellton Tech Solutions Ltd. - Gurugram</p>
              <p className="text-gray-500 dark:text-gray-400 mb-4">08/2021 - Current</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Led the development of AdaniOne application, integrating multiple business verticals and managing state using Provider pattern.
              </p>
              <div className="flex items-center space-x-4">
                <Link 
                  href="/experience/kellton"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center"
                >
                  View Details →
                </Link>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.adanione.android" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  View on Play Store
                </a>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-gray-800/80 backdrop-blur-lg border border-gray-700 shadow-xl">
              <h3 className="text-2xl font-bold mb-2">Flutter Developer</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-2">VerboseTechLabs</p>
              <p className="text-gray-500 dark:text-gray-400 mb-4">11/2020 - 08/2021</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Developed multiple applications for food delivery platform including user, store, and delivery partner apps.
              </p>
              <Link 
                href="/experience/verbose"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center"
              >
                View Details →
              </Link>
            </div>

            <div className="p-8 rounded-2xl bg-gray-800/80 backdrop-blur-lg border border-gray-700 shadow-xl">
              <h3 className="text-2xl font-bold mb-2">Flutter Developer</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-2">ALGOWIRE TRADING TECHNOLOGIES PVT. LTD.</p>
              <p className="text-gray-500 dark:text-gray-400 mb-4">05/2020 - 11/2020</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Developed a hybrid e-commerce application for women's fashion retail with integrated payment solutions.
              </p>
              <div className="flex items-center space-x-4">
                <Link 
                  href="/experience/algowire"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center"
                >
                  View Details →
                </Link>
                <a 
                  href="http://www.saltatire.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-20" id="skills">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Flutter", "Dart", "Android", "iOS", "Google Maps", "REST API",
              "Provider Pattern", "MVVM", "Repository Pattern", "Jenkins",
              "Azure", "Firebase", "Bloc Pattern", "Zeplin", "Figma"
            ].map((skill, index) => (
              <div key={skill} className="p-4 text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200 dark:border-gray-700 shadow-xl transform transition-all duration-300 hover:scale-105">
                <p className="font-semibold">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="container mx-auto px-4 py-20" id="education">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
          
          <div className="space-y-8">
            <div className="p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200 dark:border-gray-700 shadow-xl">
              <h3 className="text-2xl font-bold mb-2">B.Tech: Information Technology</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-2">Guru Tegh Bahadur Institute Of Technology</p>
              <p className="text-gray-500 dark:text-gray-400 mb-2">03/2021</p>
              <p className="text-gray-600 dark:text-gray-300">Percentage: 81.73 / 100</p>
            </div>

            <div className="p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200 dark:border-gray-700 shadow-xl">
              <h3 className="text-2xl font-bold mb-2">12th</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-2">Modern International School, West Delhi</p>
              <p className="text-gray-500 dark:text-gray-400 mb-2">01/2017</p>
              <p className="text-gray-600 dark:text-gray-300">Percentage: 80.80 / 100</p>
            </div>

            <div className="p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200 dark:border-gray-700 shadow-xl">
              <h3 className="text-2xl font-bold mb-2">10th</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-2">Delhi Public School</p>
              <p className="text-gray-500 dark:text-gray-400 mb-2">01/2015</p>
              <p className="text-gray-600 dark:text-gray-300">Percentage: 79.80 / 100</p>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="container mx-auto px-4 py-20" id="languages">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Languages</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200 dark:border-gray-700 shadow-xl">
              <h3 className="text-xl font-bold mb-2">Hindi</h3>
              <p className="text-gray-600 dark:text-gray-300">First Language</p>
            </div>
            <div className="p-6 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200 dark:border-gray-700 shadow-xl">
              <h3 className="text-xl font-bold mb-2">English</h3>
              <p className="text-gray-600 dark:text-gray-300">Advanced (C1)</p>
            </div>
            <div className="p-6 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200 dark:border-gray-700 shadow-xl">
              <h3 className="text-xl font-bold mb-2">French</h3>
              <p className="text-gray-600 dark:text-gray-300">Beginner (A1)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities and Honors Section */}
      <section className="container mx-auto px-4 py-20" id="activities">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Activities And Honors</h2>
          <div className="space-y-8">
            <div className="p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200 dark:border-gray-700 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Awards</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>ADL Catalyst Award</li>
                <li>Performer of the Month</li>
              </ul>
            </div>
            
            <div className="p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200 dark:border-gray-700 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Activities</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Playing Guitar</li>
                <li>Playing Basketball</li>
                <li>Cooking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Accomplishments Section */}
      <section className="container mx-auto px-4 py-20" id="accomplishments">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Accomplishments</h2>
          <div className="p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200 dark:border-gray-700 shadow-xl">
            <p className="text-xl text-gray-600 dark:text-gray-300">🏆 Performer of the Month</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-20" id="contact">
        <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200 dark:border-gray-700 shadow-xl">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200 dark:border-gray-700 shadow-xl">
              <p className="space-y-2">
                <span className="font-semibold block">Email</span>
                <a href="mailto:kraunaq58@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                  kraunaq58@gmail.com
                </a>
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200 dark:border-gray-700 shadow-xl">
              <p className="space-y-2">
                <span className="font-semibold block">Phone</span>
                <a href="tel:+919996666582" className="text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                  +91-9996666582
                </a>
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200 dark:border-gray-700 shadow-xl">
              <p className="space-y-2">
                <span className="font-semibold block">Location</span>
                <span className="text-gray-600 dark:text-gray-300">Rewari, Haryana 123401</span>
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200 dark:border-gray-700 shadow-xl">
              <p className="space-y-2">
                <span className="font-semibold block">LinkedIn</span>
                <a 
                  href="https://www.linkedin.com/in/raunaqkalra/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  linkedin.com/in/raunaqkalra
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
