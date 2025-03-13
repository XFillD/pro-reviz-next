import { FC, ReactNode } from "react";

interface ServiceCardProps {
    title: string;
    details: string;
    borderColor?: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ title, details, borderColor = "border-blue-500" }) => {
    const sentences = details
        .split(/\.\s+|\.$/)
        .filter(sentence => sentence.trim().length > 0)
        .map(sentence => sentence.trim() + (sentence.endsWith('.') ? '' : '.'));
    
    return (
        <>
            <div className="w-full px-4">
                <div className={`flex flex-col gap-4 justify-start items-start h-full min-h-[320px] rounded-2xl bg-white p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-dark-2 md:px-7 xl:px-10 border ${borderColor} dark:border-dark-3`}>
                    <h4 className="text-xl sm:text-2xl font-semibold text-dark dark:text-black text-center w-full">{title}</h4>
                    <ul className="list-disc pl-5 space-y-2 text-body-color dark:text-dark-6 text-sm sm:text-base">
                        {sentences.map((sentence, index) => (
                            <li key={index} className="leading-relaxed">
                                {sentence}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default ServiceCard;