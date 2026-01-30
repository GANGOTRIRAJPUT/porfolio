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
      'NexusJobs revolutionizes the hiring process using the MERN stack, offering a seamless experience for job seekers and recruiters.',
    image: jobLogo,
    tags: ['HTML', 'CSS', 'JavaScript', 'React JS', 'API'],
    github: 'https://github.com/GANGOTRIRAJPUT/JobPortalMernstack',
  },
  {
    id: 1,
    title: 'Travel Book Website',
    description:
      'A PHP-based application that fetches and displays GitHub profile data in a user-friendly way.',
    image: bookLogo,
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL'],
    github: 'https://github.com/GANGOTRIRAJPUT/mybookmark',
  },
  {
    id: 2,
    title: 'Ecommerce Website',
    description:
      'A MERN-based ecommerce platform with secure authentication and product management.',
    image: eccLogo,
    tags: ['React JS', 'CSS', 'Node JS', 'Express JS', 'MongoDB'],
    github: 'https://github.com/GANGOTRIRAJPUT/Ecommerce',
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
      'Developed scalable MERN applications, REST APIs, and responsive UIs in an agile environment.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React JS', 'Node JS', 'MongoDB'],
  },
  {
    id: 1,
    img: clubLogo,
    role: 'Training Leader',
    company: 'IMRD Tech Club',
    date: 'September 2023 - Present',
    desc:
      'Conducted workshops, mentored students, and improved communication and leadership skills.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Leadership', 'Presentation'],
  },
  {
    id: 2,
    img: vhyastraLogo,
    role: 'Co-Leader',
    company: 'Vhyastra Team',
    date: '2025 - Present',
    desc:
      'Supported team planning, mentored members, and coordinated technical and non-technical activities.',
    skills: ['Collaboration', 'Time Management', 'Problem Solving'],
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
  },
  {
    id: 1,
    img: spdmLogo,
    school: 'P.R. Ghogre (SPDM)',
    date: 'June 2021 - March 2022',
    grade: '88.5%',
    degree: 'HSC (XII)',
  },
  {
    id: 2,
    img: rcpLogo,
    school: 'Institute of Management Research and Development',
    date: 'June 2023 - May 2026',
    grade: '9.86 CGPA',
    degree: 'Bachelor of Computer Applications (BCA)',
  },
];
