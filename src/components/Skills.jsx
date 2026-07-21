import {
  FaLinux,
  FaPython,
  FaGithub,
  FaWindows,
  FaDatabase,
} from "react-icons/fa";

import {
  SiWireshark,
  SiSplunk,
  SiGithub,
} from "react-icons/si";

import { MdSecurity } from "react-icons/md";
import { TbNetwork } from "react-icons/tb";

function Skills() {
  const skills = [
    { name: "Linux", icon: <FaLinux className="text-5xl text-yellow-400" /> },
    {
      name: "Windows Server",
      icon: <FaWindows className="text-5xl text-blue-400" />,
    },
    { name: "Python", icon: <FaPython className="text-5xl text-cyan-400" /> },
    {
      name: "Wireshark",
      icon: <SiWireshark className="text-5xl text-blue-300" />,
    },
    {
      name: "Nmap",
      icon: <MdSecurity className="text-5xl text-pink-500" />,
    },
    {
      name: "Splunk",
      icon: <SiSplunk className="text-5xl text-green-400" />,
    },
    {
      name: "Wazuh",
      icon: <MdSecurity className="text-5xl text-blue-500" />,
    },
    {
      name: "Git & GitHub",
      icon: <FaGithub className="text-5xl text-white" />,
    },
    {
      name: "Networking",
      icon: <TbNetwork className="text-5xl text-cyan-400" />,
    },
    {
      name: "SOC Fundamentals",
      icon: <MdSecurity className="text-5xl text-pink-500" />,
    },
    {
      name: "TCP/IP",
      icon: <TbNetwork className="text-5xl text-blue-500" />,
    },
    {
      name: "SQL",
      icon: <FaDatabase className="text-5xl text-orange-400" />,
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 px-8 lg:px-[10%] bg-[#050816] text-white"
    >
      <div className="text-center mb-16">
        <p className="text-pink-500 uppercase tracking-[6px] mb-3">
          Technologies
        </p>

        <h2 className="text-5xl font-bold">
          My <span className="text-blue-500">Skills</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 flex flex-col items-center justify-center hover:-translate-y-2 hover:border-pink-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)] transition-all duration-300"
          >
            {skill.icon}

            <h3 className="mt-5 text-lg font-semibold text-center">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;