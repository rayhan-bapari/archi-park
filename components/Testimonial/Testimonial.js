import React from "react";
import Image from "next/image";
import client1 from "../../public/clients/client-1.png";
import client2 from "../../public/clients/client-2.png";
import client3 from "../../public/clients/client-3.png";
import StarRating from "@rubenvara/react-star-rating";

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
const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            name: "Sarah Ali",
            feedback:
                " I have been working with Archipark for a few months now and I can honestly say that it has been a great experience. They have provided me with actionable advice that has helped me get insights into my project that I wouldn't have been able to get on my own. The price was also very affordable and the support team was always available to help with any questions I had. I highly recommend Archipark for anyone looking for quality architecture services.",
            rating: 5,
            img: client1,
        },
        {
            id: 2,
            name: "John Doe",
            feedback:
                "I have been working with Archipark for the past year and I am extremely satisfied with their services. Their top features and benefits include high-quality design, fast turnaround times, and competitive pricing. They are very knowledgeable and have a great understanding of the architecture industry. Their designs are creative and innovative, and they always strive to meet our expectations. I highly recommend Archipark for any architecture project.",
            rating: 5,
            img: client2,
        },
        {
            id: 3,
            name: "Jane Doe",
            feedback:
                "I have been working with Archipark for over a year now and I am very happy with their services. They are very professional, responsive, and creative. They have helped me design my dream home and I couldn't be happier with the results. I highly recommend them to anyone looking for an architecture firm.",
            rating: 4.5,
            img: client3,
        },
        {
            id: 4,
            name: "John Doe",
            feedback:
                "I have been working with Archipark for a few months now and I am very happy with their services. They are very professional and responsive. They have helped me design my dream home and I couldn't be happier with the results. I highly recommend them to anyone looking for an architecture firm.",
            rating: 5,
            img: client1,
        },
    ];

    const config = {
        fullColor: "#C6A47E",
        emptyColor: "#494949",
        size: 24,
    };

    const style = { alignItems: "center", justifyContent: "center", marginTop: "27px" };

    return (
        <section className="pt-[3.19rem] pb-[3.81rem] md:pt-[4.19rem] md:pb-[4.81rem] md:pl-[5.5rem] md:pr-[4.94rem] px-4">
            <div className="container">
                <h2
                    className="text-center text-white text-[1.45rem] sm:text-[2.25rem] font-semibold leading-normal tracking-[0.1125rem] uppercase"
                    style={poppins.style}
                >
                    What our <span className="highlight text-[--main-color]">client says</span>
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
                        1280: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1580: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                    className="mySwiper px-[100px]"
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id} className="mt-[4rem] mb-[6rem]">
                            <div className="testimonial-card bg-[#353C43] inline-flex flex-col items-center px-[50px] pt-[45px] pb-[80px] relative">
                                <div className="testimonial-card__content mt-[15px]">
                                    <p
                                        className="text-white text-base font-normal leading-normal text-center line-clamp-5"
                                        style={poppins.style}
                                    >
                                        {testimonial.feedback}
                                    </p>
                                    <StarRating rating={testimonial.rating} config={config} style={style} />
                                    <h2
                                        className="text-white text-[24px] font-semibold leading-normal capitalize text-center mt-[25px]"
                                        style={poppins.style}
                                    >
                                        {testimonial.name}
                                    </h2>
                                </div>
                            </div>
                            <div className="client-img w-[125px] h-[125px] border-2 border-[--main-color] inline-flex items-center justify-center z-50 absolute top-[85%] left-[33%]">
                                <Image
                                    src={testimonial.img}
                                    alt="client"
                                    width={95}
                                    height={95}
                                    objectPosition="top"
                                    className="w-[95px] h-[95px] object-cover "
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonial;
