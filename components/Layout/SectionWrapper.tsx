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
        <section id={id} className={cn("w-full relative bg-white space-y-4 px-4 py-8 md:px-10 md:py-16", className)}>
            <div className="w-full max-w-7xl mx-auto"><h3 className="text-4xl md:text-5xl font-bold text-secondColor">{title}</h3></div>
            <div className="w-full max-w-7xl mx-auto flex flex-col">{children}</div>
        </section>
    );
};

export default SectionWrapper;
