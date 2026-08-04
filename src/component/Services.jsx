import {
  FaCode,
  FaCloud,
  FaPaintBrush,
  FaChartBar,
  FaLaptopCode, 
   
  
  
} from "react-icons/fa";
import { HiOutlineChartBar } from "react-icons/hi";

const Services = [
  {
    id: 1,
    icon: FaCode,
    title: "Custom Software Development",
    description:
      "Build secure, scalable, and high-performance software solutions tailored to your business goals.",
      ICON: <FaLaptopCode className="text-lg md:text-2xl " />,
      TITLE: "Custom Software",
      DESCRIPTION:
        "Scalable enterprise web and mobile applications.",
  },
  {
    id: 2,
    icon: FaCloud,
    title: "Cloud Solutions",
    description:
      "Modernize your infrastructure with secure cloud migration, deployment, and management.",
       ICON: <FaCloud className="text-lg md:text-2xl " />,
      TITLE: "Cloud & DevOps",
      DESCRIPTION:
        "Infrastructure migration, CI/CD pipelines & cloud security.",
  },
  {
    id: 3,
    icon: FaPaintBrush,
    title: "UI/UX Design",
    description:
      "Design intuitive, visually engaging, and user-friendly digital experiences.",
      ICON: <FaPaintBrush className="text-lg md:text-2xl " />,
      TITLE: "UI/UX Design",
      DESCRIPTION:
        "User research, wireframing and design systems.",
  },
  {
    id: 4,
    icon: FaChartBar  ,
    title: "Data Analytics",
    description:
      "Turn raw data into actionable insights with powerful analytics and dashboards.",
      ICON: <HiOutlineChartBar className="text-lg md:text-2xl " />,
      TITLE: "IT Consulting",
      DESCRIPTION:
        "Technology roadmap & digital transformation strategy.",
  },
];


export default Services;