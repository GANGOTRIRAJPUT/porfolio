import React from "react";


  // Certificates array
  const certificates = [
    {
      title: "Web Development",
      description: "Completed a certified Web Development course with hands-on projects.",
      image: "my portfolio\src\assets\tech_logo\1p.jpg",
      tags: ["HTML", "CSS", "JavaScript"],
      link: "https://drive.google.com/file/d/your_certificate_id/view",
    },
    {
      title: "Python Programming",
      description: "Certified in Python Programming with practical coding challenges.",
      image: "/certificates/certificate2.png",
      tags: ["Python", "OOP", "Data Structures"],
      link: "https://drive.google.com/file/d/your_certificate_id/view",
    },
    {
      title: "MERN Stack",
      description: " MERN Stack, building scalable web apps.",
      image: "/certificates/certificate3.png",
      tags: ["React.js", "Node.js", "MongoDB", "Express.js"],
      link: "https://drive.google.com/file/d/your_certificate_id/view",
    },

    {
      title: "MERN Stack",
      description: " MERN Stack, building scalable web apps.",
      image: "/certificates/certificate3.png",
      tags: ["React.js", "Node.js", "MongoDB", "Express.js"],
      link: "https://drive.google.com/file/d/your_certificate_id/view",
    },

    {
      title: "MERN Stack",
      description: " MERN Stack, building scalable web apps.",
      image: "/certificates/certificate3.png",
      tags: ["React.js", "Node.js", "MongoDB", "Express.js"],
      link: "https://drive.google.com/file/d/your_certificate_id/view",
    },

    
    {
      title: "MERN Stack",
      description: " MERN Stack, building scalable web apps.",
      image: "/certificates/certificate3.png",
      tags: ["React.js", "Node.js", "MongoDB", "Express.js"],
      link: "https://drive.google.com/file/d/your_certificate_id/view",
    },
  ];


          



const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-20  text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-wide uppercase">
          CERTIFICATES
        </h2>
        <p className="text-gray-400 mb-12">
          A showcase of the certifications I have earned, highlighting my learning and achievements.
        </p>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-[#1a1a2e] rounded-2xl p-6 shadow-lg border border-gray-800 hover:shadow-purple-500/30 transition duration-300"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover rounded-xl mb-5"
              />
              <h3 className="text-xl font-semibold mb-3">{cert.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{cert.description}</p>

              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {cert.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-purple-600 text-white text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
                 <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-5 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white text-sm font-medium transition"
              >
                View Certificate
              </a>

             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
