'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import MarkdownRenderer from '@/components/shared/MarkdownRenderer';

interface MissionSectionBlockProps {
  title: string;
  tldr: string;
  content: string;
  images: string[];
  imagePath: string; // C19: Added to handle subdirectories
  imagePrompt: string;
  imageSide?: 'left' | 'right';
}

const MissionSectionBlock: React.FC<MissionSectionBlockProps> = ({
  title,
  tldr,
  content,
  images,
  imagePath, // C19: Destructure new prop
  imagePrompt,
  imageSide = 'left',
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length > 1) {
      const timer = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // Change image every 5 seconds
      return () => clearInterval(timer);
    }
  }, [images.length]);

  const variants = {
    enter: { opacity: 0, x: 20 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  const imageContent = (
    <div className="md:w-1/2 w-full p-4 border border-neutral-800 light:border-neutral-200 rounded-2xl bg-neutral-950/50 light:bg-neutral-100/50 shadow-2xl shadow-black/20 light:shadow-neutral-300/20">
      <div className="relative aspect-video rounded-lg overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImageIndex}
            initial="enter"
            animate="center"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              // C19 Fix: Construct the full, correct image path
              src={`/assets/images/report/${imagePath}${images[currentImageIndex]}`}
              alt={title}
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <p className="text-xs italic text-muted-foreground mt-2 p-2 bg-black/20 rounded">
        <strong>Prompt:</strong> "{imagePrompt}"
      </p>
    </div>
  );

  const textContent = (
    <div className="md:w-1/2 w-full">
      <h3 className="text-3xl font-bold text-white light:text-black mb-4">{title}</h3>
      <div className="p-3 border-l-4 border-primary bg-muted/20 rounded-r-lg mb-4">
        <p className="italic text-muted-foreground">{tldr}</p>
      </div>
      <div className="prose prose-invert max-w-none">
        <MarkdownRenderer>{content}</MarkdownRenderer>
      </div>
    </div>
  );

  return (
    <div
      className={`flex flex-col md:flex-row items-start gap-12 ${
        imageSide === 'right' ? 'md:flex-row-reverse' : ''
      }`}
    >
      {imageContent}
      {textContent}
    </div>
  );
};

export default MissionSectionBlock;