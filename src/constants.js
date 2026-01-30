// ===== TECH LOGOS =====
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
import netbeansLogo from './assets/tech_logo/netbeans.jpeg';

// ===== COMPANY LOGOS =====
import mauliLogo from './assets/company_logo/mauli.jpeg';
import clubLogo from './assets/company_logo/club.jpeg';
import vhyastraLogo from './assets/company_logo/image.png';

// ===== EDUCATION LOGOS =====
import kanLogo from './assets/education_logo/kanya.png';
import spdmLogo from './assets/education_logo/spdm.jpeg';
import rcpLogo from './assets/education_logo/rcp.jpg';

// ===== PROJECT / WORK LOGOS =====
import jobLogo from './assets/work_logo/jobportal.jpg';
import bookLogo from './assets/work_logo/book.jpg';
import eccLogo from './assets/work_logo/ecc.jpg';

// ================= SKILLS =================
export const SkillsInfo = [
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
    ],
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
      { name: 'PHP', logo: phpLogo },
      { name: 'C#', logo: csharpLogo },
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
      { name: 'NetBeans', logo: netbeansLogo },
    ],
  },
];

// ================= PROJECTS =================
export const projects = [
  {
    id: 0,
    title: 'Job Portal Website',
    description:
      'NexusJobs revolutionizes the hiring process for the tech world. Built on the modern MERN stack (MongoDB, Express.js, React.js, Node.js), our platform delivers a seamless, real-time experience for developers seeking their next role and companies hunting for top-tier talent For Job Seekers Craft a stunning profile, discover curated opportunities from innovative startups and established giants, and apply with a single click. Our intelligent algorithm matches your skills with the perfectFor Job Seekers Craft a stunning profile, discover curated opportunities from innovative startups and established giants, and apply with a single click. intelligent algorithm matches your skills with the perfect job',
    image: jobLogo,
    tags: ['HTML', 'CSS', 'JavaScript', 'React JS', 'API'],
    github: 'https://github.com/GANGOTRIRAJPUT/JobPortalMernstack',
  },
  {
    id: 1,
    title: 'Travel Book Website',
    description:
      'A powerful and user-friendly php application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters',
    image: bookLogo,
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL'],
    github: 'https://github.com/GANGOTRIRAJPUT/mybookmark',
  },
  {
    id: 2,
    title: 'Ecommerce Website',
    description:
      'A powerful and user-friendly php application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.',
    image: eccLogo,
    tags: ['React JS', 'CSS', 'Node JS', 'Express JS', 'MongoDB'],
    github: 'https://github.com/GANGOTRIRAJPUT/quickshow',
  },

];

// ================= EXPERIENCE =================
export const experiences = [
  {
    id: 0,
    img: mauliLogo,
    role: 'Fullstack Developer',
    company: 'Mauli Kyanshufoundation',
    date: 'September 2025 - Present',
    desc:
      'Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.".',
    skills: ['HTML', 'CSS', 'JavaScript', 'php', 'Node JS', 'sql'],
  },
  {
    id: 1,
    img: clubLogo,
    role: 'Training Leader',
    company: 'IMRD Tech Club',
    date: 'September 2023 - Present',
    desc:
      'Conducted workshops and bootcamps on coding, non-technical topics, and professional skills.Delivered structured training sessions to improve technical knowledge, communication, and career readiness.Led and mentored a team of 6 members, strengthening collaboration, leadership, and public speaking skills',
    skills: ["HTML", "CSS", "Javascript", "Confidence", "Presentation", "Leadership",],
  },
  {
    id: 2,
    img: vhyastraLogo,
    role: 'Co-Leader',
    company: 'Vhyastra Team',
    date: '2025 - Present',
    desc:
      'Served as a Team Co-Leader at Vhyastra, supporting team planning, coordination, and execution of projects and events.Collaborated closely with the team leader to guide members, distribute tasks, and track progress to meet goals effectively.Assisted in organizing technical and non-technical activities while ensuring smooth communication within the team.Mentored team members, encouraged participation, and helped build confidence, teamwork, and leadership skills.Contributed to maintaining a productive and collaborative environment by resolving issues and motivating the team',
    skills: ["Collaboration", "Time Management", "Problem Solving", "Confidence", "Presentation", "Leadership"],
  },
];

// ================= EDUCATION =================
export const education = [
  {
    id: 0,
    img: kanLogo,
    school: 'Sau Savitribai Rande Kanya Madhyamik',
    date: 'June 2019 - March 2020',
    grade: '91%',
    degree: 'SSC (X)',
    desc: "I completed my class 10e education from kanya high school, Govardhan, under the SSC board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
  },
  {
    id: 1,
    img: spdmLogo,
    school: 'P.R. Ghogre (SPDM)',
    date: 'June 2021 - March 2022',
    grade: '88.5%',
    degree: 'HSC (XII)',
    desc: "I completed 12th std P R Ghogre , SPDM. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
  },
  {
    id: 2,
    img: rcpLogo,
    school: 'Institute of Management Research and Development',
    date: 'June 2023 - May 2026',
    grade: '9.86 CGPA',
    degree: 'Bachelor of Computer Applications (BCA)',
    desc: "I have completed my Bachelor's degree (BCA) in Computer Applications from KBC University, jalgoan. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
  },
];
