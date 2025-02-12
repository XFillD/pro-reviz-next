import { cn } from "@/lib/classnames";
import { FC, ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  title: string;
  id: string;
  className?: string;
}

const SectionWrapper: FC<SectionWrapperProps> = ({
  children,
  title,
  id,
  className,
}) => {
  return (
    <section
      id={id}
      className={cn(
        "w-full relative z-30 bg-white overflow-hidden p-2 space-y-4 lg:space-y-8",
        className
      )}
    >
        <h3 className="text-4xl md:text-5xl font-bold text-black text-center">
          {title}
        </h3>
      <div className="w-full max-w-7xl mx-auto flex flex-colp-2 pb-12">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
