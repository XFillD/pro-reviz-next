import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const Wip: React.FC = () => {
  const searchParams = useSearchParams();
  const [showSecret, setShowSecret] = useState(false);
  const [animationStage, setAnimationStage] = useState(0);
  
  // Check for the secret parameter
  useEffect(() => {
    const hasDafkaBro = searchParams.has("DafkaBro");
    if (hasDafkaBro) {
      // Delay the animation start for dramatic effect
      setTimeout(() => setShowSecret(true), 500);
      
      // Set up animation stages
      const animationTimer = setInterval(() => {
        setAnimationStage(prev => {
          if (prev >= 3) {
            clearInterval(animationTimer);
            return 3;
          }
          return prev + 1;
        });
      }, 800);
      
      return () => clearInterval(animationTimer);
    }
  }, [searchParams]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-800 font-sans text-center overflow-hidden">
      <div className="max-w-md animate-fadeIn relative">
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
      
      {/* Secret image with multi-stage animation */}
      {showSecret && (
        <div className={`absolute z-10 ${animationStage === 0 ? "scale-0" : ""}`}>
          <div 
            className={`
              transition-all duration-1000 ease-out
              ${animationStage >= 1 ? "scale-100" : "scale-0"} 
              ${animationStage >= 2 ? "animate-wiggle" : ""}
              ${animationStage >= 3 ? "animate-pulse-glow" : ""}
            `}
          >
            <div className="relative">
              <div className={`absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 blur-xl opacity-70 rounded-full ${animationStage >= 3 ? "animate-spin-slow" : ""}`}></div>
              <Image
                src="/dejv.png"
                alt="Secret Image"
                width={400}
                height={400}
                className="relative z-20 animate-levitate"
              />
            </div>
            
            {animationStage >= 2 && (
              <h2 className="mt-4 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-pulse">
                Here comes DafkaBro!
              </h2>
            )}
          </div>
        </div>
      )}

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
        
        @keyframes wiggle {
          0%, 100% { transform: rotate(-3deg) scale(1); }
          50% { transform: rotate(3deg) scale(1.05); }
        }
        
        .animate-wiggle {
          animation: wiggle 1s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        
        @keyframes pulse-glow {
          0%, 100% { filter: brightness(1); transform: scale(1); }
          50% { filter: brightness(1.2); transform: scale(1.03); }
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s infinite;
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        
        @keyframes levitate {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-levitate {
          animation: levitate 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Wip;