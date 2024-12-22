'use client'

import React, { useRef, useEffect } from 'react'
import { motion, useAnimationFrame, useMotionValue, useTransform } from 'framer-motion'
import Image from 'next/image'
import { Tooltip } from '@nextui-org/react'

interface Item {
  name: string
  description: string
  className: string
  icon: string
}

export default function RunningScroll({ items }: { items: Item[] }) {
  const baseVelocity = -1 // Adjust this value to change scroll speed
  const baseX = useMotionValue(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const x = useTransform(baseX, (v) => `${v}%`)

  useAnimationFrame((t, delta) => {
    let moveBy = baseVelocity * (delta / 1000)

    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth
      const contentWidth = containerRef.current.scrollWidth
      const maxMove = (contentWidth / containerWidth) * 100

      if (baseX.get() <= -maxMove / 2) {
        baseX.set(0)
      }
    }

    baseX.set(baseX.get() + moveBy)
  })

  useEffect(() => {
    const container = containerRef.current
    if (container) {
      const resizeObserver = new ResizeObserver(() => {
        baseX.set(0)
      })
      resizeObserver.observe(container)
      return () => resizeObserver.disconnect()
    }
  }, [baseX])

  const duplicatedSkills = [...items, ...items]

  return (
    <div ref={containerRef} className="gradient w-full overflow-hidden">
      <motion.div
        className="flex gap-16"
        style={{
          x,
          width: 'max-content',
        }}
      >
        {duplicatedSkills.map((item, index) => (
          <Tooltip key={index} content={item.name} placement="top">
            <img
              src={item.icon}
              alt={item.name}
              width={50}
              height={50}
              className={item.className}
            />
          </Tooltip>
        ))}
      </motion.div>
    </div>
  )
}
