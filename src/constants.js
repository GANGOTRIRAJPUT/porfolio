import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import reduxLogo from './assets/tech_logo/redux.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import phpLogo from './assets/tech_logo/php.jpeg';
import csharpLogo from './assets/tech_logo/csharp.png';
import netbeansLogo from './assets/tech_logo/netbeans.jpeg'


import mauliLogo from './assets/company_logo/mauli.jpeg';
import clubLogo from './assets/company_logo/club.jpeg';
import  image from './assets/company_logo/image.png'




import kanLogo from './assets/education_logo/kanya.png';
import spdmLogo from './assets/education_logo/spdm.jpeg';
import rcpLogo from './assets/education_logo/rcp.jpg';

import jobLogo from './assets/work_logo/jobportal.jpg';
import bookLogo from './assets/work_logo/book.jpg';
import eccLogo from './assets/work_logo/ecc.jpg';
import ecc from './assets/work_logo/ecc.jpg';










export const SkillsInfo=[
 {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
 ]
},
    {
    title: 'Backend',
    skills: [
    
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    
    
    ],
  },
   {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      {name:'php',logo:phpLogo},
      { name: 'C-Sharp', logo: csharpLogo },

      
    ],
  },
    {
     title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'netbeans', logo: netbeansLogo },

     
    ],
  },

] ;
  

 export const projects=[

   {
      id: 0,
      title: "Job portal website",        
      description:
 "NexusJobs revolutionizes the hiring process for the tech world. Built on the modern MERN stack (MongoDB, Express.js, React.js, Node.js), our platform delivers a seamless, real-time experience for developers seeking their next role and companies hunting for top-tier talent For Job Seekers Craft a stunning profile, discover curated opportunities from innovative startups and established giants, and apply with a single click. Our intelligent algorithm matches your skills with the perfectFor Job Seekers Craft a stunning profile, discover curated opportunities from innovative startups and established giants, and apply with a single click. Our intelligent algorithm matches your skills with the perfect job",
      image: jobLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/GANGOTRIRAJPUT/JobPortalMernstack",
      
    },

     {
      id: 1,
      title: "Travel book website",
      description:
        "A powerful and user-friendly php application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image: bookLogo,
      tags: ["HTML", "CSS", "JavaScript", "php", "SQL"],
      github: "https://github.com/GANGOTRIRAJPUT/mybookmark",
      
    },

    
     {
      id: 2,
      title: "Ecommerce Website",
      description:
        "A powerful and user-friendly php application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image: eccLogo,
      tags: ["react.js ", "CSS", "node.js", "Express.js", "MongoDb"],
      github: "https://github.com/GANGOTRIRAJPUT/Ecommerce",
      
    },
  
  {
    id: 3,
    title: "Cinema Ticket Reservation System",
    description:
      "A full-stack MERN application that allows users to browse available shows, select seats, and book tickets online. Includes user authentication, seat availability management, and secure booking workflows with an admin panel for show management.",
    image: ecc, // you can change image later
    tags: ["React JS", "Node JS", "Express JS", "MongoDB", "JWT"],
    github: "https://github.com/your-username/cinema-ticket-booking",
  },

  {
    id: 4,
    title: "Real-Time Communication Platform",
    description:
      "A MERN-based real-time communication platform featuring user authentication, one-to-one and group conversations, online status indicators, and message persistence using WebSockets and MongoDB.",
    image: bookLogo, // you can change image later
    tags: ["React JS", "Node JS", "Express JS", "MongoDB", "Socket.io"],
    github: "https://github.com/your-username/realtime-communication-app",
  },

  {
    id: 5,
    title: "TalentQ – Skill Assessment Platform",
    description:
      "TalentQ is a MERN stack-based skill assessment platform designed to evaluate candidates through quizzes, aptitude tests, and coding challenges. It includes role-based access for admins and users, result analytics, and performance tracking.",
    image: eccLogo, // you can change image later
    tags: ["React JS", "Node JS", "Express JS", "MongoDB", "REST API"],
    github: "https://github.com/your-username/talentq-platform",
  },

];  
     export const experiences = [
    {
      id: 0,
      img: mauliLogo,
      role: "Fullstack Developer",
      company: "Mauli Kyanshufoundation",
      date: "september 2025 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        
    
      ],
    },
      {
      id: 1,
      img:clubLogo ,
      role: "Training leader",
      company: "ImrdTEch club",
      date: "September 2023 - present",
      desc: "Conducted workshops and bootcamps on coding, non-technical topics, and professional skills.Delivered structured training sessions to improve technical knowledge, communication, and career readiness.Led and mentored a team of 6 members, strengthening collaboration, leadership, and public speaking skills.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Confidence",
        "Presentation",
        "Leadership",
      ],
    },
     {
      id: 2,
      img: image,
      role: " Co- leader",
      company: "Vhyuastra Team",
      date: "2025 - present",
      desc: "Served as a Team Co-Leader at Vhyastra, supporting team planning, coordination, and execution of projects and events.Collaborated closely with the team leader to guide members, distribute tasks, and track progress to meet goals effectively.Assisted in organizing technical and non-technical activities while ensuring smooth communication within the team.Mentored team members, encouraged participation, and helped build confidence, teamwork, and leadership skills.Contributed to maintaining a productive and collaborative environment by resolving issues and motivating the team.",
      skills: [
        "Collaboration",
        "Time Management",
        "Problem Solving",
        "Confidence",
        "Presentation",
        "Leadership",
      ],
    },
       
  ];
     export const education = [
    {
      id: 0,
      img: kanLogo,
      school: "Sau savitritai rande kanya madhymik",
      date: "june 2019 - March 2020",
      grade: "91.00%",
      desc: "I completed my class 10e education from kanya high school, Govardhan, under the SSC board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "SSC(X)",
    },

        {
      id: 1,
      img: spdmLogo,
      school: "P.R.Ghogre",
      date: " 2021june - march 2022",
      grade: "88.50%",
      desc: "I completed 12th std   P R Ghogre , SPDM. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "HSC(XII)",
    },

     {
      id: 2,
      img: rcpLogo,
      school: "Institue Of Management Research and Development",
      date: "june 2023 - may 2026",
      grade: "9.86 CGPA",
      desc: "I have completed my Bachelor's degree (BCA) in Computer Applications from KBC University, jalgoan. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
      degree:" Bachelor of Computer Applications - BCA",
    },
  ];


    
    