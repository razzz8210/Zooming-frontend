export function ZoomquiltInfo() {
  const illustrators = [
    'Aarav Sharma',
    'Priya Patel',
    'Arjun Reddy',
    'Kavya Iyer',
    'Rohan Mehta',
    'Ananya Singh',
    'Vikram Gupta',
    'Ishita Kapoor',
    'Aditya Kumar',
    'Neha Desai',
    'Siddharth Rao',
    'Riya Nair',
    'Karthik Krishnan',
    'Pooja Verma',
  ];

  return (
    <div className="space-y-6">
      {/* Main Title */}
      <div>
        <h1
          id="drawer-title"
          className="text-3xl font-bold text-orange-500 dark:text-orange-400"
        >
          The C*nt
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
          A collaborative infinitely zooming painting
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Created in 2025
        </p>
      </div>

      {/* Navigation Hint */}
      <div className="text-sm text-gray-600 dark:text-gray-400 italic">
        Up and down keys to navigate
      </div>

      {/* Creator */}
      <div>
        <p className="text-gray-700 dark:text-gray-300">
          A project by{' '}
          <a
            href="#"
            className="text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-500 underline focus:outline-none focus:ring-2 focus:ring-orange-500 rounded"
          >
            Raj Jaiswal
          </a>
        </p>
      </div>

      {/* Social Links */}
      <div className="flex gap-4">
        <a
          href="#"
          aria-label="Instagram"
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
        >
          <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
        <a
          href="#"
          aria-label="YouTube"
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
        >
          <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </a>
        <a
          href="#"
          aria-label="Twitter"
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
        >
          <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
        <a
          href="#"
          aria-label="Patreon"
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
        >
          <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15.386.524c-4.764 0-8.64 3.876-8.64 8.64 0 4.75 3.876 8.613 8.64 8.613 4.75 0 8.614-3.864 8.614-8.613C24 4.4 20.136.524 15.386.524M.003 23.537h4.22V.524H.003"/>
          </svg>
        </a>
      </div>

      {/* Links */}
      <div className="space-y-3">
        <a
          href="#"
          className="block text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-500 underline focus:outline-none focus:ring-2 focus:ring-orange-500 rounded"
        >
          The C*nt on YouTube
        </a>
        <a
          href="#"
          className="block text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-500 underline focus:outline-none focus:ring-2 focus:ring-orange-500 rounded"
        >
          Read about the history of this project
        </a>
      </div>

      {/* Divider */}
      <hr className="border-gray-200 dark:border-neutral-700" />

      {/* Mac App Store */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
          Screensaver for Mac
        </h2>
        <a
          href="#"
          className="inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
        >
          Download on the Mac App Store
        </a>
      </div>

      {/* Google Play */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
          Live Wallpaper for Android
        </h2>
        <a
          href="#"
          className="inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
        >
          Get it on Google Play
        </a>
      </div>

      {/* Divider */}
      <hr className="border-gray-200 dark:border-neutral-700" />

      {/* Illustrators */}
      <div>
        <p className="font-medium text-gray-700 dark:text-gray-300 mb-2">
          Participating illustrators:
        </p>
        <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          {illustrators.map((name, index) => (
            <span key={name}>
              {name}
              {index < illustrators.length - 1 && ', '}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
