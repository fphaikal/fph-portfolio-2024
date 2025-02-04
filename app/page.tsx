import dynamic from "next/dynamic";
import { button as buttonStyles } from "@nextui-org/theme";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Chip, Divider, Image, Tooltip } from "@nextui-org/react";

const Certificate = dynamic(() => import("@/components/home/certificate"), {ssr: false});
const Portfolio = dynamic(() => import("@/components/home/portfolio"), {ssr: false});
const RunningScroll = dynamic(() => import("@/components/home/RunningScroll"), {ssr: false});
const Hero = dynamic(() => import("@/components/home/hero"), {ssr: false});
const SpotifyStats = dynamic(() => import("@/components/spotify/now-playing"), {ssr: false});
const GithubStats = dynamic(() => import("@/components/github/index"), {ssr: false});

const skill = [
  {
    name: "Next.js",
    description: "React Framework for Production",
    className: " dark:invert",
    icon: "nextjs.svg",
  },
  {
    name: "Vue.js",
    description: "The Progressive JavaScript Framework",
    className: "",
    icon: "vuejs.svg",
  },
  {
    name: "Nuxt.js",
    description: "The Intuitive Vue Framework",
    className: "",
    icon: "nuxt.svg",
  },
  {
    name: "Tailwind CSS",
    description: "A utility-first CSS framework",
    className: "",
    icon: "tailwindcss.svg",
  },
  {
    name: "TypeScript",
    description: "Typed JavaScript at Any Scale",
    className: "",
    icon: "ts.svg",
  },
  {
    name: "JavaScript",
    description: "High-level, interpreted programming language",
    className: "",
    icon: "js.svg",
  },
  {
    name: "Vercel",
    description: "Develop. Preview. Ship.",
    className: " dark:invert",
    icon: "vercel.svg",
  },
  {
    name: "Node.js",
    description: "JavaScript runtime built on Chrome's V8 JavaScript engine",
    className: "",
    icon: "nodejs.svg",
  },
  {
    name: "MongoDB",
    description: "The most popular database for modern apps",
    className: "",
    icon: "mongodb.svg",
  },
  {
    name: "Arduino",
    description: "Open-source electronics platform based on easy-to-use hardware and software",
    className: "",
    icon: "arduino.svg",
  },
  {
    name: "Raspberry Pi",
    description: "A small and affordable computer that you can use to learn programming",
    className: "",
    icon: "raspberry-pi.svg",
  },
  {
    name: "SolidWorks",
    description: "3D CAD software",
    className: "",
    icon: "solidworks.svg",
  }
]

const project = [
  {
    name: "QC Report Web App",
    thumb: "QC",
    description: "The Quality Pintar website is a web application designed to monitor and manage quality-related data in a factory, with a focus on four main sections:\n\n1. Final Inspection: The final check of products before being shipped to customers, ensuring they meet quality standards.\n2. NCR (Non-Conformance Report): A reporting system to document issues found during inspections and the corrective actions taken.\n3. IPR (Initial Production Run): The initial production phase that verifies product quality at the early stage before mass production.\n4. NG Data (Non-Good Data): Data related to products that fail to meet quality standards, including details about the failure causes and required fixes.\n\nThe website also uses an API to fetch and manage data, with a role-based system restricting access depending on the user type. Admin roles have access to all sections, while user roles can only view data.",
    client: "PT Denapella Lestari",
    tech: ["mongodb", "nextjs", "nodejs", "express"],
    url: ""
  },
  {
    name: "Gerbang Akses Pintar dan Kehadiran",
    thumb: "GASKAN",
    description: "The Gerbang Akses Pintar dan Kehadiran (GASKAN) is a web-based application designed for student attendance management at SMK SMTI Yogyakarta. This system simplifies and automates the attendance process, providing an efficient and reliable solution for tracking and managing student presence.",
    client: "SMK SMTI Yogyakarta",
    tech: ["nuxt", "nodejs", "express"],
    url: ""
  },
  {
    name: "Chemicfest #8 Web App",
    thumb: "CF#8",
    description: "The Chemicfest#8 website is an online platform designed for the annual Chemicalistronic Festival (CHEMICFEST) #8, which serves as entertainment for the students of SMK-SMTI Yogyakarta. This festival is a showcase of talents from the students, especially those involved in extracurricular activities. The website facilitates ticket purchases, check-in for entering the venue, and live streaming of the event, providing an all-in-one solution for attendees to engage with the festival.",
    client: "OSIS SMK SMTI Yogyakarta",
    tech: ["nuxt", "nodejs", "express"],
    url: ""
  },
  {
    name: "TokDL",
    thumb: "TokDL",
    description: "The TokDL website is an online tool designed to download TikTok videos easily. It provides users with a simple and efficient way to save videos for offline viewing without watermarks.",
    client: "Personal Project",
    tech: ["nextjs", "nodejs"],
    url: "https://tokdl.fph.my.id"
  }
]

const certificates = [
  {
    name: "Siemens Mechatronics System Certification Program",
    company: "SIEMENS",
    year: "2024",
    image: "/smscp.png",
  },
  {
    name: "Learn the Basics of Web Programming",
    company: "Dicoding",
    year: "2025",
    image: "/web-developer.png",
  },
];
export default function Home() {
  return (
    <section className="flex flex-col gap-8 py-20 md:py-10 min-h-screen">
      <Hero/>
      <RunningScroll items={skill} /> 
      <div className="flex flex-col xl:flex-row gap-4">
        <GithubStats />
        <div className="flex flex-col gap-4 w-full xl:w-1/2">
          <div className={`${buttonStyles({ variant: "bordered", radius: "full" })} w-fit flex items-center justify-center`}>
            <div className="w-4 h-4">
              <img src={'star.svg'} className="dark:invert" alt="Star Icon" />
            </div>
            <span className="text-xs ">Spotify</span>
          </div>
          <SpotifyStats />
        </div>
      </div>
      <Portfolio project={project} />
      <Certificate certificate={certificates} />
    </section>
  );
}
