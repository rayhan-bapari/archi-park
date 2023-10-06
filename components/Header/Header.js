import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "../../public/logo.svg";
import StickyLogo from "../../public/sticky-logo.svg";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { BsTwitter } from "react-icons/bs";
import { RxMagnifyingGlass } from "react-icons/rx";
import { IoMdMail } from "react-icons/io";

import { Poppins } from "next/font/google";

const poppins = Poppins({
    weight: ["500"],
    subsets: ["latin"],
});

const Header = () => {
    const currentRoute = useRouter().pathname;
    const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
    const searchBarRef = useRef(null);
    const [isHeaderFixed, setIsHeaderFixed] = useState(false);

    const handleSearch = () => {
        setIsSearchBarOpen(!isSearchBarOpen);
    };

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 80) {
            setIsHeaderFixed(true);
        } else {
            setIsHeaderFixed(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
                setIsSearchBarOpen(false);
                const searchInput = searchBarRef.current.querySelector("input");
                searchInput.value = "";
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [searchBarRef]);

    return (
        <header className="">
            <div
                className={`
                ${isHeaderFixed ? "hidden" : "container top-logo flex items-center justify-center h-[80px]"}
            `}
            >
                <Link href="/" className="py-[1.37rem]">
                    <Image src={logo} alt="logo" width={300} height={80} className="w-[200px] h-[80px]" />
                </Link>
            </div>
            <nav
                className={`flex items-center justify-between px-[1.87rem] h-[80px]
                ${
                    isHeaderFixed
                        ? "fixed top-0 left-0 right-0 z-[999] bg-[#282d32] shadow-lg flex-row-reverse slide-down"
                        : "container"
                }
            `}
            >
                <ul className="flex items-center gap-[1.44rem]">
                    <li>
                        <Link href={"#"}>
                            <FaFacebookF size={20} className="text-white" />
                        </Link>
                    </li>
                    <li>
                        <Link href={"#"}>
                            <BsTwitter size={20} className="text-white" />
                        </Link>
                    </li>
                    <li>
                        <Link href={"#"}>
                            <FaLinkedinIn size={20} className="text-white" />
                        </Link>
                    </li>
                    <li>
                        <Link href={"#"}>
                            <PiInstagramLogoFill size={20} className="text-white" />
                        </Link>
                    </li>
                </ul>
                <ul className="flex items-center gap-[1.81rem]">
                    <li>
                        <Link
                            href="/"
                            className={`font-medium leading-[187.5%] text-base uppercase tracking-[0.02rem] inline-block relative py-[30px] transition-all duration-300 hover:text-[--main-color] ${
                                currentRoute === "/" ? "text-[--main-color]" : "text-white"
                            }`}
                            style={poppins.style}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className={`font-medium leading-[187.5%] text-base uppercase tracking-[0.02rem] inline-block relative py-[30px] transition-all duration-300 hover:text-[--main-color] ${
                                currentRoute === "/about" ? "text-[--main-color]" : "text-white"
                            }`}
                            style={poppins.style}
                        >
                            About us
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/projects"
                            className={`font-medium leading-[187.5%] text-base uppercase tracking-[0.02rem] inline-block relative py-[30px] transition-all duration-300 hover:text-[--main-color] ${
                                currentRoute === "/projects" ? "text-[--main-color]" : "text-white"
                            }`}
                            style={poppins.style}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/services"
                            className={`font-medium leading-[187.5%] text-base uppercase tracking-[0.02rem] inline-block relative py-[30px] transition-all duration-300 hover:text-[--main-color] ${
                                currentRoute === "/services" ? "text-[--main-color]" : "text-white"
                            }`}
                            style={poppins.style}
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/blog"
                            className={`font-medium leading-[187.5%] text-base uppercase tracking-[0.02rem] inline-block relative py-[30px] transition-all duration-300 hover:text-[--main-color] ${
                                currentRoute === "/blog" ? "text-[--main-color]" : "text-white"
                            }`}
                            style={poppins.style}
                        >
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className={`font-medium leading-[187.5%] text-base uppercase tracking-[0.02rem] inline-block relative py-[30px] transition-all duration-300 hover:text-[--main-color] ${
                                currentRoute === "/contact" ? "text-[--main-color]" : "text-white"
                            }`}
                            style={poppins.style}
                        >
                            Contact us
                        </Link>
                    </li>
                </ul>
                <ul
                    className={`
                    ${isHeaderFixed ? "hidden" : "flex items-center gap-[1.81rem]"}
                `}
                >
                    <li>
                        <button onClick={handleSearch}>
                            <RxMagnifyingGlass size={20} className="text-white" />
                        </button>
                    </li>
                    <li>
                        <Link href={"#"}>
                            <IoMdMail size={20} className="text-white" />
                        </Link>
                    </li>
                </ul>
                <Link
                    href="/"
                    className={`
                    ${isHeaderFixed ? "py-[1.37rem]" : "hidden"}
                `}
                >
                    <Image src={StickyLogo} alt="logo" width={300} height={80} className="w-[200px] h-[80px]" />
                </Link>
                <div
                    className={`fixed bg-[#282d32]/90 inset-0 transition-all transform ease-in-out delay-400 duration-500 h-screen flex items-center justify-center ${
                        isSearchBarOpen ? "translate-y-0 z-[999]" : "-translate-y-[100%]"
                    }`}
                >
                    <div
                        className="relative flex items-center w-[50%] h-12 rounded-lg focus-within:shadow-lg bg-[#282d32] overflow-hidden border border-gray-600"
                        ref={searchBarRef}
                    >
                        <div class="grid place-items-center h-full w-12 text-gray-400">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </div>

                        <input
                            class="peer h-full w-full outline-none bg-[#282d32] text-sm text-gray-400 pr-2"
                            type="text"
                            id="search"
                            placeholder="Search something.."
                        />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
