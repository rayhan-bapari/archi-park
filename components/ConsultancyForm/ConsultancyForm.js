import React from "react";

import { Poppins } from "next/font/google";
const poppins = Poppins({
    weight: ["400", "500", "600"],
    subsets: ["latin"],
});
const ConsultancyForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <section>
            <div className="md:h-[200px] bg-[#353C43] lg:px-[100px] flex flex-col items-start lg:flex-row lg:items-center py-6 lg:py-0 lg:gap-[80px]">
                <h2 className="text-[--main-color] text-[34px] font-medium leading-normal" style={poppins.style}>
                    Design Consultancy
                </h2>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col items-start lg:flex-row lg:items-center gap-[30px]"
                >
                    <div class="flex items-center border-b-2 border-white/25 py-2 w-[287px]">
                        <input
                            class="appearance-none bg-transparent border-none w-full text-white text-base font-normal leading-normal  focus:outline-none"
                            type="text"
                            placeholder="Your Name"
                            style={poppins.style}
                        />
                    </div>
                    <div class="flex items-center border-b-2 border-white/25 py-2 w-[287px]">
                        <input
                            class="appearance-none bg-transparent border-none w-full text-white text-base font-normal leading-normal  focus:outline-none"
                            type="text"
                            placeholder="Your Email"
                            style={poppins.style}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-[182px] h-[60px] border-2 border-[--main-color] text-white text-center text-base font-semibold leading-normal uppercase"
                        style={poppins.style}
                        onClick={handleSubmit}
                    >
                        Get it now
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ConsultancyForm;
