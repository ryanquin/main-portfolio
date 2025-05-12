import {
  akatek,
  angular,
  axa,
  axaPh,
  express,
  git,
  integramme,
  laravel,
  loopback4,
  nodejs,
  oldPortfolio,
  pf,
  postgreSQL,
  python,
  reactjs,
  skyluster,
  tailwind,
  termpw,
  typescript,
  vertere,
  vue,
  wealthManager,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "Node JS", icon: nodejs },
  { title: "React JS", icon: reactjs },
  { title: "Python", icon: python },
  { title: "PostgreSQL", icon: postgreSQL },
];

export const technologies = [
  { name: "Typescript", icon: typescript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Python", icon: python },
  { name: "git", icon: git },
  { name: "Angular", icon: angular },
  { name: "Loopback4", icon: loopback4 },
  { name: "Vue.js", icon: vue },
  { name: "PostgreSQL", icon: postgreSQL },
  { name: "Express.js", icon: express },
  { name: "Laravel", icon: laravel },
];

export const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Vértere Global Solutions, Inc",
    icon: vertere,
    iconBg: "#161329",
    date: "December 2021 - Present",
    points: [
      "Currently deployed to Metropolitan Bank and Trust Company (Metrobank).",
      "Collaborated on building reusable micro-components for a Micro-Frontend (MFE) Architecture. Integrated Material UI for a more consistent and user-friendly design.",
      "Frontend: focused development using React and Redux-Saga for state management and side effects handling. Focusing on alignment with the customer journey document to improve user experience.",
      "Backend: Node JS, Loopback 4 and 3. Development of secure APIs for bank security.",
      "Database: Oracle and Mongo DB",
      "Server: Managing Linux Dev Environment",
      "*Team Management if team leads are not available.",
      "Regularly used Gitlab for version control.",
      "Utilized Jira to track and manage tasks, user stories, and bugs.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Akatek Solutions Inc.",
    icon: akatek,
    iconBg: "#161329",
    date: "February 2020 - December 2021",
    points: [
      "Discussed website and system requirements with the BA's to produce actionable development plans.",
      "Discussed project progress with the users, collected feedback on different stages, and directly addressed concerns.",
      "Developed an efficient and maintainable System using PostgreSQL/Sequelize, Angular 12 and Node.js/Express",
      "Written System documentation and user guide for the systems.",
      "Developed applications using PostgreSQL/Sequelize, Angular 12 and Node.js/Express.",
      "Implemented TypeScript for scalable and maintainable codebases.",
    ],
  },
  {
    title: "Middleware Node.js Developer",
    company_name: "AXA Philippines",
    icon: axaPh,
    iconBg: "#161329",
    date: "July 2019 - January 2020",
    points: [
      "Developed middleware solutions to facilitate backend-to-frontend communication.",
      "Responsible for frontend development as well.",
      "Discussed website and system requirements with the BA's to produce actionable development plans.",
      "Discussed project progress with the users, collected feedback on different stages, and directly addressed concerns.",
      "Written System documentation and user guide for the systems.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "SKYLUSTER Technology, Inc.",
    icon: skyluster,
    iconBg: "#161329",
    date: "October 2018 - June 2019",
    points: [
      "Handles the server, front-end, and back-end development of trading, media, gaming, and cryptocurrency-related websites.",
      "Develops API using Laravel, Node.js, mySql , MSSql, MongoDB.",
      "Setup Unix Cloud Server for APIs, websites, admin panel using LAMP stack, LEMP stack, Docker.",
      "Develops websites using React.js, Vue.js as reusable front-end components.",
      "Works with the designer and back end developers to ensure quality during development.",
      "Develops and optimizes the Admin panel across all projects.",
      "Responsible for web automation through API.",
      "Supports and communicates with international clients.",
    ],
  },
  {
    title: "Junior Programmer",
    company_name: "Integramme Co. Ltd",
    icon: integramme,
    iconBg: "#161329",
    date: "July 2017 - September 2018",
    points: [
      "Web-Based Systems Development.",
      "Back-End Developer.",
      "Client Company Websites with CMS(Content Management System).",
      "Renovation of existing Web-Based Systems (Landbank Procurement System).",
      "System Testing, Search systems internal findings/errors, Hunt and fix bugs.",
      "Presenting systems for the clients.",
      "Making of User Manual for every account after the system is tailor fitted.",
    ],
  },
];

export const projects = [
  {
    name: "Terminal Like Portfolio Website",
    description:
      "A terminal themed portfolio website that allows users to type into the terminal and use commands like a real terminal.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: termpw,
    websiteUrl: "https://ryanquin.github.io/my-terminal-portfolio/",
  },
  {
    name: "My Old Portfolio Website",
    description:
      "An old portfolio website built using React, Vite, and Tailwind CSS.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Vite", color: "green-text-gradient" },
      { name: "Tailwind CSS", color: "pink-text-gradient" },
    ],
    image: oldPortfolio,
    websiteUrl: "https://ryanquin.github.io/rquinones/",
  },
  {
    name: "AXA Philippines Emma",
    description:
      "Powered by AXA Philippines, Emma by AXA is your dedicated partner in your journey towards financial wellness. Access new features, including AXA Rescue Line, your access to 24/7 emergency assistance, and buy insurance online.",
    tags: [
      { name: "Angular", color: "blue-text-gradient" },
      { name: "Loopback4", color: "green-text-gradient" },
      { name: "Sails.js", color: "pink-text-gradient" },
    ],
    image: axa,
    websiteUrl: "https://www.axa.com.ph/emma",
  },
  {
    name: "Pass It Forward",
    description:
      "Pass It Forward empowers everyone to support causes together and change the world for the better. We aim to transform the traditional giving process by introducing an all-in-one platform while maintaining low costs. We enable users to manage their giving cycles seamlessly with powerful technology and competitive pricing. We also help small and medium companies take part in the cycle of giving by engaging their employees, changing the corporate culture, and creating real impact using SaaS technology.",
    tags: [
      { name: "Express.js", color: "blue-text-gradient" },
      { name: "Angular", color: "green-text-gradient" },
      { name: "Typescript", color: "pink-text-gradient" },
      { name: "PostgreSQL", color: "pink-text-gradient" },
    ],
    image: pf,
    websiteUrl: "https://www.passitforward.com/",
  },
  {
    name: "Metrobank - Wealth Manager",
    description:
      "This is an investment facility available on Metrobank Online. You can view your outstanding treasury portfolio, explore additional options for investing, and raise call requests for a more in-depth discussion with an Investment Specialist. Know more about the features of our online investment management facility below. \n Metrobank - Wealth Manager is developed using 'Backend: Node JS, Loopback 4 and 3', 'Frontend: React' and 'Database: Oracle and Mongo DB'.",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "Typescript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "MUI", color: "pink-text-gradient" },
      { name: "Loopback4", color: "pink-text-gradient" },
      { name: "React", color: "pink-text-gradient" },
    ],
    image: wealthManager,
    websiteUrl: "https://www.metrobank.com.ph/services/wealth-manager",
  },
];
