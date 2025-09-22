// components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo / Brand */}
        <div>
          <h2 className="text-white text-xl font-bold tracking-widest">
            RODCHOSMA
          </h2>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Exploring the world through goggles. Advanced AI enhanced capture
            with lasting power.
          </p>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-white font-semibold mb-4">Products</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                Smart Goggles
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                AI Frames
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Accessories
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Gift Cards
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Warranty
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Store Locator
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Customer Care
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4">Stay Connected</h3>
          <p className="text-sm text-gray-400 mb-4">
            Subscribe for updates, offers, and the latest AI eyewear tech.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 w-full rounded-l bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-red-600 text-white text-sm rounded-r hover:bg-red-500 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} RODCHOSMA. All rights reserved.
      </div>
    </footer>
  );
}
