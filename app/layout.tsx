import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "PRO-REVIZ s. r. o.",
    description: "Created by rizek & houba",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="bg-black scroll-smooth">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
