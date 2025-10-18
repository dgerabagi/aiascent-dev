'use client';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { FaCopy, FaCheck } from 'react-icons/fa';

interface MarkdownRendererProps {
  children: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ children }) => {
  const [copiedStates, setCopiedStates] = useState<Record<number, boolean>>({});

  const handleCopy = (code: string, index: number) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedStates(prev => ({ ...prev, [index]: true }));
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [index]: false }));
      }, 2000);
    });
  };

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        p: ({ node, ...props }) => <p {...props} />,
        h1: ({ node, ...props }) => <h1 className="text-2xl font-bold my-4" {...props} />,
        h2: ({ node, ...props }) => <h2 className="text-xl font-bold my-3" {...props} />,
        h3: ({ node, ...props }) => <h3 className="text-lg font-bold my-2" {...props} />,
        ul: ({ node, ...props }) => <ul className="list-disc list-inside my-2 space-y-1" {...props} />,
        ol: ({ node, ...props }) => <ol className="list-decimal list-inside my-2 space-y-1" {...props} />,
        li: ({ node, ...props }) => <li className="ml-4" {...props} />,
        strong: ({ node, ...props }) => <strong className="font-bold" {...props} />,
        em: ({ node, ...props }) => <em className="italic" {...props} />,
        table: ({ node, ...props }) => <table className="w-full my-4 text-sm border-collapse border border-muted-foreground" {...props} />,
        thead: ({ node, ...props }) => <thead className="bg-muted/50" {...props} />,
        th: ({ node, ...props }) => <th className="px-2 py-1 text-left font-semibold border border-muted-foreground" {...props} />,
        td: ({ node, ...props }) => <td className="px-2 py-1 border border-muted-foreground" {...props} />,
        code: ({ node, inline, className, children, ...props }: any) => {
          const match = /language-(\w+)/.exec(className || '');
          const childrenStr = String(children);
          const isLikelyInline = !childrenStr.includes('\n');
          const index = props.sourcePosition?.start.line ?? 0;

          if (inline || isLikelyInline) {
            return (
              <code className="inline bg-muted text-muted-foreground font-mono text-[90%] px-1.5 py-1 rounded-md mx-1" {...props}>
                {children}
              </code>
            );
          } else {
            return (
              <div className="relative group">
                <button
                  onClick={() => handleCopy(childrenStr.replace(/\n$/, ''), index)}
                  className="absolute top-2 right-2 p-1.5 rounded-md bg-muted text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                  title="Copy code"
                >
                  {copiedStates[index] ? <FaCheck className="text-green-500" /> : <FaCopy />}
                </button>
                <pre className="bg-black/80 p-3 rounded-md my-4 overflow-x-auto text-sm">
                  <code className={className} {...props}>
                    {children}
                  </code>
                </pre>
              </div>
            );
          }
        },
        a: ({ node, ...props }) => <a className="text-primary underline hover:no-underline" target="_blank" rel="noopener noreferrer" {...props} />,
      }}
    >
      {children}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;