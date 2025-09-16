export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 px-6">
        {/* Left Section */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-extrabold mb-4 underline">
            SAGAR DARSHAN GUEST HOUSE
          </h2>
          <p className="text-gray-300 mb-4">
            At <strong>Sagar Darshan Guest House</strong>, we welcome you with
            warmth and care. Whether it’s a short visit or a long holiday, our
            guest house is your home away from home in Somnath.
          </p>
          <p className="mb-4">
            🙏 Namaste, Book Your Rooms Now at Sagar Darshan Guest House!
          </p>

          <p className="flex items-center mb-2 text-orange-400">
            📞 <span className="ml-2 text-white">+91 8852083442</span>
          </p>
          <p className="flex items-center mb-2 text-orange-400">
            ✉️{" "}
            <span className="ml-2 text-white">
              sagardarshanofficialtrust@gmail.com
            </span>
          </p>
          <p className="flex items-center text-orange-400">
            📍{" "}
            <span className="ml-2 text-white">
              Prabhas Patan, Gujarat 362268
            </span>
          </p>
        </div>

        {/* Other Pages */}
        <div>
          <h3 className="text-lg font-bold text-orange-500 mb-4">
            OTHER PAGES
          </h3>
          <ul className="space-y-2">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Team</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-orange-500 mb-4">
            QUICK LINKS
          </h3>
          <ul className="space-y-2">
            <li>Privacy Policy</li>
            <li>Term of Services</li>
            <li>Online Booking</li>
            <li>Pricing & Packs</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Work Hours */}
        <div>
          <h3 className="text-lg font-bold text-orange-500 mb-4">WORK HOURS</h3>
          <p className="flex items-center mb-2">⏰ Mon-Sun 24x7</p>
          <p className="text-gray-300 mb-4">
            Click to Call Our Receptionist to book your desirable Stay.
          </p>
          <button className="bg-orange-500 text-white px-6 py-2 font-bold rounded-md">
            CLICK HERE
          </button>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-4 text-center text-gray-400 text-sm">
        © 2025 All Rights Reserved To Sagar Darshaan Guest House
      </div>
    </footer>
  );
}
