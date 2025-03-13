import { FC } from "react";
import SectionWrapper from "../Layout/SectionWrapper";
import { motion } from "framer-motion";

const About: FC = () => {
  return (
    <SectionWrapper id="about" title="O Nás">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="relative max-w-3xl w-full">
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-16 h-16 border-l-4 border-t-4 border-gray-500 opacity-70 hidden sm:block"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 border-r-4 border-b-4 border-gray-500 opacity-70 hidden sm:block"></div>
            
            {/* Main content card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="backdrop-blur-sm bg-white/5 rounded-lg p-6 sm:p-8 shadow-lg border border-gray-200/10"
            >
              <div className="flex justify-center mb-6 sm:mb-8">
                <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full"></div>
              </div>
              
              <p className="text-justify text-base md:text-lg lg:text-xl leading-relaxed font-light">
                Jsme rodinná firma s více než 30letými zkušenostmi v oboru vody,
                topení a plynu. Specializujeme se na výstavbu plynových kotelen s
                veškerými zednickými pracemi, kompletní rozvody v bytových domech,
                poskytujeme odborné revize veškerých plynových zařízení a drobné
                montážní práce.
              </p>
              
              <div className="my-4 sm:my-6 flex justify-center">
                <div className="w-24 sm:w-32 h-0.5 bg-gradient-to-r from-transparent via-gray-400/30 to-transparent"></div>
              </div>
              
              <p className="text-justify text-base md:text-lg lg:text-xl leading-relaxed font-light">
                Díky bohatým zkušenostmi, certifikovaným revizním
                technikům a důrazu na kvalitu nabízíme spolehlivá řešení pro
                domácnosti, firmy i menší developerské projekty.
              </p>
              
              <div className="my-4 sm:my-6 flex justify-center">
                <div className="w-24 sm:w-32 h-0.5 bg-gradient-to-r from-transparent via-gray-400/30 to-transparent"></div>
              </div>
              
              <p className="text-justify text-base md:text-lg lg:text-xl leading-relaxed font-light">
                Naší prioritou je
                profesionální přístup, odborné konzultace, precizní provedení a
                dlouhodobá spokojenost zákazníků. Kompletní nabídka služeb je
                uvedena níže. V případě zájmu o spolupráci nás kontaktuje
                prostřednictvím emailové adresy{" "}
                <a 
                  href="mailto:proreviz@gmail.com" 
                  className="font-normal text-blue-400 hover:text-blue-300 transition-colors duration-300 underline"
                >
                  proreviz@gmail.com
                </a>.
              </p>
            </motion.div>
            
            {/* Bottom wave decoration */}
            <div className="absolute -bottom-12 left-0 right-0 h-8 sm:h-12 opacity-10">
              <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-current text-blue-500"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;