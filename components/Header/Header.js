import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "../../public/logo.svg";

import { Oswald } from "next/font/google";

const oswald = Oswald({
    display: "swap",
    weights: [300],
    subsets: ["latin-ext"],
});

const Header = () => {
    const currentRoute = useRouter().pathname;

    return (
        <header>
            <nav className="container h-[100px] flex items-center justify-between">
                <Link href="/">
                    <Image src={logo} alt="logo" width={300} height={80} className="w-[200px] h-[80px]" />
                </Link>
                <ul className="flex items-center">
                    <li>
                        <Link
                            href="/"
                            className={`font-light text-[15px] uppercase tracking-[3px] inline-block relative py-[42px] px-[25px] transition-all duration-300 hover:text-[--main-color] xl:before:content-[''] xl:before:w-[5px] xl:before:h-[5px] xl:before:bg-[--main-color] xl:before:block xl:before:absolute xl:before:right-[-2px] xl:before:top-[calc(50%_-_2px)] ${
                                currentRoute === "/" ? "text-[--main-color]" : "text-[--text-color]"
                            }`}
                            style={oswald.style}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className={`font-light text-[15px] uppercase tracking-[3px] inline-block relative py-[42px] px-[25px] transition-all duration-300 hover:text-[--main-color] xl:before:content-[''] xl:before:w-[5px] xl:before:h-[5px] xl:before:bg-[--main-color] xl:before:block xl:before:absolute xl:before:right-[-2px] xl:before:top-[calc(50%_-_2px)] ${
                                currentRoute === "/about" ? "text-[--main-color]" : "text-[--text-color]"
                            }`}
                            style={oswald.style}
                        >
                            About us
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/portfolio"
                            className={`font-light text-[15px] uppercase tracking-[3px] inline-block relative py-[42px] px-[25px] transition-all duration-300 hover:text-[--main-color] xl:before:content-[''] xl:before:w-[5px] xl:before:h-[5px] xl:before:bg-[--main-color] xl:before:block xl:before:absolute xl:before:right-[-2px] xl:before:top-[calc(50%_-_2px)] ${
                                currentRoute === "/portfolio" ? "text-[--main-color]" : "text-[--text-color]"
                            }`}
                            style={oswald.style}
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/services"
                            className={`font-light text-[15px] uppercase tracking-[3px] inline-block relative py-[42px] px-[25px] transition-all duration-300 hover:text-[--main-color] xl:before:content-[''] xl:before:w-[5px] xl:before:h-[5px] xl:before:bg-[--main-color] xl:before:block xl:before:absolute xl:before:right-[-2px] xl:before:top-[calc(50%_-_2px)] ${
                                currentRoute === "/services" ? "text-[--main-color]" : "text-[--text-color]"
                            }`}
                            style={oswald.style}
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/blog"
                            className={`font-light text-[15px] uppercase tracking-[3px] inline-block relative py-[42px] px-[25px] transition-all duration-300 hover:text-[--main-color] xl:before:content-[''] xl:before:w-[5px] xl:before:h-[5px] xl:before:bg-[--main-color] xl:before:block xl:before:absolute xl:before:right-[-2px] xl:before:top-[calc(50%_-_2px)] ${
                                currentRoute === "/blog" ? "text-[--main-color]" : "text-[--text-color]"
                            }`}
                            style={oswald.style}
                        >
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className={`font-light text-[15px] uppercase tracking-[3px] inline-block relative py-[42px] px-[25px] transition-all duration-300 hover:text-[--main-color] xl:before:content-[''] xl:before:w-[5px] xl:before:h-[5px] xl:before:bg-[--main-color] xl:before:block xl:before:absolute xl:before:right-[-2px] xl:before:top-[calc(50%_-_2px)] ${
                                currentRoute === "/contact" ? "text-[--main-color]" : "text-[--text-color]"
                            }`}
                            style={oswald.style}
                        >
                            Contact us
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
