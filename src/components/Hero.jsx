import { FaGithub, FaDownload, FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between px-8 lg:px-[10%] pt-32 pb-20 gap-12"
    >
      {/* Left */}
      <div className="max-w-2xl">

        <p className="text-pink-500 text-xl font-medium mb-3">
          👋 Hello, I'm
        </p>

        <h1 className="text-6xl lg:text-8xl font-extrabold leading-tight">
          Priyanshi
          <br />
          <span className="text-blue-500">Dubey</span>
        </h1>

        <h2 className="text-3xl lg:text-5xl mt-5 font-semibold text-gray-200">
          Aspiring <span className="text-blue-500">SOC Analyst</span>
        </h2>

        <p className="mt-8 text-gray-400 text-lg leading-9 max-w-xl">
          Passionate about Cybersecurity, Threat Detection,
          Linux, Windows Server, Wazuh, Splunk and Python.
          <br /><br />
          Currently building hands-on SOC projects and learning
          Blue Team Security.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-5 mt-10">

          <a
            href="#projects"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl duration-300 shadow-lg shadow-blue-500/40 hover:scale-105"
          >
            <FaArrowRight />
            View Projects
          </a>

          <a
            href="/Resume (3).pdf"
            download
            className="flex items-center gap-2 border border-pink-500 hover:bg-pink-500 px-8 py-4 rounded-xl duration-300 hover:scale-105"
          >
            <FaDownload />
            Download Resume
          </a>

          <a
            href="https://github.com/priyanshu454-hue"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-gray-600 hover:border-blue-500 hover:text-blue-400 px-8 py-4 rounded-xl duration-300"
          >
            <FaGithub />
            GitHub
          </a>

        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-6 mt-14">

          <div className="bg-white/5 backdrop-blur-lg border border-blue-500/20 rounded-2xl px-8 py-5 text-center hover:scale-105 duration-300">
            <h2 className="text-4xl font-bold text-blue-500">10+</h2>
            <p className="text-gray-400">Skills</p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-pink-500/20 rounded-2xl px-8 py-5 text-center hover:scale-105 duration-300">
            <h2 className="text-4xl font-bold text-pink-500">4+</h2>
            <p className="text-gray-400">Projects</p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-cyan-500/20 rounded-2xl px-8 py-5 text-center hover:scale-105 duration-300">
            <h2 className="text-4xl font-bold text-cyan-400">2026</h2>
            <p className="text-gray-400">MCA</p>
          </div>

        </div>

      </div>

      {/* Right */}
      <div>
        <img
          src="/profile-photo.png"
          alt="Priyanshi"
          className="w-80 h-80 lg:w-[430px] lg:h-[430px] rounded-full object-cover border-4 border-blue-500 shadow-[0_0_90px_#2563eb] hover:scale-105 duration-500"
        />
      </div>

    </section>
  );
}

export default Hero;