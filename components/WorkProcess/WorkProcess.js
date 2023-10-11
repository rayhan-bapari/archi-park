import React from "react";
import Image from "next/image";
import processImg from "../../public/Interior-Design.webp";

import { Poppins } from "next/font/google";
const poppins = Poppins({
    weight: ["400", "600", "700"],
    subsets: ["latin"],
});
const WorkProcess = () => {
    const processItem = [
        {
            id: 1,
            title: "Concept",
            desc: "Maecenas eget commodo risus. Praesent facilisis iaculis dapibus. Donec ac cursus est, ut vehicula enim.",
        },
        {
            id: 2,
            title: "idea",
            desc: "Maecenas eget commodo risus. Praesent facilisis iaculis dapibus. Donec ac cursus est, ut vehicula enim.",
        },
        {
            id: 3,
            title: "Design",
            desc: "Maecenas eget commodo risus. Praesent facilisis iaculis dapibus. Donec ac cursus est, ut vehicula enim.",
        },
        {
            id: 4,
            title: "Execution",
            desc: "Maecenas eget commodo risus. Praesent facilisis iaculis dapibus. Donec ac cursus est, ut vehicula enim.",
        },
    ];

    return (
        <section>
            <div className="container px-0">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="process-image">
                        <Image
                            src={processImg}
                            alt="Work Process"
                            priority={true}
                            className="h-[400px] md:h-[800px] object-cover bg-cover bg-center bg-no-repeat"
                        />
                    </div>
                    <div className="process-content h-auto md:h-[800px] pt-[38px] px-4 md:pl-[50px] pb-[50px]">
                        <h2 className="text-white text-[36px] font-semibold leading-normal" style={poppins.style}>
                            WATCH US HOW WE
                        </h2>
                        <h3
                            className="text-[--main-color] text-[36px] leading-normal font-semibold tracking-[1.8px]"
                            style={poppins.style}
                        >
                            CREATE YOUR DREAM
                        </h3>
                        <div className="flex flex-col gap-[26px]">
                            {processItem.map((item) => (
                                <div key={item.id} className="process-item flex items-center gap-[30px]">
                                    <div className="w-[125px] h-[125px] border-[6px] border-[#494949] inline-flex items-center justify-center">
                                        <span
                                            className="text-white text-[36px] font-bold leading-normal"
                                            style={poppins.style}
                                        >
                                            {item.id}
                                        </span>
                                    </div>
                                    <div className="process-item-content">
                                        <h4
                                            className="text-[24px] leading-normal font-medium text-white"
                                            style={poppins.style}
                                        >
                                            {item.title}
                                        </h4>
                                        <p
                                            className="text-white text-[16px] leading-normal font-normal md:w-[452px] mt-[26px]"
                                            style={poppins.style}
                                        >
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkProcess;
