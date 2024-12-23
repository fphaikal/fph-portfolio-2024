'use client'

import Image from "next/image";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";
import { link as linkStyles } from "@nextui-org/theme";
import { Divider, Tooltip } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { RiInstagramFill } from "react-icons/ri";
import { ThemeSwitch } from "@/components/theme-switch";

export const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="fixed top-0 flex flex-col gap-4 justify-between h-screen p-5">
      <div className="flex flex-col gap-4 items-center justify-between h-full">
        <div className="flex flex-col gap-4 items-center">
          <Tooltip content="FPH" placement="right">
            <Image
              alt="FPH Logo"
              className="invert dark:invert-0"
              height={25}
              src={"fph-logo.svg"}
              width={25}
            />
          </Tooltip>
          <Divider />
          <div className="flex flex-col items-center gap-2">
            {siteConfig.navItems.map((item) => (
              <Tooltip key={item.href} content={item.label} placement="right">
                {pathname === item.href ? (
                  <NextLink
                    className={clsx(
                      linkStyles({ color: "foreground" }),
                      "p-2 bg-white/10 rounded-medium",
                    )}
                    color="foreground"
                    href={item.href}
                  >
                    <item.icon size={20} />
                  </NextLink>
                ) : (
                  <NextLink
                    className={clsx(
                      linkStyles({ color: "foreground" }),
                      "p-2 rounded-medium",
                    )}
                    color="foreground"
                    href={item.href}
                  >
                    <item.activeIcon size={20} />
                  </NextLink>
                )}
              </Tooltip>
            ))}

          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <ThemeSwitch />
          {siteConfig.links.map((item) => (
            <NextLink key={item.href}
              className={"p-2 hover:bg-white/10 duration-500 rounded-medium"}
              color="foreground"
              href={item.href}
            >
              <item.icon size={20} />
            </NextLink>
          ))}
        </div>
      </div>

    </aside>
  );
}