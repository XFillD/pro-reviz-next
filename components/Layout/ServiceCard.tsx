import { FC, ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  details: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ icon, title, details }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10 border border-black transform transition-all duration-10000 hover:scale-105 hover:bg-gradient-to-r hover:from-gray-200 hover:to-yellow-200 transition-all ease-in-out">
          <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
            {icon}
          </div>
          <h4 className="mb-[14px] text-2xl font-semibold text-dark dark:text-black">
            {title}
          </h4>
          <p className="text-body-color dark:text-dark-6">{details}</p>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
