import React from "react";
import Image from "next/image";
import Moment from "react-moment";

import blog1 from "../../public/blog-img/blog-1.png";
import blog2 from "../../public/blog-img/blog-2.png";
import blog3 from "../../public/blog-img/blog-3.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { Autoplay } from "swiper/modules";

import { Poppins } from "next/font/google";
import Link from "next/link";
const poppins = Poppins({
    weight: ["400", "500", "600"],
    subsets: ["latin"],
});

const BlogComp = () => {
    const dateToFormat = "2023-10-12";
    const blogData = [
        {
            id: 1,
            date: dateToFormat,
            author: "John Doe",
            img: blog1,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis accumsan placerat, enim ante aliquet eros, sed vestibulum eros libero in nunc. Sed euismod, diam quis accumsan placerat, enim ante aliquet eros, sed vestibulum eros libero in nunc.",
        },
        {
            id: 2,
            date: dateToFormat,
            author: "John Doe",
            img: blog2,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis accumsan placerat, enim ante aliquet eros, sed vestibulum eros libero in nunc. Sed euismod, diam quis accumsan placerat, enim ante aliquet eros, sed vestibulum eros libero in nunc.",
        },
        {
            id: 3,
            date: dateToFormat,
            author: "John Doe",
            img: blog3,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis accumsan placerat, enim ante aliquet eros, sed vestibulum eros libero in nunc. Sed euismod, diam quis accumsan placerat, enim ante aliquet eros, sed vestibulum eros libero in nunc.",
        },
        {
            id: 4,
            date: dateToFormat,
            author: "John Doe",
            img: blog1,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis accumsan placerat, enim ante aliquet eros, sed vestibulum eros libero in nunc. Sed euismod, diam quis accumsan placerat, enim ante aliquet eros, sed vestibulum eros libero in nunc.",
        },
        {
            id: 5,
            date: dateToFormat,
            author: "John Doe",
            img: blog2,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis accumsan placerat, enim ante aliquet eros, sed vestibulum eros libero in nunc. Sed euismod, diam quis accumsan placerat, enim ante aliquet eros, sed vestibulum eros libero in nunc.",
        },
    ];
    return (
        <section id="blogs" className="px-4 pt-12 pb-16 md:px-[100px] md:pt-[]">
            <div className="container">
                <h2
                    className="text-center text-white text-[1.45rem] sm:text-[2.25rem] font-semibold leading-normal tracking-[0.1125rem] uppercase"
                    style={poppins.style}
                >
                    STAY UPDATED <span className="highlight text-[--main-color]">WITH US</span>
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
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 16,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1580: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                    className="mySwiper"
                >
                    {blogData.map((item) => (
                        <SwiperSlide key={item.id} className="mt-[40px]">
                            <div className="blog-card bg-[#353C43] md:max-w-[393px]">
                                <div className="blog-img">
                                    <Image src={item.img} alt="blog-img" className="h-[200px] object-cover w-full" />
                                </div>
                                <div className="blog-content px-[30px] py-[25px]">
                                    <div className="flex items-center justify-between">
                                        <p
                                            className="text-[--main-color] text-base font-normal leading-normal"
                                            style={poppins.style}
                                        >
                                            <Moment format="DD MMM YYYY" date={item.date} />
                                        </p>
                                        <p
                                            className="text-[--main-color] text-base font-normal leading-normal"
                                            style={poppins.style}
                                        >
                                            By {item.author}
                                        </p>
                                    </div>
                                    <h3
                                        className="text-white text-[18px] font-medium leading-normal mt-[20px] line-clamp-2"
                                        style={poppins.style}
                                    >
                                        {item.title}
                                    </h3>
                                    <p
                                        className="text-white text-[15px] font-normal leading-[20px] mt-[10px] line-clamp-3"
                                        style={poppins.style}
                                    >
                                        {item.desc}
                                    </p>
                                    <Link
                                        href="/blog"
                                        className="text-[--main-color] text-base font-normal leading-normal mt-[15px] inline-block underline"
                                        style={poppins.style}
                                    >
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default BlogComp;

{
    /* ; */
}
