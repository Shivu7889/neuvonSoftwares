export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Left side - Main heading */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-8">
              Don't settle for good,<br />
              let's go for amazing,<br />
              together
            </h2>
          </div>

          {/* Right side - Newsletter */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4">Our newsletter</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Scale your platform the right way. Get expert insights on design, development, and growth.
            </p>
            
            {/* Email input */}
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="px-6 py-3 bg-gray-700 hover:bg-gray-600 border border-gray-700 rounded-r-lg transition-colors">
                <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <nav className="flex flex-wrap gap-8 text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">Projects</a>
            <a href="#" className="hover:text-white transition-colors">Process</a>
            <a href="#" className="hover:text-white transition-colors">Blog</a>
            <a href="#" className="hover:text-white transition-colors">Join us</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </nav>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* Left side - Brand and tagline */}
            <div className="flex items-center gap-2 text-gray-400">
              <span className="font-semibold text-white">Yummygum</span>
              <span className="text-pink-500">©</span>
              <span className="text-sm">helping tech scale-ups catch up with their dreams since 2009</span>
            </div>

            {/* Center - Terms */}
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>

            {/* Right side - Social links */}
            <div className="flex items-center gap-4 text-gray-400">
              <a href="#" className="hover:text-white transition-colors flex items-center gap-1">
                <span>LinkedIn</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors flex items-center gap-1">
                <span>Twitter</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
