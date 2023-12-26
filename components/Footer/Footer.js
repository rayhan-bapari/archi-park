import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "../../public/logo.svg";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { LiaMapMarkerSolid } from "react-icons/lia";
import { BsTelephoneFill } from "react-icons/bs";
import { BiSolidEnvelope } from "react-icons/bi";

import { Poppins } from "next/font/google";
const poppins = Poppins({
    weight: ["400", "500", "600"],
    subsets: ["latin"],
});
const Footer = () => {
    const socialLink = [
        {
            icon: <FaFacebookF />,
            link: "https://www.facebook.com/",
        },
        {
            icon: <FaTwitter />,
            link: "https://twitter.com/",
        },
        {
            icon: <FaInstagram />,
            link: "https://www.instagram.com/",
        },
        {
            icon: <FaLinkedinIn />,
            link: "https://www.linkedin.com/",
        },
    ];

    const servicesLink = [
        {
            id: 1,
            title: "Industrial Design",
            link: "#",
        },
        {
            id: 2,
            title: "Commercial Interior Design",
            link: "#",
        },
        {
            id: 3,
            title: "Residencial Interior Design",
            link: "#",
        },
        {
            id: 4,
            title: "Detailed and Phased Planning",
            link: "#",
        },
        {
            id: 5,
            title: "Apartment Exterior Design",
            link: "#",
        },
        {
            id: 6,
            title: "Architecture Design",
            link: "#",
        },
    ];

    const contactDetails = [
        {
            id: 1,
            icon: <LiaMapMarkerSolid />,
            details: "Khilkhet, Dhaka, Bangladesh",
            link: "https://goo.gl/maps/4h1UJQ7zgKxYf6jy7",
        },
        {
            id: 2,
            icon: <BsTelephoneFill />,
            details: "+8801626317700",
            link: "tel:+8801626317700",
        },
        {
            id: 3,
            icon: <BiSolidEnvelope />,
            details: "mail@gmail.com",
            link: "mailto:developerrayhan15@gmail.com",
        },
    ];

    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:justify-between px-6 lg:px-[100px] py-[30px]"
                id="footer"
            >
                <div className="footer-logo">
                    <Link href="/">
                        <Image src={logo} alt="logo" width={200} height={60} className="h-[80px] object-contain" />
                    </Link>
                    <p className="text-white text-base font-normal leading-normal mt-[15px]" style={poppins.style}>
                        Suspendisse sem est, eleifend id vulputate sit amet, rhoncus mollis justo. Cras iaculis justo ac
                        dictum vestibulum. Cras id arcu turpis. Nulla ligula velit, condimentum ut orci eget, semper
                        efficitur odio.
                    </p>
                    <div className="flex items-center gap-[20px] mt-[25px]">
                        {socialLink.map((item, index) => (
                            <Link href={item.link} key={index} className="text-white text-[25px]">
                                {item.icon}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="services-link mt-[30px] lg:mt-0 md:ml-[60px] lg:ml-[100px]">
                    <h2
                        className="text-[#FAF8F2] text-[22px] font-medium leading-normal uppercase"
                        style={poppins.style}
                    >
                        Our Services
                    </h2>
                    <ul className="flex flex-col items-start gap-[10px] mt-[25px]">
                        {servicesLink.map((item) => (
                            <li key={item.id}>
                                <Link
                                    href={item.link}
                                    className="text-white text-base font-normal leading-normal"
                                    style={poppins.style}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="address mt-[30px] lg:mt-0 lg:ml-[80px]">
                    <h2
                        className="text-[#FAF8F2] text-[22px] font-medium leading-normal uppercase"
                        style={poppins.style}
                    >
                        contacts
                    </h2>
                    <ul className="flex flex-col items-start gap-[15px] mt-[25px]">
                        {contactDetails.map((item) => (
                            <li key={item.id}>
                                <Link
                                    href={item.link}
                                    className="text-white text-base font-normal leading-normal flex items-center gap-[20px]"
                                    style={poppins.style}
                                >
                                    <span className="text-[25px]">{item.icon}</span>
                                    <span>{item.details}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="copyright py-[15px] border-t border-white border-opacity-[0.15]">
                <p className="text-[#FAF8F2] text-base font-normal leading-normal text-center" style={poppins.style}>
                    &copy; {currentYear} <span className="text-[#FAF8F2]">Archipark</span>. All Rights Reserved.
                    Developerd by <Link href="#">CodeNest</Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
