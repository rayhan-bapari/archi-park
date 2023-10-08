import React from "react";

import service1 from "../../public/interior.svg";
import service2 from "../../public/floor.svg";
import service3 from "../../public/construction.svg";
import Image from "next/image";
import Link from "next/link";
import { BiSolidRightArrow } from "react-icons/bi";

import { Poppins } from "next/font/google";
const poppins = Poppins({
    weight: ["400", "600", "700"],
    subsets: ["latin"],
});
const ServiceComp = () => {
    const serviceData = [
        {
            id: 1,
            title: "Interior Design",
            slogan: "We Design Ideas",
            desc: "Quisque vel condimentum dolor, vitae luctus lacus. Integer finibus arcu non ultrices rhoncus.",
            image: service1,
        },
        {
            id: 2,
            title: "floor Plan Design",
            slogan: "We Design Ideas",
            desc: "Quisque vel condimentum dolor, vitae luctus lacus. Integer finibus arcu non ultrices rhoncus.",
            image: service2,
        },
        {
            id: 3,
            title: "Construction",
            slogan: "We Design Ideas",
            desc: "Quisque vel condimentum dolor, vitae luctus lacus. Integer finibus arcu non ultrices rhoncus.",
            image: service3,
        },
    ];

    return (
        <section>
            <div className="container py-[85px]">
                <h2
                    className="text-center text-white text-[1.45rem] sm:text-[2.25rem] font-semibold leading-normal tracking-[0.1125rem] uppercase"
                    style={poppins.style}
                >
                    What <span className="highlight text-[--main-color]">we provide</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 md:px-[100px] mt-[60px] gap-4">
                    {serviceData.map((item) => (
                        <div
                            key={item.id}
                            className="service-card md:w-[393px] bg-[#353C43] inline-flex flex-col items-center px-[45px] py-[80px]"
                        >
                            <div className="service-card__image">
                                <Image src={item.image} alt={item.title} className="w-[48px] h-[52px] object-cover" />
                            </div>
                            <div className="service-card__content mt-[15px]">
                                <h3
                                    className="text-white text-[26px] font-semibold leading-normal capitalize text-center"
                                    style={poppins.style}
                                >
                                    {item.title}
                                </h3>
                                <h4
                                    className="text-[--main-color] text-[18px] font-normal leading-normal uppercase text-center tracking-[0.9px] mt-[6px]"
                                    style={poppins.style}
                                >
                                    {item.slogan}
                                </h4>
                                <p
                                    className="text-white text-base font-normal leading-normal text-center mt-[20px]"
                                    style={poppins.style}
                                >
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center items-center mt-[54px]">
                    <Link
                        href={"#"}
                        className="w-[12.375rem] h-[3.125rem] bg-[#C6A47E] text-white text-center text-[.94rem] leading-normal font-semibold uppercase inline-flex justify-center items-center"
                    >
                        See More Services
                        <BiSolidRightArrow className="ml-2" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServiceComp;
