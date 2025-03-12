"use client";

import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import About from "@/components/Sections/About";
import Contact from "@/components/Sections/Contact";
import Hero from "@/components/Sections/Hero";
import Portfolio from "@/components/Sections/Portfolio";
import Services from "@/components/Sections/Services";
import Wip from "@/components/Sections/Wip";
import { useRef } from "react";

export default function Home() {
    const portfolioRef = useRef(null);
    console.log(portfolioRef);
    // className="flex min-h-screen flex-col items-center"

    return (
        <main>
            {/* <Navbar />
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Contact />
            <Footer /> */}
            <Wip />
        </main>
    );
}
