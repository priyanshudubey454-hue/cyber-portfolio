import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-8 lg:px-[10%] bg-[#071021] text-white"
    >
      <div className="text-center mb-16">
        <p className="text-pink-500 uppercase tracking-[6px] mb-3">
          Get In Touch
        </p>

        <h2 className="text-5xl font-bold">
          Contact <span className="text-pink-500">Me</span>
        </h2>

        <p className="text-gray-400 mt-4">
          Feel free to connect for internships, projects or cybersecurity discussions.
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-10">

        <div className="space-y-6">

          {/* Email */}
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-pink-500 text-2xl" />
            <a
              href="mailto:priyanhudubey454@gmail.com"
              className="hover:text-blue-400 transition"
            >
              priyanhudubey454@gmail.com
            </a>
          </div>

          {/* GitHub */}
          <div className="flex items-center gap-4">
            <FaGithub className="text-blue-500 text-2xl" />
            <a
              href="https://github.com/priyanshu454-hue"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              github.com/priyanshu454-hue
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-4">
            <FaLinkedin className="text-cyan-400 text-2xl" />
            <a
  href="https://www.linkedin.com/in/priyanshu-dubey-a14553361"
  target="_blank"
  rel="noopener noreferrer"
  className="text-cyan-400 hover:underline"
>
  linkedin.com/in/priyanshu-dubey-a14553361
</a>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-red-400 text-2xl" />
            <span>Delhi, India</span>
          </div>

        </div>

        {/* Buttons */}
        <div className="mt-10 flex gap-5 flex-wrap">

          <a
            href="mailto:priyanhudubey454@gmail.com"
            className="flex items-center gap-3 bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-xl transition"
          >
            <FaEnvelope />
            Send Email
          </a>

          <a
            href="/Resume (2).pdf"
            download
            className="flex items-center gap-3 border border-pink-500 hover:bg-pink-600 px-6 py-3 rounded-xl transition"
          >
            <FaDownload />
            Download Resume
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;