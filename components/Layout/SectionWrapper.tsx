import { cn } from "@/lib/classnames";
import { FC, ReactNode } from "react";

interface SectionWrapperProps {
    children: ReactNode;
    title: string;
    id: string;
    className?: string;
}

const SectionWrapper: FC<SectionWrapperProps> = ({ children,title, id, className }) => {
    return (
        <section id={id} className={cn("w-full relative bg-white overflow-hidden p-2 space-y-2", className)}>
            <div className="bg-black w-full max-w-7xl mx-auto p-2"><h3 className="text-4xl md:text-5xl font-bold text-mainColor">{title}</h3></div>
            <div className="w-full max-w-7xl mx-auto flex flex-colp-2 pb-16 md:pb-12">{children}</div>
        </section>
    );
};

export default SectionWrapper;
