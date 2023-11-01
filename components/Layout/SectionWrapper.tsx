import { cn } from "@/lib/classnames";
import { FC, ReactNode } from "react";

interface SectionWrapperProps {
    children: ReactNode;
    id: string;
    className?: string;
}

const SectionWrapper: FC<SectionWrapperProps> = ({ children, id, className }) => {
    return (
        <section id={id} className={cn("w-full shadow-2xl relative bg-white", className)}>
            <div className="max-w-7xl mx-auto flex flex-col p-10">{children}</div>
        </section>
    );
};

export default SectionWrapper;
