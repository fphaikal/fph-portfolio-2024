'use client';

import { motion } from "framer-motion";

import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Chip, Divider, Image, Tooltip } from "@nextui-org/react";
import RunningScroll from "@/components/RunningScroll";
import SpotifyStats from "@/components/spotify/now-playing";
import Portfolio from "@/components/portfolio";
import Certificate from "@/components/certificate";


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
    description: "A smart access gate and attendance system",
    client: "SMK SMTI Yogyakarta",
    tech: ["nuxt", "nodejs", "express"],
    url: ""
  },
  {
    name: "Chemicfest #8 Web App",
    thumb: "CF#8",
    description: "A web app for Chemicfest #8",
    client: "OSIS SMK SMTI Yogyakarta",
    tech: ["nuxt", "nodejs", "express"],
    url: ""
  },
  {
    name: "TokDL",
    thumb: "TokDL",
    description: "A web app for downloading TikTok videos",
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
      <div className="flex flex-col xl:flex-row gap-4 xl:mb-10">
        <motion.div className="flex flex-col gap-4 h-[300px] justify-center w-full xl:w-2/3"
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}>
          <div className="inline-block max-w-xl">
            <span className={title()}>Hi👋 I'm&nbsp;</span>
            <span className={`${title({ color: "violet" })} `}>FPHaikal</span>
            <br />
            <span className={title()}>
              Fullstack Developer &amp; Mechatronics Engineering Student
            </span>
            <br />
            <span className={subtitle()}>
              I'm a vocational high school student interning in mechatronics, with expertise in full-stack development.
              Passionate about programming.
            </span>
          </div>

          <div className="flex gap-3">
            <Link
              isExternal
              className={buttonStyles({ variant: "bordered", radius: "full" })}
              href=""
            >
              <GithubIcon size={20} />
              GitHub
            </Link>
          </div>
        </motion.div>
        <div className="hidden xl:flex justify-center items-center w-full xl:w-2/3">
          <Image src={'fph-logo.svg'} alt="FPH Logo" className="invert dark:invert-0" width={300} height={300} />
        </div>
      </div>
      <RunningScroll items={skill} />


      <div className="flex flex-col xl:flex-row gap-4">
        <div className="flex flex-col gap-4 w-full xl:w-1/2">
          <div className={`${buttonStyles({ variant: "bordered", radius: "full" })} w-fit flex items-center justify-center`}>
            <div className="w-4 h-4">
              <img src={'star.svg'} className="dark:invert" />
            </div>
            <span className="text-xs ">Github</span>
          </div>
          <div className="flex flex-col">
            <Link isExternal href="https://github.com/fphaikal">
              <Card className="flex flex-row items-center">
                <Image
                  src="https://github-readme-stats.vercel.app/api?username=fphaikal&hide_title=false&hide_rank=false&show_icons=true&include_all_commits=true&count_private=true&disable_animations=false&theme=transparent&title_color=17C964&text_color=74DFA2&locale=en&hide_border=true"
                  alt="GitHub Stats"

                />
                <Image src="https://github-readme-stats.vercel.app/api/top-langs?username=fphaikal&locale=en&hide_title=false&layout=compact&langs_count=10&theme=transparent&title_color=17C964&text_color=74DFA2&hide_border=true" height={150} alt="languages graph" />
              </Card>
            </Link>
            {/* <Card>
              <Image src="https://statsme.vercel.app/api/wakatime?username=fphaikal&hide_border=true&theme=transparent&icon_color=ffb886&title_color=ffb886&text_color=fcfeff&range=last_7_day&langs_count=4" height={150} alt="streak graph" />
            </Card> */}
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full xl:w-1/2">
          <div className={`${buttonStyles({ variant: "bordered", radius: "full" })} w-fit flex items-center justify-center`}>
            <div className="w-4 h-4">
              <img src={'star.svg'} className="dark:invert" />
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
