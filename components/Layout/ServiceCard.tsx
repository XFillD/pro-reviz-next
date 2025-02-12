import { FC, ReactNode } from "react";

interface ServiceCardProps {
    icon: ReactNode;
    title: string;
    details: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ icon, title, details }) => {
    return (
        <>
            <div className="w-full px-4">
                <div className="flex flex-col gap-4 justify-center items-center rounded-2xl bg-white p-10 shadow-lg hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10 border border-black">
                    {icon}
                    <h4 className="text-2xl font-semibold text-dark dark:text-black">{title}</h4>
                    <p className="text-body-color dark:text-dark-6">{details}</p>
                </div>
            </div>
        </>
    );
};

export default ServiceCard;
