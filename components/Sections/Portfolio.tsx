import { Ref, forwardRef } from "react";
import SectionWrapper from "../Layout/SectionWrapper";
import Image from "next/image";

const Portfolio = () => {
    return (
        <SectionWrapper id="portfolio" title="Nase Prace">
            <div className="flex space-x-4 md:space-x-6 lg:space-x-8">
                <div>
                    <Image
                        width={800}
                        height={600}
                        src="/images/1.jpg"
                        alt="img"
                        className="mb-4 md:mb-6 lg:mb-8 hover:scale-105 transition ease-in-out duration-500"
                    />
                    <Image
                        width={800}
                        height={1000}
                        src="/images/4.jpg"
                        alt="img"
                        className="hover:scale-105 transition ease-in-out duration-500"
                    />
                </div>

                <div>
                    <Image
                        width={800}
                        height={600}
                        src="/images/2.jpg"
                        alt="img"
                        className="mb-4 md:mb-6 lg:mb-8 hover:scale-105 transition ease-in-out duration-500"
                    />
                    <Image
                        width={800}
                        height={600}
                        src="/images/5.jpg"
                        alt="img"
                        className="mb-3 md:mb-6 lg:mb-8 hover:scale-105 transition ease-in-out duration-500"
                    />
                    <Image
                        width={800}
                        height={600}
                        src="/images/6.jpg"
                        alt="img"
                        className="hover:scale-105 transition ease-in-out duration-500"
                    />
                </div>

                <div>
                    <Image
                        width={800}
                        height={1000}
                        src="/images/3.jpg"
                        alt="img"
                        className="mb-4 md:mb-6 lg:mb-8 hover:scale-105 transition ease-in-out duration-500"
                    />
                    <Image
                        width={800}
                        height={600}
                        src="/images/7.jpg"
                        alt="img"
                        className="hover:scale-105 transition ease-in-out duration-500"
                    />
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Portfolio;
