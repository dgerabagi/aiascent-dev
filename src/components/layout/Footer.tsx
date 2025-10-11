// src/components/layout/Footer.tsx
// C6 - Make background transparent for sparkle effect
const Footer = () => {
return (
// Updated C6: Changed background to transparent for sparkle overlap effect
<footer className="border-t border-neutral-900 bg-transparent relative z-10">
<div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
<div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
<p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
Built using the Data Curation Environment. The source code is available on{' '}
<a
href="https://github.com/dgerabagi/aiascent-dev"
target="_blank"
rel="noreferrer"
className="font-medium underline underline-offset-4 hover:text-primary transition-colors"
>
GitHub
</a>
.
</p>
</div>
<p className="text-center text-sm text-muted-foreground">
&copy; 2025 aiascent.dev. All rights reserved.
</p>
</div>
</footer>
);
};

export default Footer;