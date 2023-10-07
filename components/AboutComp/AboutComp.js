import React from "react";
import Image from "next/image";
import CountUp from "react-countup";

import aboutImg from "../../public/aboout.svg";
import aboutImg2 from "../../public/about-img2.png";

import Link from "next/link";
import { BiSolidRightArrow } from "react-icons/bi";
import { Poppins } from "next/font/google";
const poppins = Poppins({
    weight: ["400", "600", "700"],
    subsets: ["latin"],
});
const AboutComp = () => {
    return (
        <section
            id="about"
            className="pt-[3.19rem] pb-[3.81rem] md:pt-[4.19rem] md:pb-[4.81rem] md:pl-[5.5rem] md:pr-[4.94rem] px-4"
        >
            <div className="container">
                <h2
                    className="text-center text-white text-[1.45rem] sm:text-[2.25rem] font-semibold leading-normal tracking-[0.1125rem] uppercase"
                    style={poppins.style}
                >
                    Welcome to <span className="highlight text-[--main-color]">Archipark</span>
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center py-[4rem]">
                    <div className="about-left">
                        <Image src={aboutImg} alt="about-img" className="object-cover h-[550px]" />
                    </div>
                    <div className="about-right">
                        <h2
                            className="text-white text-[1.75rem] font-semibold leading-normal md:w-[37.8125rem]"
                            style={poppins.style}
                        >
                            We Design & Create Best Architect Around The World With Inspiration
                        </h2>
                        <div className="flex items-center gap-[1.3rem] bg-[#353C43] drop-shadow-[4px 4px 7px rgba(0, 0, 0, 0.25)] h-[4.375rem] mt-[2.25rem]">
                            <h3
                                className="counter pl-[1.87rem] text-[--main-color] text-[1.75rem] md:text-[2.5rem] font-bold leading-normal"
                                style={poppins.style}
                            >
                                <CountUp
                                    className="exp-countup"
                                    start={0}
                                    end={10}
                                    duration={1}
                                    useEasing={true}
                                    separator=","
                                    suffix="+"
                                />
                            </h3>
                            <p
                                className="text-white text-base md:text-[1.75rem] font-semibold leading-normal uppercase"
                                style={poppins.style}
                            >
                                year of <span className="text-[--main-color]">experience</span>
                            </p>
                        </div>
                        <p
                            className="mt-[3.06rem] text-white text-base font-normal leading-normal"
                            style={poppins.style}
                        >
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                            voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                            cupiditate non.
                            <br /> <br />
                            Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta
                            nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere
                            possimus.
                        </p>
                        <Link
                            href={"#"}
                            className="w-[11.375rem] h-[3.125rem] bg-[#C6A47E] text-white text-center text-[.94rem] leading-normal font-semibold uppercase inline-flex justify-center items-center mt-[1.56rem] md:mt-[1.25rem]"
                        >
                            Read More
                            <BiSolidRightArrow className="ml-2" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutComp;
