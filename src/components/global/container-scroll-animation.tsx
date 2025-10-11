// src/components/global/container-scroll-animation.tsx
// C11 - Fix white border on GIF by changing background and adjusting padding
'use client'
import React, { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import Image from 'next/image'

// Define the type for the children prop, which will contain the visuals (images/gifs)
type ContainerScrollProps = {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode; // Added children prop
};

export const ContainerScroll = ({
  titleComponent,
  children, // Destructure children
}: ContainerScrollProps) => {
  const containerRef = useRef<any>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
  })
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1]
  }

const rotate = useTransform(scrollYProgress, [0, 1], [20, 0])
const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions())
const translate = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <div
      className="h-[80rem] flex items-center justify-center relative p-2 sm:p-20"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{
          perspective: '1000px',
        }}
      >
        <Header
          translate={translate}
          titleComponent={titleComponent}
        />
        {/* Pass children to the Card component */}
        <Card
          rotate={rotate}
          translate={translate}
          scale={scale}
        >
          {children}
        </Card>
      </div>
    </div>
  )
}

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  )
}

// Update Card component to accept children
type CardProps = {
  rotate: any;
  scale: any;
  translate: any;
  children: React.ReactNode; // Added children prop
};

export const Card = ({
  rotate,
  scale,
  translate,
  children, // Destructure children
}: CardProps) => {
  return (
    <motion.div
      style={{
        rotateX: rotate, // rotate in X-axis
        scale,
        boxShadow:
          '0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003',
      }}
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-neutral-800 p-2 md:p-6 bg-neutral-900 rounded-[30px] shadow-2xl"
    >
      <div className="h-full w-full rounded-2xl gap-4 overflow-hidden p-0 transition-all bg-transparent">
        {/* Render children instead of a static image */}
        {children}
      </div>
    </motion.div>
  )
}