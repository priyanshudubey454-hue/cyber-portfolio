import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#050816]/80 backdrop-blur-xl border-b border-blue-500/20 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-5">

        {/* Logo */}
        <a
          href="#home"
          className="text-3xl font-extrabold tracking-widest hover:scale-110 duration-300"
        >
          <span className="text-blue-500">P</span>
          <span className="text-pink-500">D</span>
        </a>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-10 text-gray-300 font-medium">

          <li>
            <a
              href="#home"
              className="hover:text-blue-500 hover:-translate-y-1 duration-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-blue-500 hover:-translate-y-1 duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-blue-500 hover:-translate-y-1 duration-300"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-blue-500 hover:-translate-y-1 duration-300"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#certificates"
              className="hover:text-blue-500 hover:-translate-y-1 duration-300"
            >
              Certificates
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-blue-500 hover:-translate-y-1 duration-300"
            >
              Contact
            </a>
          </li>

        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <a
            href="https://github.com/priyanshu454-hue"
            target="_blank"
            rel="noreferrer"
            className="text-2xl text-gray-300 hover:text-blue-500 duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/priyanshu-dubey-a14553361"
            target="_blank"
            rel="noreferrer"
            className="text-2xl text-gray-300 hover:text-blue-500 duration-300"
          >
            <FaLinkedin />
          </a>

          <button className="bg-gradient-to-r from-blue-600 to-pink-600 px-6 py-2 rounded-xl hover:scale-105 duration-300 shadow-lg shadow-blue-500/30">
            Hire Me
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;