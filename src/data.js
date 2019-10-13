import {
  FaTwitterSquare,
  FaDev,
  FaMedium,
  FaLinkedin,
  FaGithub,
  FaIdBadge,
  FaBriefcase,
  FaUser
} from "react-icons/fa";
import About from "./components/cards/about";
import Works from "./components/cards/works";
import Contact from "./components/cards/contact";
import ReactWars from "./assests/reactwars.png";
import Politico from "./assests/politico.png";
import Lifted from "./assests/lifted.png"
import StackoverflowLite from "./assests/stackoverflow.png";
export const socialData = [

  {
    name: "twitter",
    icon: FaTwitterSquare,
    url: "https://twitter.com/basil_cea",
    offset: 250
  },
  {
    name: "linkedin",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/ogbonna-basil-cea/",
    offset: 285
  },
  {
    name: "devTo",
    icon: FaDev,
    url: "https://dev.to/basilcea",
    offset: 350
  },
  {
    name: "github",
    icon: FaGithub,
    url: "https://github.com/basilcea",
    offset: 415
  },
  {
    name: "meduim",
    icon: FaMedium,
    url: "https://medium.com/@ogbonnabasilcea",
    offset: 480
  }
];
export const navInfo = [
  { id: 0, name: "ABOUT", icon: FaUser },
  { id: 1, name: "PROJECTS", icon: FaBriefcase },
  { id: 2, name: "CONTACT", icon: FaIdBadge }
];
export const CarouselInfo = [
  { id: 0, page: "I Am Basil", value: About },
  { id: 1, page: "Featured Projects", value: Works },
  { id: 2, page: "Contact / Hire Me", value: Contact }
];

export const WorksInfo = [
  {
    info: [
      {
        id: 0,
        name: "Politico",
        srcUrl: Politico,
        webUrl: "https://basilcea.github.io/politico/UI/",
        gitUrl: "https://github.com/basilcea/politico",
        client: "Andela",
        clientUrl: "https://andela.com/",
        description:
          "Politico is an online voting platform enabling users to vote and run political positions from the comfort of their home",
        color: "green",
        tools: ["CSS" , "Postgres", "Express"]
      },
      {
        id: 1,
        name: "ReactWars",
        srcUrl: ReactWars,
        webUrl: "https://ceawars.netlify.com/",
        gitUrl: "https://github.com/basilcea/Sprint-Challenge-React-Wars",
        client: "Lambda Schools",
        clientUrl: "https://lambdaschool.com/",
        color: "teal",
        description:
        "React Wars is an app displaying a list of  all star wars characters from the star war api",
      tools: ["React","LESS"]
      },
      {
        id: 2,
        name: "StackoverflowLite",
        srcUrl: StackoverflowLite,
        webUrl: "https://basilcea.github.io/StackOverflow--lite/UI/",
        gitUrl: "https://github.com/basilcea/StackOverflow--lite",
        client: "Andela",
        clientUrl: "https://andela.com/",
        description:"A lite version of the original stack overflow",
        color: "teal",
        tools: ["CSS" , "Javascript", "Postgres"]
      },
      {
        id: 3,
        name: "Lifted",
        srcUrl: Lifted,
        webUrl: "https://lifted.netlify.com/",
        gitUrl: "https://github.com/build-week-weight-journal/weight-journal-FE",
        client: "Lambda Schools",
        clientUrl: "https://Lambda.com/",
        description:"A web based journal for tracking lifting exercises ",
        color: "teal",
        tools: ["CSS" , "Javascript", "Postgres"]
      },
    ]
  },
];
