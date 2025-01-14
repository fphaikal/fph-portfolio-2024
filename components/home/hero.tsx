'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

export default function Hero() {
  return (
    <div className="flex flex-col xl:flex-row gap-4 xl:mb-10">
      <div className="flex flex-col gap-4 h-[300px] justify-center w-full xl:w-2/3"
      >
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
      </div>
      <div className="hidden xl:flex justify-center items-center w-full xl:w-2/3">
        <Image src={'fph-logo.svg'} alt="FPH Logo" className="invert dark:invert-0" width={300} height={300} />
      </div>
    </div>
  )
}