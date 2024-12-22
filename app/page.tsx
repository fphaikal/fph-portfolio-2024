'use client';

import { motion } from "framer-motion";

import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Chip, Divider, Image } from "@nextui-org/react";
import RunningScroll from "@/components/RunningScroll";
import SpotifyStats from "@/components/spotify-status";

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
    description: "A web app for quality control report",
    client: "PT Denapella Lestari",
    tech: ["mongodb", "nextjs", "nodejs", "express"]
  },
  {
    name: "Gerbang Akses Pintar dan Kehadiran",
    thumb: "GASKAN",
    description: "A smart access gate and attendance system",
    client: "SMK SMTI Yogyakarta",
    tech: ["nuxt", "nodejs", "express"]
  },
  {
    name: "Chemicfest #8 Web App",
    thumb: "CF#8",
    description: "A web app for Chemicfest #8",
    client: "OSIS SMK SMTI Yogyakarta",
    tech: ["nuxt", "nodejs", "express"]
  }
]

export default function Home() {
  return (
    <section className="flex flex-col gap-8 py-8 md:py-10 min-h-screen">
      <div className="flex gap-4 mb-10">
        <motion.div className="flex flex-col gap-4 h-[300px] justify-center w-2/3"
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
        <div className="flex justify-center items-center w-1/3">
          <Image src={'fph-logo.svg'} alt="Nextjs Logo" className="invert dark:invert-0" width={300} height={300} />
        </div>
      </div>
      <RunningScroll items={skill} />
      <div className="flex flex-col gap-4">
        <div className={`${buttonStyles({ variant: "bordered", radius: "full" })} w-fit flex items-center justify-center`}>
          <div className="w-4 h-4">
            <img src={'star.svg'} className="dark:invert" />
          </div>
          <span className="text-xs ">Portfolio</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {project.map((item, index) => (
            <Card key={index} className="max-w-[400px]">
              <CardHeader className="flex gap-3">
                <Avatar name={item.thumb} radius="lg" color="success" />
                <div className="flex flex-col">
                  <p className="text-md">{item.name}</p>
                </div>
              </CardHeader>
              <Divider />
              <CardFooter className="flex justify-between">
                <div className="flex gap-2">
                  <Chip color="default" size="sm">Client</Chip>
                  {item.client}
                </div>
                <div className="flex gap-2">
                  {item.tech.map((tech, index) => (
                    <Image key={index} src={`${tech}.svg`} alt={`${tech} Logo`} width={20} height={20} className={`${tech === "express" || tech === "nextjs" ? "dark:invert invert-0" : ""} ${tech[0]}`}
                    />
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className={`${buttonStyles({ variant: "bordered", radius: "full" })} w-fit flex items-center justify-center`}>
          <div className="w-4 h-4">
            <img src={'star.svg'} className="dark:invert" />
          </div>
          <span className="text-xs ">Spotify</span>
        </div>
        <SpotifyStats />
      </div>
    </section>
  );
}
