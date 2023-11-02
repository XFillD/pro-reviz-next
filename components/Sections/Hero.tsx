import { FC } from "react";

const Hero: FC = () => {
    return (
        <>
            <div id={"home"} />
            <section className="h-screen w-full isolate sticky top-0">
                <div className="absolute inset-0 bg-hero-img bg-cover overflow-hidden" />
                <div className="h-full relative flex flex-col justify-center items-center gap-8 p-10 bg-gradient-to-b from-black to-transaprent">
                    <div className="max-w-7xl md:p-3 lg:p-6">
                        <h2 className="text-mainColor text-4xl leading-tight font-extrabold md:text-7xl md:leading-snug lg:text-8xl lg:leading-normal">
                            REVIZE PRO VAŠI BEZPEČNOST A SPOKOJENOST
                        </h2>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
