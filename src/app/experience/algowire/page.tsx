import Link from "next/link";

export default function AlgowireExperience() {
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
            <p className="text-blue-400 mb-2">ALGOWIRE TRADING TECHNOLOGIES PVT. LTD.</p>
            <p className="text-gray-400 mb-8">05/2020 - 11/2020</p>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">Key Responsibilities</h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Developed a hybrid e-commerce application for women's fashion retail</li>
                  <li>Integrated payment solutions with Razorpay</li>
                  <li>Implemented user authentication and profile management</li>
                  <li>Created product catalog and shopping cart functionality</li>
                  <li>Developed order tracking and management system</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">Technologies Used</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    "Flutter & Dart", "Razorpay Payment Integration", "Firebase Authentication",
                    "RESTful APIs", "Git & GitHub", "State Management"
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
                  <li>Product catalog with search and filtering</li>
                  <li>Shopping cart functionality</li>
                  <li>Secure payment integration with Razorpay</li>
                  <li>Order tracking and management</li>
                  <li>Push notifications for order updates</li>
                </ul>
              </div>

              <div className="pt-4">
                <a 
                  href="http://www.saltatire.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Visit Website →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 