// src/components/layout/Footer.tsx
// C7 - Refactor to position text in corners
const Footer = () => {
return (
// Use a full-width container with padding
<footer className="w-full border-t border-neutral-900 bg-transparent relative z-10 px-4 sm:px-6 lg:px-8">
{/* Flex container to justify content between edges */}
<div className="flex flex-col md:flex-row items-center justify-between h-auto md:h-24 py-4 md:py-0 text-center md:text-left">
{/* Left-aligned text */}
<p className="text-sm text-muted-foreground">
Built in three days using the Data Curation Environment, with the only cost to purchase a domain ($6).

</p>
{/* Right-aligned text */}
<p className="text-sm text-muted-foreground mt-2 md:mt-0">
&copy; 2025 aiascent.dev. All rights reserved. Source code is available on{' '}
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
</footer>
);
};

export default Footer;