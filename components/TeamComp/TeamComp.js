import React from "react";
import Image from "next/image";

import team1 from "../../public/team/team-1.png";
import team2 from "../../public/team/team-2.png";
import team3 from "../../public/team/team-3.png";
import team4 from "../../public/team/team-4.png";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { Autoplay } from "swiper/modules";

import { Poppins } from "next/font/google";
const poppins = Poppins({
    weight: ["400", "600", "700"],
    subsets: ["latin"],
});
const TeamComp = () => {
    const teamData = [
        {
            id: 1,
            name: "Sarah Ali",
            position: "Director",
            img: team1,
            socialLinks: [
                {
                    id: 1,
                    name: "facebook",
                    link: "#",
                    icon: <FaFacebook />,
                },
                {
                    id: 2,
                    name: "twitter",
                    link: "#",
                    icon: <FaTwitter />,
                },
                {
                    id: 3,
                    name: "instagram",
                    link: "#",
                    icon: <FaInstagram />,
                },
            ],
        },
        {
            id: 2,
            name: "John Doe",
            position: "ARCHITECT",
            img: team2,
            socialLinks: [
                {
                    id: 1,
                    name: "facebook",
                    link: "#",
                    icon: <FaFacebook />,
                },
                {
                    id: 2,
                    name: "twitter",
                    link: "#",
                    icon: <FaTwitter />,
                },
                {
                    id: 3,
                    name: "instagram",
                    link: "#",
                    icon: <FaInstagram />,
                },
            ],
        },
        {
            id: 3,
            name: "Marry Doe",
            position: "ARCHITECT",
            img: team3,
            socialLinks: [
                {
                    id: 1,
                    name: "facebook",
                    link: "#",
                    icon: <FaFacebook />,
                },
                {
                    id: 2,
                    name: "twitter",
                    link: "#",
                    icon: <FaTwitter />,
                },
                {
                    id: 3,
                    name: "instagram",
                    link: "#",
                    icon: <FaInstagram />,
                },
            ],
        },
        {
            id: 4,
            name: "John Smith",
            position: "ARCHITECT",
            img: team4,
            socialLinks: [
                {
                    id: 1,
                    name: "facebook",
                    link: "#",
                    icon: <FaFacebook />,
                },
                {
                    id: 2,
                    name: "twitter",
                    link: "#",
                    icon: <FaTwitter />,
                },
                {
                    id: 3,
                    name: "instagram",
                    link: "#",
                    icon: <FaInstagram />,
                },
            ],
        },
        {
            id: 5,
            name: "Sarah Ali",
            position: "Director",
            img: team3,
            socialLinks: [
                {
                    id: 1,
                    name: "facebook",
                    link: "#",
                    icon: <FaFacebook />,
                },
                {
                    id: 2,
                    name: "twitter",
                    link: "#",
                    icon: <FaTwitter />,
                },
                {
                    id: 3,
                    name: "instagram",
                    link: "#",
                    icon: <FaInstagram />,
                },
            ],
        },
        {
            id: 6,
            name: "Ben Doe",
            position: "ARCHITECT",
            img: team2,
            socialLinks: [
                {
                    id: 1,
                    name: "facebook",
                    link: "#",
                    icon: <FaFacebook />,
                },
                {
                    id: 2,
                    name: "twitter",
                    link: "#",
                    icon: <FaTwitter />,
                },
                {
                    id: 3,
                    name: "instagram",
                    link: "#",
                    icon: <FaInstagram />,
                },
            ],
        },
    ];
    return (
        <section
            id="team"
            className="pt-[3.19rem] pb-[3.81rem] md:pt-[4.19rem] md:pb-[4.81rem] md:pl-[5.5rem] md:pr-[4.94rem] px-4"
        >
            <div className="container">
                <h2
                    className="text-center text-white text-[1.45rem] sm:text-[2.25rem] font-semibold leading-normal tracking-[0.1125rem] uppercase"
                    style={poppins.style}
                >
                    Creative <span className="highlight text-[--main-color]">Expertise</span>
                </h2>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    grabCursor={true}
                    loop={true}
                    speed={1000}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 16,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                    className="mySwiper "
                >
                    {teamData.map((item) => (
                        <SwiperSlide key={item.id} className="mt-[4rem] mb-[6rem]">
                            <div className="flex flex-col items-center justify-center relative">
                                <div className="w-[288px] h-[365.462px] overflow-hidden ">
                                    <Image
                                        src={item.img}
                                        alt={item.name}
                                        layout="fill"
                                        objectFit="cover"
                                        objectPosition="center"
                                    />
                                </div>
                                <div className="team-desc w-[80%] md:w-[220px] h-[120px] bg-[#212529] flex flex-col justify-center items-center z-20 absolute top-[90%]">
                                    <h4
                                        className="text-white text-[20px] font-medium leading-normal"
                                        style={poppins.style}
                                    >
                                        {item.name}
                                    </h4>
                                    <p
                                        className="text-[--main-color] text-base font-normal leading-normal tracking-[0.8px]"
                                        style={poppins.style}
                                    >
                                        {item.position}
                                    </p>
                                    <div className="flex items-center justify-center mt-[1rem]">
                                        {item.socialLinks.map((link) => (
                                            <a
                                                key={link.id}
                                                href={link.link}
                                                className="text-white text-[1.25rem] font-semibold leading-normal tracking-[0.1125rem] uppercase mx-[0.625rem]"
                                                style={poppins.style}
                                            >
                                                {link.icon}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default TeamComp;
