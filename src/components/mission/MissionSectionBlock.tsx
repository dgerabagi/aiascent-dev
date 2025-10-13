{
  /*
  Cycle 30: Fix unescaped entities.
  - Replaced double quotes in imagePrompt with &quot; to fix linting errors.
  */
}
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import MarkdownRenderer from '@/components/shared/MarkdownRenderer';
import { FaPlay, FaPause, FaSpinner } from 'react-icons/fa';
import { useReportState, useReportStore } from '@/stores/reportStore';

interface MissionSectionBlockProps {
  title: string;
  tldr: string;
  content: string;
  images: string[];
  imagePath: string;
  imagePrompt: string;
  imageSide?: 'left' | 'right';
}

const MissionSectionBlock: React.FC<MissionSectionBlockProps> = ({
  title,
  tldr,
  content,
  images,
  imagePath,
  imagePrompt,
  imageSide = 'left',
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { playArbitraryText } = useReportStore.getState();
  const { genericPlaybackStatus, genericAudioText } = useReportState(state => ({
    genericPlaybackStatus: state.genericPlaybackStatus,
    genericAudioText: state.genericAudioText,
  }));

  const isPlayingThis = genericPlaybackStatus === 'playing' && genericAudioText === content;
  const isGeneratingThis = genericPlaybackStatus === 'generating' && genericAudioText === content;

  useEffect(() => {
    if (images.length > 1) {
      const timer = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [images.length]);

  const variants = {
    enter: { opacity: 0, x: 20 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  const handlePlayClick = () => {
    playArbitraryText(content);
  };

  const imageContent = (
    <div className="md:w-1/2 w-full p-4 border rounded-2xl bg-card shadow-2xl shadow-black/20 light:shadow-neutral-300/20">
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
              src={`/assets/images/report/${imagePath}${images[currentImageIndex]}`}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <p className="text-xs italic text-muted-foreground mt-2 p-2 bg-black/20 rounded">
        <strong>Prompt:</strong> &quot;{imagePrompt}&quot;
      </p>
    </div>
  );

  const textContent = (
    <div className="md:w-1/2 w-full">
      <div className="flex items-center gap-4 mb-4">
        <h3 className="text-3xl font-bold">{title}</h3>
        <button
          onClick={handlePlayClick}
          className="p-2 border rounded-full text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
          title={isPlayingThis ? "Pause narration" : "Play narration"}
          disabled={isGeneratingThis}
        >
          {isGeneratingThis ? <FaSpinner className="animate-spin" /> : (isPlayingThis ? <FaPause /> : <FaPlay />)}
        </button>
      </div>
      <div className="p-3 border-l-4 border-primary bg-muted/20 rounded-r-lg mb-4">
        <p className="italic text-muted-foreground">{tldr}</p>
      </div>
      <div className="prose prose-sm dark:prose-invert max-w-none">
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