import { FaShieldAlt, FaGraduationCap, FaLaptopCode } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="py-24 px-8 lg:px-[10%] bg-[#071021] text-white"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-pink-500 uppercase tracking-[6px] mb-3">
          Know More
        </p>

        <h2 className="text-5xl font-bold">
          About <span className="text-blue-500">Me</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div className="bg-white/5 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-10 hover:border-pink-500 duration-300">

          <h3 className="text-3xl font-bold mb-6">
            Hi, I'm <span className="text-blue-500">Priyanshi Dubey</span>
          </h3>

          <p className="text-gray-300 leading-9 text-lg">
            I am an aspiring <span className="text-pink-500">SOC Analyst</span>
            who enjoys building hands-on cybersecurity labs and learning Blue Team operations.

            <br /><br />

            I am currently pursuing <span className="text-blue-400 font-semibold">MCA from IGNOU</span> and continuously improving my practical skills in Linux, Windows Server, Wazuh, Splunk, Wireshark, Networking and Python.

            <br /><br />

            My long-term goal is to work in a Security Operations Center (SOC) and help organizations detect, investigate and respond to cyber threats.
          </p>

        </div>

        {/* Right Cards */}

        <div className="grid gap-6">

          <div className="bg-white/5 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 hover:scale-105 duration-300">

            <FaShieldAlt className="text-4xl text-blue-500 mb-4" />

            <h3 className="text-2xl font-bold">
              Cybersecurity
            </h3>

            <p className="text-gray-400 mt-3">
              Learning SOC Operations, Threat Detection, SIEM, Wazuh, Splunk and Blue Team practices.
            </p>

          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-pink-500/20 rounded-3xl p-8 hover:scale-105 duration-300">

            <FaGraduationCap className="text-4xl text-pink-500 mb-4" />

            <h3 className="text-2xl font-bold">
              Education
            </h3>

            <p className="text-gray-400 mt-3">
              Bachelor of Computer Applications (BCA)
              <br />
              MCA (IGNOU) - Currently Pursuing
            </p>

          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 hover:scale-105 duration-300">

            <FaLaptopCode className="text-4xl text-cyan-400 mb-4" />

            <h3 className="text-2xl font-bold">
              Interests
            </h3>

            <p className="text-gray-400 mt-3">
              Linux, Windows Server, Python,
              Networking, Wazuh, Splunk,
              Wireshark and Security Monitoring.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;