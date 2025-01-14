'use client'

import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import { Tooltip } from '@nextui-org/react'

interface Item {
  name: string
  description: string
  className: string
  icon: string
}

export default function RunningScroll({ items }: { items: Item[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ playOnInit: true })
  ])

  return (
    <div className="gradient embla" ref={emblaRef}>
      <div className="embla__container">
        {items.map((item, index) => (
          <div key={index} className="embla__slide__icon">
            <Tooltip  content={item.name} placement="top">
              <img
                src={item.icon}
                alt={item.name}
                width={50}
                height={50}
                className={item.className}
              />
            </Tooltip>
          </div>
        ))}
      </div>
    </div>
  )
}
