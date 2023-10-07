import React from "react";

import { Poppins } from "next/font/google";

const poppins = Poppins({
    weight: ["400", "600"],
    subsets: ["latin"],
});
const AboutComp = () => {
    return (
        <section id="about" className="pt-[3.19rem] pb-[3.81rem] md:pt-[4.19rem] md:pb-[4.81rem]">
            <div className="container">
                <h2
                    className="text-center text-white text-[1.45rem] sm:text-[2.25rem] font-semibold leading-normal tracking-[0.1125rem] uppercase"
                    style={poppins.style}
                >
                    Welcome to <span className="highlight text-[--main-color]">Archipark</span>
                </h2>
            </div>
        </section>
    );
};

export default AboutComp;
