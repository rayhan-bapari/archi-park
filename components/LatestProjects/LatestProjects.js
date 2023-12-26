import React from "react";

import { Poppins } from "next/font/google";
const poppins = Poppins({
    weight: ["400", "600", "700"],
    subsets: ["latin"],
});
const LatestProjects = () => {
    return (
        <section id="projects">
            <div className="container px-0">
                <h2
                    className="text-center text-white text-[1.45rem] sm:text-[2.25rem] font-semibold leading-normal tracking-[0.1125rem] uppercase pt-[91px] pb-[67px]"
                    style={poppins.style}
                >
                    See our <span className="highlight text-[--main-color]">latest work</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2">
                    <div className="proj-1 h-[238px]">
                        <h2 className="absolute bottom-[30px] left-[30px] w-[192px] text-white text-[24px] font-bold leading-[104.17%] capitalize">
                            Modern Family House
                        </h2>
                    </div>
                    <div className="proj-3 md:row-span-2 md:h-auto h-[238px]">
                        <h2 className="absolute bottom-[30px] left-[30px] w-[211px] text-white text-[24px] font-bold leading-[104.17%] capitalize">
                            Creative Kitchen Design
                        </h2>
                    </div>
                    <div className="proj-4 h-[238px]">
                        <h2 className="absolute bottom-[30px] left-[30px] w-[165px] text-white text-[24px] font-bold leading-[104.17%] capitalize">
                            Luxurios Villa
                        </h2>
                    </div>
                    <div className="proj-6 md:row-span-2 md:h-auto h-[238px]">
                        <h2 className="absolute bottom-[30px] left-[30px] w-[192px] text-white text-[24px] font-bold leading-[104.17%] capitalize">
                            Modern Family House
                        </h2>
                    </div>
                    <div className="proj-2 h-[238px]">
                        <h2 className="absolute bottom-[30px] left-[30px] w-[192px] text-white text-[24px] font-bold leading-[104.17%] capitalize">
                            Public Cafe Design
                        </h2>
                    </div>
                    <div className="proj-5 h-[238px]">
                        <h2 className="absolute bottom-[30px] left-[30px] w-[192px] text-white text-[24px] font-bold leading-[104.17%] capitalize">
                            Residencial Project
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LatestProjects;
