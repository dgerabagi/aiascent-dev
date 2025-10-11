// src/components/layout/Footer.tsx
// C3 - Refined styling
const Footer = () => {
return (
// Updated C3: Ensure footer matches the dark aesthetic
<footer className="border-t border-neutral-900 bg-neutral-950">
<div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
<div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
<p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
Built using the Data Curation Environment. The source code is available on{' '}
<a
href="[https://github.com/dgerabagi/aiascent-dev](https://www.google.com/search?q=https://github.com/dgerabagi/aiascent-dev)" // Updated URL
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
&copy; {new Date().getFullYear()} aiascent.dev. All rights reserved.
</p>
</div>
</footer>
);
};

export default Footer;