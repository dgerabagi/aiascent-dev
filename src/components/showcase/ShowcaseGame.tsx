'use client';
import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { FaSync } from 'react-icons/fa';

const ShowcaseGame = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isGameLoading, setIsGameLoading] = useState(true);

  const handleRefresh = () => {
    if (iframeRef.current) {
      setIsGameLoading(true);
      // Resetting the src attribute is a safe way to force an iframe to reload its content
      // without running into cross-origin security issues.
      iframeRef.current.src = iframeRef.current.src;
    }
  };

  const handleIframeLoad = () => {
    setIsGameLoading(false);
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center bg-background">
      <p className="text-sm text-muted-foreground my-2 p-2 border rounded-md bg-muted/50 max-w-4xl text-center mx-4">
        You are viewing an embedded version of AI Ascent. For the full experience, including login, chat, and multiplayer features, please visit the main site: {' '}
        <a href="https://aiascent.game/" target="_blank" rel="noopener noreferrer" className="text-primary underline">
          aiascent.game
        </a>.
      </p>
      <div className="relative w-full flex-grow border-t border-border">
        <div className="absolute top-2 right-2 z-10">
          <Button onClick={handleRefresh} variant="outline" size="icon" className="bg-background/80 backdrop-blur-sm">
            <FaSync className={isGameLoading ? 'animate-spin' : ''} />
          </Button>
        </div>
        <iframe
          ref={iframeRef}
          src="https://aiascent.game/"
          className="w-full h-full border-0"
          title="AI Ascent Game"
          onLoad={handleIframeLoad}
        ></iframe>
      </div>
    </div>
  );
};

export default ShowcaseGame;