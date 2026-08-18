import { FaAward, FaExternalLinkAlt } from "react-icons/fa";

function Certificates() {

  const certificates = [
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      status: "Completed",
      color: "text-green-400",
      link: "/certificates/cisco-introduction-to-cybersecurity.pdf",
    },
    {
      title: "Networking Basics",
      issuer: "Cisco Networking Academy",
      status: "Completed",
      color: "text-green-400",
      link: "/certificates/cisco-networking-basics.pdf",
    },
    {
      title: "Getting Started with Cisco Packet Tracer",
      issuer: "Cisco Networking Academy",
      status: "Completed",
      color: "text-green-400",
      link: "/certificates/cisco-packet-tracer.pdf",
    },
    {
  title: "SOC Analyst Level 1 & 2 Masterclass",
  issuer: "Udemy • Selfcode Academy",
  status: "Completed",
  color: "text-green-400",
  link: "/certificates/udemy-soc-analyst-level1-level2.pdf",
},
    {
      title: "Google Cybersecurity Professional Certificate",
      issuer: "Google",
      status: "Completed",
      color: "text-green-400",
      link: "/certificates/Google Cybersecurity Professional Certificate.pdf",
    },
    {
    "title": "Introduction to Cybersecurity",
    "issuer": "Commonwealth Bank",
    "status": "Completed",
    "color": "text-green-400",
    "link": "/certificates/commonwealth-bank-cybersecurity.pdf",
    "date": "August 1, 2026"
  },
  {
    "title": "Cybersecurity Job Simulation",
    "issuer": "Deloitte",
    "status": "Completed",
    "color": "text-green-400",
    "link": "/certificates/deloitte-cybersecurity.pdf",
    "date": "2026"
  },
  {
    "title": "Cybersecurity Job Simulation",
    "issuer": "Mastercard",
    "status": "Completed",
    "color": "text-green-400",
    "link": "/certificates/mastercard-cybersecurity.pdf",
    "date": "2026"
  },
  {
    "title": "Introduction to Python",
    "issuer": "CENTRI",
    "status": "Completed",
    "color": "text-green-400",
    "link": "/certificates/introduction-to-python.pdf",
    "date": "2026"
  },
  {
    "title": "Introduction to Bash",
    "issuer": "DataCamp / CENTRI",
    "status": "Completed",
    "color": "text-green-400",
    "link": "/certificates/introduction-to-bash.pdf",
    "date": "August 7, 2026"
  },
  ];

  return (
    <section
      id="certificates"
      className="py-24 px-8 lg:px-[10%] bg-[#050816] text-white"
    >
      <div className="text-center mb-16">

        <p className="text-pink-500 uppercase tracking-[6px] mb-3">
          Achievements
        </p>

        <h2 className="text-5xl font-bold">
          My <span className="text-blue-500">Certificates</span>
        </h2>

      </div>

      <div className="grid md:grid-cols-2 gap-8">

        {certificates.map((certificate, index) => (

          <div
            key={index}
            className="bg-white/5 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 hover:-translate-y-2 hover:border-pink-500 hover:shadow-[0_0_30px_rgba(59,130,246,.35)] transition-all duration-300"
          >

            <div className="flex items-center gap-4 mb-6">

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-pink-600 flex items-center justify-center text-2xl">
                <FaAward />
              </div>

              <div>

                <h3 className="text-xl font-bold">
                  {certificate.title}
                </h3>

                <p className="text-gray-400 text-sm">
                  {certificate.issuer}
                </p>

              </div>

            </div>

            <div className="flex justify-between items-center">

              <span className={`${certificate.color} font-semibold`}>
                {certificate.status}
              </span>

              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-blue-500 px-4 py-2 rounded-xl hover:bg-blue-600 transition"
              >
                <FaExternalLinkAlt />
                View
              </a>

            </div>

          </div>

        ))}

      </div>
    </section>
  );
}

export default Certificates;
