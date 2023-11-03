import { FC } from "react";
import SectionWrapper from "../Layout/SectionWrapper";
import Image from "next/image";

const About: FC = () => {
    return (
        <SectionWrapper id="about" title="Proč my">
                <div className="flex flex-col-reverse items-center justify-between gap-5 md:flex-row md:gap-10 lg:gap-14">
                    <div className="w-full md:w-1/2">
                        <div className="flex items-center -mx-3 sm:-mx-4">
                            <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                <div className="py-3 sm:py-4">
                                    <Image width={500} height={500}
                                        src="https://images.unsplash.com/photo-1620653713380-7a34b773fef8?auto=format&fit=crop&q=80&w=3045&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt=""
                                        className="w-full rounded-2xl"
                                    />
                                </div>
                                <div className="py-3 sm:py-4">
                                    <Image width={500} height={500}
                                        src="https://images.unsplash.com/photo-1631755544909-338697660f5b?auto=format&fit=crop&q=80&w=2967&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt=""
                                        className="w-full rounded-2xl"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                <div className="relative z-10 my-4">
                                    <Image width={500} height={500}
                                        src="https://i.ibb.co/9y7nYCD/image-3.jpg"
                                        alt=""
                                        className="w-full rounded-2xl"
                                    />
                                    <span className="absolute -right-7 -bottom-7 z-[-1]">
                                        <svg
                                            width={134}
                                            height={106}
                                            viewBox="0 0 134 106"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle
                                                cx="1.66667"
                                                cy={104}
                                                r="1.66667"
                                                transform="rotate(-90 1.66667 104)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="16.3333"
                                                cy={104}
                                                r="1.66667"
                                                transform="rotate(-90 16.3333 104)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx={31}
                                                cy={104}
                                                r="1.66667"
                                                transform="rotate(-90 31 104)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="45.6667"
                                                cy={104}
                                                r="1.66667"
                                                transform="rotate(-90 45.6667 104)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="60.3334"
                                                cy={104}
                                                r="1.66667"
                                                transform="rotate(-90 60.3334 104)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="88.6667"
                                                cy={104}
                                                r="1.66667"
                                                transform="rotate(-90 88.6667 104)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="117.667"
                                                cy={104}
                                                r="1.66667"
                                                transform="rotate(-90 117.667 104)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="74.6667"
                                                cy={104}
                                                r="1.66667"
                                                transform="rotate(-90 74.6667 104)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx={103}
                                                cy={104}
                                                r="1.66667"
                                                transform="rotate(-90 103 104)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx={132}
                                                cy={104}
                                                r="1.66667"
                                                transform="rotate(-90 132 104)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="1.66667"
                                                cy="89.3333"
                                                r="1.66667"
                                                transform="rotate(-90 1.66667 89.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="16.3333"
                                                cy="89.3333"
                                                r="1.66667"
                                                transform="rotate(-90 16.3333 89.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx={31}
                                                cy="89.3333"
                                                r="1.66667"
                                                transform="rotate(-90 31 89.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="45.6667"
                                                cy="89.3333"
                                                r="1.66667"
                                                transform="rotate(-90 45.6667 89.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="60.3333"
                                                cy="89.3338"
                                                r="1.66667"
                                                transform="rotate(-90 60.3333 89.3338)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="88.6667"
                                                cy="89.3338"
                                                r="1.66667"
                                                transform="rotate(-90 88.6667 89.3338)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="117.667"
                                                cy="89.3338"
                                                r="1.66667"
                                                transform="rotate(-90 117.667 89.3338)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="74.6667"
                                                cy="89.3338"
                                                r="1.66667"
                                                transform="rotate(-90 74.6667 89.3338)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx={103}
                                                cy="89.3338"
                                                r="1.66667"
                                                transform="rotate(-90 103 89.3338)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx={132}
                                                cy="89.3338"
                                                r="1.66667"
                                                transform="rotate(-90 132 89.3338)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="1.66667"
                                                cy="74.6673"
                                                r="1.66667"
                                                transform="rotate(-90 1.66667 74.6673)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="1.66667"
                                                cy="31.0003"
                                                r="1.66667"
                                                transform="rotate(-90 1.66667 31.0003)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="16.3333"
                                                cy="74.6668"
                                                r="1.66667"
                                                transform="rotate(-90 16.3333 74.6668)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="16.3333"
                                                cy="31.0003"
                                                r="1.66667"
                                                transform="rotate(-90 16.3333 31.0003)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx={31}
                                                cy="74.6668"
                                                r="1.66667"
                                                transform="rotate(-90 31 74.6668)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx={31}
                                                cy="31.0003"
                                                r="1.66667"
                                                transform="rotate(-90 31 31.0003)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="45.6667"
                                                cy="74.6668"
                                                r="1.66667"
                                                transform="rotate(-90 45.6667 74.6668)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="45.6667"
                                                cy="31.0003"
                                                r="1.66667"
                                                transform="rotate(-90 45.6667 31.0003)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="60.3333"
                                                cy="74.6668"
                                                r="1.66667"
                                                transform="rotate(-90 60.3333 74.6668)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="60.3333"
                                                cy="30.9998"
                                                r="1.66667"
                                                transform="rotate(-90 60.3333 30.9998)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="88.6667"
                                                cy="74.6668"
                                                r="1.66667"
                                                transform="rotate(-90 88.6667 74.6668)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="88.6667"
                                                cy="30.9998"
                                                r="1.66667"
                                                transform="rotate(-90 88.6667 30.9998)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="117.667"
                                                cy="74.6668"
                                                r="1.66667"
                                                transform="rotate(-90 117.667 74.6668)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="117.667"
                                                cy="30.9998"
                                                r="1.66667"
                                                transform="rotate(-90 117.667 30.9998)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="74.6667"
                                                cy="74.6668"
                                                r="1.66667"
                                                transform="rotate(-90 74.6667 74.6668)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="74.6667"
                                                cy="30.9998"
                                                r="1.66667"
                                                transform="rotate(-90 74.6667 30.9998)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx={103}
                                                cy="74.6668"
                                                r="1.66667"
                                                transform="rotate(-90 103 74.6668)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx={103}
                                                cy="30.9998"
                                                r="1.66667"
                                                transform="rotate(-90 103 30.9998)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx={132}
                                                cy="74.6668"
                                                r="1.66667"
                                                transform="rotate(-90 132 74.6668)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx={132}
                                                cy="30.9998"
                                                r="1.66667"
                                                transform="rotate(-90 132 30.9998)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="1.66667"
                                                cy="60.0003"
                                                r="1.66667"
                                                transform="rotate(-90 1.66667 60.0003)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="1.66667"
                                                cy="16.3333"
                                                r="1.66667"
                                                transform="rotate(-90 1.66667 16.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="16.3333"
                                                cy="60.0003"
                                                r="1.66667"
                                                transform="rotate(-90 16.3333 60.0003)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="16.3333"
                                                cy="16.3333"
                                                r="1.66667"
                                                transform="rotate(-90 16.3333 16.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx={31}
                                                cy="60.0003"
                                                r="1.66667"
                                                transform="rotate(-90 31 60.0003)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx={31}
                                                cy="16.3333"
                                                r="1.66667"
                                                transform="rotate(-90 31 16.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="45.6667"
                                                cy="60.0003"
                                                r="1.66667"
                                                transform="rotate(-90 45.6667 60.0003)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="45.6667"
                                                cy="16.3333"
                                                r="1.66667"
                                                transform="rotate(-90 45.6667 16.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="60.3333"
                                                cy="60.0003"
                                                r="1.66667"
                                                transform="rotate(-90 60.3333 60.0003)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="60.3333"
                                                cy="16.3333"
                                                r="1.66667"
                                                transform="rotate(-90 60.3333 16.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="88.6667"
                                                cy="60.0003"
                                                r="1.66667"
                                                transform="rotate(-90 88.6667 60.0003)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="88.6667"
                                                cy="16.3333"
                                                r="1.66667"
                                                transform="rotate(-90 88.6667 16.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="117.667"
                                                cy="60.0003"
                                                r="1.66667"
                                                transform="rotate(-90 117.667 60.0003)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="117.667"
                                                cy="16.3333"
                                                r="1.66667"
                                                transform="rotate(-90 117.667 16.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="74.6667"
                                                cy="60.0003"
                                                r="1.66667"
                                                transform="rotate(-90 74.6667 60.0003)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="74.6667"
                                                cy="16.3333"
                                                r="1.66667"
                                                transform="rotate(-90 74.6667 16.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx={103}
                                                cy="60.0003"
                                                r="1.66667"
                                                transform="rotate(-90 103 60.0003)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx={103}
                                                cy="16.3333"
                                                r="1.66667"
                                                transform="rotate(-90 103 16.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx={132}
                                                cy="60.0003"
                                                r="1.66667"
                                                transform="rotate(-90 132 60.0003)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx={132}
                                                cy="16.3333"
                                                r="1.66667"
                                                transform="rotate(-90 132 16.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="1.66667"
                                                cy="45.3333"
                                                r="1.66667"
                                                transform="rotate(-90 1.66667 45.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="1.66667"
                                                cy="1.66683"
                                                r="1.66667"
                                                transform="rotate(-90 1.66667 1.66683)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="16.3333"
                                                cy="45.3333"
                                                r="1.66667"
                                                transform="rotate(-90 16.3333 45.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="16.3333"
                                                cy="1.66683"
                                                r="1.66667"
                                                transform="rotate(-90 16.3333 1.66683)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx={31}
                                                cy="45.3333"
                                                r="1.66667"
                                                transform="rotate(-90 31 45.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx={31}
                                                cy="1.66683"
                                                r="1.66667"
                                                transform="rotate(-90 31 1.66683)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="45.6667"
                                                cy="45.3333"
                                                r="1.66667"
                                                transform="rotate(-90 45.6667 45.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="45.6667"
                                                cy="1.66683"
                                                r="1.66667"
                                                transform="rotate(-90 45.6667 1.66683)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="60.3333"
                                                cy="45.3338"
                                                r="1.66667"
                                                transform="rotate(-90 60.3333 45.3338)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="60.3333"
                                                cy="1.66683"
                                                r="1.66667"
                                                transform="rotate(-90 60.3333 1.66683)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="88.6667"
                                                cy="45.3338"
                                                r="1.66667"
                                                transform="rotate(-90 88.6667 45.3338)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="88.6667"
                                                cy="1.66683"
                                                r="1.66667"
                                                transform="rotate(-90 88.6667 1.66683)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="117.667"
                                                cy="45.3338"
                                                r="1.66667"
                                                transform="rotate(-90 117.667 45.3338)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="117.667"
                                                cy="1.66683"
                                                r="1.66667"
                                                transform="rotate(-90 117.667 1.66683)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="74.6667"
                                                cy="45.3338"
                                                r="1.66667"
                                                transform="rotate(-90 74.6667 45.3338)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="74.6667"
                                                cy="1.66683"
                                                r="1.66667"
                                                transform="rotate(-90 74.6667 1.66683)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx={103}
                                                cy="45.3338"
                                                r="1.66667"
                                                transform="rotate(-90 103 45.3338)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx={103}
                                                cy="1.66683"
                                                r="1.66667"
                                                transform="rotate(-90 103 1.66683)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx={132}
                                                cy="45.3338"
                                                r="1.66667"
                                                transform="rotate(-90 132 45.3338)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx={132}
                                                cy="1.66683"
                                                r="1.66667"
                                                transform="rotate(-90 132 1.66683)"
                                                fill="#3056D3"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                            <h2 className="mb-5 text-3xl font-bold text-dark dark:text-black sm:text-[40px]/[48px]">
                                Zajistíme spokojenost svých zákazníků poskytováním kvalitních služeb.
                            </h2>
                            <p className="mb-5 text-base text-body-color dark:text-dark-6">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate rem cum quas
                                similique quae nesciunt sequi officia delectus veniam atque, consectetur odio? Molestias
                                earum pariatur laboriosam provident temporibus laborum amet!
                            </p>
                            <p className="mb-8 text-base text-body-color dark:text-dark-6">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat natus aliquam
                                inventore. Accusantium, quidem, animi atque dignissimos nesciunt error exercitationem
                                earum voluptatem esse et totam deserunt molestiae, perspiciatis doloribus quibusdam.
                            </p>
                    </div>
                </div>
        </SectionWrapper>
    );
};

export default About;
