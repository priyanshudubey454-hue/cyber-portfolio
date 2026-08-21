import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#030712] border-t border-blue-500/20 py-8 text-center text-gray-400">

      <div className="flex justify-center gap-6 text-2xl mb-4">

        <a href="https://github.com/priyanshudubey454-hue" target="_blank">
          <FaGithub className="hover:text-blue-500 duration-300" />
        </a>

        <a href="https://www.linkedin.com/in/priyanshu-dubey-a14553361" target="_blank">
          <FaLinkedin className="hover:text-pink-500 duration-300" />
        </a>

      </div>

      <p>
        © 2026 Priyanshi Dubey • Built with React & Tailwind CSS
      </p>

      <p className="mt-2 flex justify-center items-center gap-2">
        Made with <FaHeart className="text-pink-500" /> for Cybersecurity
      </p>

    </footer>
  );
}

export default Footer;
