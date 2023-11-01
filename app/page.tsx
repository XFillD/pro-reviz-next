import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import About from "@/components/Sections/About";
import Contact from "@/components/Sections/Contact";
import Hero from "@/components/Sections/Hero";
import Portfolio from "@/components/Sections/Portfolio";
import Services from "@/components/Sections/Services";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Contact />
            <Footer />
        </main>
    );
}
