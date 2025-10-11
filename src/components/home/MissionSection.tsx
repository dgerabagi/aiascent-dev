// src/components/home/MissionSection.tsx
// C11 - Use theme-aware text colors
'use client'; // LampContainer requires client-side rendering
import React from 'react';
import { LampContainer } from '@/components/global/lamp';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

const MissionSection = () => {
return (
<section className="w-full">
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
<h2 className="mt-8 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground text-center text-4xl font-bold tracking-tight md:text-6xl">
THE RISE OF COGNITIVE CAPITALISM.
</h2>
<p className="text-xl text-muted-foreground max-w-3xl text-center my-8">
Mastering AI collaboration is essential for competitiveness and individual empowerment. The DCE is the foundational tool for a decentralized future, enabling Citizen Architects to combat AI centralization.
</p>
<Link href="/mission">
<Button size="lg" variant="outline" className='text-lg'>
Read Our Mission
</Button>
</Link>
</motion.div>
</LampContainer>
</section>
);
};

export default MissionSection;