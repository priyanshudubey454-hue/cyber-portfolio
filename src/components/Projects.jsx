import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Packet Sentinel - Network Packet Analyzer",
      image: "/projects/packet-sentinel.png",
      desc: "Developed a modern Network Packet Analyzer using Python that processes captured network traffic and visualizes Top Source IPs, Protocol Distribution and packet statistics through an interactive dashboard.",
      tech: ["Python", "Scapy", "Pandas", "Flask", "Networking"],
      github: "https://github.com/priyanshudubey454-hue/packet_sentinel",
      demo: "https://packet-sentinel-zeta.vercel.app",
      color: "from-cyan-600 via-blue-600 to-pink-600",
      live: true
    },
    {
      title: "Vulnerability Assessment & Remediation",
      image: null,
      desc: "Performed a vulnerability assessment on a Metasploitable2 lab environment using Nmap and Nessus. Identified security vulnerabilities, analyzed risk levels, documented findings, and provided remediation recommendations.",
      tech: ["Kali Linux", "Metasploitable2", "Nmap", "Nessus", "CVSS"],
      github: "https://github.com/priyanshudubey454-hue/metasploitable2-vulnerability-assessment",
      demo: "#",
      color: "from-red-600 via-pink-600 to-orange-500",
      live: false
    },
    {
      title: "SOC Automation Lab",
      image: null,
      desc: "Built a Security Operations Center lab using Wazuh, Windows 11 and Ubuntu for real-time log monitoring and threat detection.",
      tech: ["Wazuh", "Ubuntu", "Windows 11"],
      github: "#",
      demo: "#",
      color: "from-blue-600 to-cyan-500",
      live: false
    },
    {
      title: "Wireshark Traffic Analysis",
      image: null,
      desc: "Captured and analyzed DNS, HTTP and TCP packets to understand network communication.",
      tech: ["Wireshark", "TCP/IP", "Analysis"],
      github: "https://github.com/priyanshudubey454-hue/wireshark.git",
      demo: "#",
      color: "from-cyan-600 to-blue-500",
      live: false
    },
    {
      title: "Linux Shell Scripting",
      image: null,
      desc: "Developed automation scripts including IP Finder, File Checker and System Health Checker.",
      tech: ["Bash", "Linux", "Automation"],
      github: "https://github.com/priyanshudubey454-hue/linux-monitoring-dashboard.git",
      demo: "#",
      color: "from-green-500 to-cyan-500",
      live: false
    }
  ];

  return (
    <section
      id="projects"
      className="py-24 px-8 lg:px-[10%] bg-[#071021] text-white"
    >
      <div className="text-center mb-16">
        <p className="text-pink-500 uppercase tracking-[6px] mb-3">
          Portfolio
        </p>
        <h2 className="text-5xl font-bold">
          Featured <span className="text-blue-500">Projects</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-xl border border-blue-500/20 rounded-3xl overflow-hidden hover:-translate-y-2 hover:border-pink-500 hover:shadow-[0_0_35px_rgba(59,130,246,.35)] transition-all duration-300"
          >
            {/* Image / Preview */}
            <div className="relative h-60 overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 duration-700"
                />
              ) : (
                <div
                  className={`w-full h-full bg-gradient-to-r ${project.color} flex items-center justify-center`}
                >
                  <span className="text-6xl">🛡️</span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-400 leading-7">{project.desc}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mt-6">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                {/* GitHub Button - Only show if github link is valid */}
                {project.github && project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl duration-300 transition-all hover:scale-105"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                )}

                {/* Live Demo Button - Only show if demo link is valid */}
                {project.demo && project.demo !== "#" && project.live && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-pink-500 hover:bg-pink-500 px-6 py-3 rounded-xl duration-300 transition-all hover:scale-105 hover:shadow-lg hover:shadow-pink-500/30"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
