import { Avatar, Card, CardBody, CardFooter, CardHeader, Chip, Divider, Link, Image } from "@nextui-org/react";
import { button as buttonStyles } from "@nextui-org/theme";
import { TbExternalLink } from "react-icons/tb";


interface Project {
  name: string
  client: string
  thumb: string
  tech: string[]
  url: string
}

export default function Portfolio({ project }: { project: Project[] }) {
  return (
    <div className="flex flex-col gap-4">
      <div className={`${buttonStyles({ variant: "bordered", radius: "full" })} w-fit flex items-center justify-center`}>
        <div className="w-4 h-4">
          <img src={'star.svg'} className="dark:invert" />
        </div>
        <span className="text-xs ">Portfolio</span>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-2">
        {project.map((item, index) => (
          <Card key={index} className="w-full xl:max-w-[400px]">
            <CardHeader className="flex gap-3">
              <Avatar name={item.thumb} radius="lg" color="success" />
              <div className="flex gap-2 items-center justify-center h-full">
                <p className="text-md">{item.name}</p>
                {item.url && <Link href={item.url} isExternal><TbExternalLink />
                </Link>}
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
  )
}