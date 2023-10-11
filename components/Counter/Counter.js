import React from "react";
import CountUp from "react-countup";

import { Poppins, Irish_Grover } from "next/font/google";
const poppins = Poppins({
    weight: ["400"],
    subsets: ["latin"],
});
const irish_grover = Irish_Grover({
    weight: ["400"],
    subsets: ["latin"],
});
const Counter = () => {
    return (
        <section>
            <div className="container px-4 md:px-[189px] mt-[128px] h-[200px] bg-[--main-color] ">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 h-full items-center">
                    <div className="counter">
                        <div className="counter__number" style={irish_grover.style}>
                            <CountUp
                                className="exp-countup"
                                start={0}
                                end={150}
                                duration={1}
                                useEasing={true}
                                separator=","
                                suffix="+"
                            />
                        </div>
                        <div className="counter__title" style={poppins.style}>
                            Projects Finished
                        </div>
                    </div>
                    <div className="counter">
                        <div className="counter__number" style={irish_grover.style}>
                            <CountUp
                                className="exp-countup"
                                start={0}
                                end={120}
                                duration={1}
                                useEasing={true}
                                separator=","
                                suffix="+"
                            />
                        </div>
                        <div className="counter__title" style={poppins.style}>
                            Happy Clients
                        </div>
                    </div>
                    <div className="counter">
                        <div className="counter__number" style={irish_grover.style}>
                            <CountUp
                                className="exp-countup"
                                start={0}
                                end={200}
                                duration={1}
                                useEasing={true}
                                separator=","
                                suffix="+"
                            />
                        </div>
                        <div className="counter__title" style={poppins.style}>
                            Projects In Progress
                        </div>
                    </div>
                    <div className="counter">
                        <div className="counter__number" style={irish_grover.style}>
                            <CountUp
                                className="exp-countup"
                                start={0}
                                end={3}
                                duration={1}
                                useEasing={true}
                                separator=","
                            />
                        </div>
                        <div className="counter__title" style={poppins.style}>
                            Offices in India
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Counter;
