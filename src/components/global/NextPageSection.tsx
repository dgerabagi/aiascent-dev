'use client';
import React from 'react';
import { LampContainer } from '@/components/global/lamp';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface NextPageSectionProps {
    title: string;
    description: string;
    buttonText: string;
    href: string;
    className?: string;
}

const NextPageSection: React.FC<NextPageSectionProps> = ({ title, description, buttonText, href, className }) => {
    return (
        <section className={cn("w-full mt-24", className)}>
            <LampContainer>
                <motion.div
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: 'easeInOut',
                    }}
                    className="flex flex-col items-center text-center"
                >
                    <h2 className="mt-8 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground text-center text-3xl font-bold tracking-tight md:text-5xl">
                        {title}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl text-center my-8">
                        {description}
                    </p>
                    <Link href={href} passHref>
                        <Button size="lg" variant="outline" className='text-lg'>
                            {buttonText}
                        </Button>
                    </Link>
                </motion.div>
            </LampContainer>
        </section>
    );
};

export default NextPageSection;