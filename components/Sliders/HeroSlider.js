import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import sliderImg1 from "../../public/slider/slider-1.webp";
import sliderImg2 from "../../public/slider/slider-2.webp";
import sliderImg3 from "../../public/slider/slider-3.webp";
import { BiSolidRightArrow } from "react-icons/bi";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

import "swiper/css";
import "swiper/css/navigation";

import { Parallax, Pagination, Navigation } from "swiper/modules";

import { Poppins } from "next/font/google";

const poppins = Poppins({
    weight: ["400", "500", "600"],
    subsets: ["latin"],
});

export default function HeroSlider() {
    const sliderData = [
        {
            title: "we create your dream ideas",
            subtitle: "creative architecture",
            desc: "Quisque vel condimentum dolor, vitae luctus lacus. Integer finibus arcu non ultrices rhoncus.",
            image: sliderImg1,
        },
        {
            title: "we create your dream ideas",
            subtitle: "creative architecture",
            desc: "Quisque vel condimentum dolor, vitae luctus lacus. Integer finibus arcu non ultrices rhoncus.",
            image: sliderImg2,
        },
        {
            title: "we create your dream ideas",
            subtitle: "creative architecture",
            desc: "Quisque vel condimentum dolor, vitae luctus lacus. Integer finibus arcu non ultrices rhoncus.",
            image: sliderImg3,
        },
    ];

    return (
        <section>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                speed={1000}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    nextEl: ".customer-swiper-button-next",
                    prevEl: ".customer-swiper-button-prev",
                }}
                modules={[Parallax, Pagination, Navigation]}
                className="mySwiper relative"
            >
                {sliderData.map((slider, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="bg-cover bg-center h-[36.625rem] 3xl:h-[48rem] flex flex-col justify-center items-center slider-img parallax-bg"
                            style={{
                                background: `url(${slider.image.src}), lightgray -51.097px -159.727px / 107.097% 127.257% no-repeat`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            {slider.image.src ? (
                                <div
                                    className="flex flex-col justify-center items-center w-[20rem] h-[22rem] px-6 md:w-[41.375rem] md:h-[19.125rem] z-50 backdrop-blur-md"
                                    style={{
                                        background: "rgba(33, 37, 41, 0.70)",
                                    }}
                                >
                                    <h1
                                        className="text-[1.75rem] md:text-[2.125rem] font-semibold leading-normal tracking-[0.064rem] uppercase text-white text-center"
                                        style={poppins.style}
                                    >
                                        {slider.title}
                                    </h1>
                                    <h2
                                        className="text-[1.35rem] md:text-[1.75rem] font-medium text-[--main-color] leading-normal uppercase text-center mt-[0.12rem]"
                                        style={poppins.style}
                                    >
                                        {slider.subtitle}
                                    </h2>
                                    <p
                                        className="text-white w-[22rem] md:w-[25.125rem] h-[2.875rem] text-center text-base leading-normal font-normal mt-4"
                                        style={poppins.style}
                                    >
                                        {slider.desc}
                                    </p>
                                    <Link
                                        href={"#"}
                                        className="w-[11.375rem] h-[3.125rem] bg-[#C6A47E] text-white text-center text-[.94rem] leading-normal font-semibold uppercase inline-flex justify-center items-center mt-[2rem] md:mt-[1.25rem]"
                                    >
                                        Read More
                                        <BiSolidRightArrow className="ml-2" />
                                    </Link>
                                </div>
                            ) : (
                                <p>Image not found</p>
                            )}
                        </div>
                    </SwiperSlide>
                ))}
                <div className="custom-navigation">
                    <div className="customer-swiper-button-prev">
                        <BsArrowLeftCircle
                            size={40}
                            className="text-[--main-color] cursor-pointer absolute top-[90%] md:top-1/2 left-[1.56rem] z-[99]"
                        />
                    </div>
                    <div className="customer-swiper-button-next">
                        <BsArrowRightCircle
                            size={40}
                            className="text-[--main-color] cursor-pointer  absolute top-[90%] md:top-1/2 right-[1.56rem] z-[99]"
                        />
                    </div>
                </div>
            </Swiper>
        </section>
    );
}
