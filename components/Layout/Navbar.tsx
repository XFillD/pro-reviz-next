"use client";

import useTransparentHeader from "@/hooks/useTransparentHeader";
import { cn } from "../../lib/classnames";
import Hamburger from "../Icons/Hamburger";
import SideBar from "./SideBar";
import { useState } from "react";
import Image from "next/image";

const HEADER_LINKS = [
    { name: "Domů", href: "home" },
    { name: "O nás", href: "about" },
    { name: "Služby", href: "services" },
    { name: "Portfolio", href: "portfolio" },
    { name: "Kontakt", href: "contact" },
];

const Navbar = () => {
    const isTransparent = useTransparentHeader();
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-40 transition-colors duration-1000 ease-in-out",
                    isTransparent ? "bg-transparent" : "bg-black opacity-90"
                )}
            >
                <div className="flex justify-between items-center h-14 md:h-18 max-w-7xl mx-auto px-6 py-8">
                    <Image src={"/logo-white.png"} alt="Reviz Logo" className="h-6 w-fit" width={500} height={100} />
                    <ul className="hidden lg:flex gap-10">
                        {HEADER_LINKS.map(({ name, href }) => (
                            <li key={name}>
                                <a href={`#${href}`} className="text-white hover:text-mainColor duration-500">
                                    {name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <Hamburger className="md:w-12 md:h-12 lg:hidden" onClick={() => setIsSideBarOpen(true)} />
                </div>
            </nav>
            <SideBar open={isSideBarOpen} setOpen={setIsSideBarOpen}>
                <div className="h-full flex flex-col justify-between">
                    <ul className="flex flex-col gap-5">
                        {HEADER_LINKS.map(({ name, href }) => (
                            <li key={name}>
                                <a
                                    href={`#${href}`}
                                    onClick={() => setIsSideBarOpen(false)}
                                    className="text-white hover:text-green-500 duration-500"
                                >
                                    {name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <Image src={"/logo-white.png"} alt="Reviz Logo" className="w-full" width={500} height={100} />
                </div>
            </SideBar>
        </>
    );
};

export default Navbar;
