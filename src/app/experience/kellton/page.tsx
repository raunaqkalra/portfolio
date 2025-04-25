import Link from "next/link";

export default function KelltonExperience() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Link 
              href="/" 
              className="text-blue-400 hover:text-blue-300 transition-colors flex items-center"
            >
              ← Back to Home
            </Link>
          </div>

          <div className="p-8 rounded-2xl bg-gray-800/80 backdrop-blur-lg border border-gray-700 shadow-xl">
            <h1 className="text-4xl font-bold mb-4 text-white">Senior Software Engineer</h1>
            <p className="text-blue-400 mb-2">Kellton Tech Solutions Ltd. - Gurugram</p>
            <p className="text-gray-400 mb-8">08/2021 - Current</p>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">Key Responsibilities</h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Led the development of AdaniOne application, integrating multiple business verticals</li>
                  <li>Managed state using Provider pattern for efficient data flow</li>
                  <li>Implemented complex UI components and animations</li>
                  <li>Integrated third-party services and APIs</li>
                  <li>Conducted code reviews and mentored junior developers</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">Technologies Used</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    "Flutter & Dart", "Provider Pattern", "REST APIs", 
                    "Firebase", "Google Maps", "Git & GitHub"
                  ].map((tech) => (
                    <div key={tech} className="p-3 rounded-lg bg-gray-700/50 border border-gray-600">
                      <p className="text-gray-300">{tech}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">Achievements</h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Successfully launched AdaniOne application on Play Store with 4.5+ rating</li>
                  <li>Optimized app performance, reducing loading time by 40%</li>
                  <li>Implemented robust error handling and logging system</li>
                  <li>Reduced app size by 30% through code optimization</li>
                </ul>
              </div>

              <div className="pt-4">
                <a 
                  href="https://play.google.com/store/apps/details?id=com.adanione.android" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View on Play Store →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 