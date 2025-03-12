import React from "react";
import Image from "next/image";

const Wip: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-800 font-sans text-center">
      <div className="max-w-md animate-fadeIn">
        <Image
          src="/wip-logo.png"
          alt="Logo - Work in Progress"
          width={700}
          height={700}
          priority
          className="mx-auto mb-8"
        />

        <h1 className="text-4xl font-bold text-white mb-4">
          Na stránkách se pracuje...
        </h1>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Wip;
