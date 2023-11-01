import { FC } from "react";

const Hero: FC = () => {
    return (
        <>
            <div id={"home"} />
            <section className="h-screen w-full isolate sticky top-0">
                <div className="absolute inset-0 bg-hero-img bg-cover overflow-hidden" />
                <div className="h-full relative flex flex-col justify-center items-center gap-8 p-10 bg-gradient-to-b from-black to-transaprent">
                    <div className="max-w-7xl p-6">
                        <h2 className="text-[5rem] font-extrabold text-mainColor">
                            REVIZE PRO VAŠI BEZPEČNOST A SPOKOJENOST
                        </h2>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
