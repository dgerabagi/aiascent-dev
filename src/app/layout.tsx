import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
title: "AIAscent.dev | Home of the Data Curation Environment",
description: "The official website for the Data Curation Environment (DCE) VS Code Extension. Learn how to revolutionize your AI-assisted development workflow.",
};

export default function RootLayout({
children,
}: Readonly<{
children: React.ReactNode;
}>) {
return (
<html lang="en" suppressHydrationWarning>
<body className={inter.className}>
<ThemeProvider
attribute="class"
defaultTheme="system"
enableSystem
disableTransitionOnChange
>
<div className="flex flex-col min-h-screen">
<Header />
<main className="flex-grow">
{children}
</main>
<Footer />
</div>
</ThemeProvider>
</body>
</html>
);
}