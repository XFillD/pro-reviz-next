import { FC } from "react";
import Image from 'next/image';

const Hero: FC = () => {
    return (
        <>
            <div id={"home"} className="h-screen w-screen" />
            <section className="fixed inset-0">
                <div className="fixed inset-0 bg-hero-img bg-cover overflow-hidden" />
                <div className="h-full relative flex flex-col justify-center items-center gap-8 p-10 bg-gradient-to-b from-black to-transaprent">
                    <div className="max-w-7xl md:p-3 lg:p-6 flex justify-center">
                        <Image
                            src="/wip-logo.png"
                            alt="Logo"
                            width={1000}
                            height={700}
                            className="w-auto h-auto"
                            priority
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;