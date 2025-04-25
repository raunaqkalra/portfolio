import Link from "next/link";

export default function VerboseExperience() {
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
            <h1 className="text-4xl font-bold mb-4 text-white">Flutter Developer</h1>
            <p className="text-blue-400 mb-2">VerboseTechLabs</p>
            <p className="text-gray-400 mb-8">11/2020 - 08/2021</p>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">Key Responsibilities</h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Developed multiple applications for food delivery platform</li>
                  <li>Created user, store, and delivery partner apps</li>
                  <li>Implemented real-time order tracking system</li>
                  <li>Integrated payment gateways and push notifications</li>
                  <li>Optimized app performance and user experience</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">Technologies Used</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    "Flutter & Dart", "Firebase", "Google Maps", 
                    "REST APIs", "Push Notifications", "Git & GitHub"
                  ].map((tech) => (
                    <div key={tech} className="p-3 rounded-lg bg-gray-700/50 border border-gray-600">
                      <p className="text-gray-300">{tech}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">Key Features Implemented</h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>User authentication and profile management</li>
                  <li>Real-time order tracking and status updates</li>
                  <li>Menu management and order processing</li>
                  <li>Delivery partner tracking and assignment</li>
                  <li>Push notifications for order updates</li>
                  <li>Payment integration and order history</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 