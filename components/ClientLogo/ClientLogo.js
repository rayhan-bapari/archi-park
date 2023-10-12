import React from "react";
import Marquee from "react-fast-marquee";

import clientlogo1 from "../../public/client-logo/client-1.png";
import clientlogo2 from "../../public/client-logo/client-2.png";
import clientlogo3 from "../../public/client-logo/client-3.png";
import clientlogo4 from "../../public/client-logo/client-4.png";
import clientlogo5 from "../../public/client-logo/client-5.png";
import Image from "next/image";

const ClientLogo = () => {
    const clientLogoData = [
        {
            id: 1,
            img: clientlogo1,
        },
        {
            id: 2,
            img: clientlogo2,
        },
        {
            id: 3,
            img: clientlogo3,
        },
        {
            id: 4,
            img: clientlogo4,
        },
        {
            id: 5,
            img: clientlogo5,
        },
        {
            id: 6,
            img: clientlogo1,
        },
        {
            id: 7,
            img: clientlogo2,
        },
        {
            id: 8,
            img: clientlogo3,
        },
        {
            id: 9,
            img: clientlogo4,
        },
        {
            id: 10,
            img: clientlogo5,
        },
    ];

    return (
        <section>
            <div className="conatiner h-[150px] bg-[#353C43] md:px-[120px]">
                <Marquee
                    pauseOnHover={true}
                    pauseOnClick={true}
                    gradient={false}
                    speed={50}
                    className=" h-full flex items-center justify-center"
                >
                    {clientLogoData.map((item) => (
                        <div key={item.id} className="mx-[60px]">
                            <Image src={item.img} alt="client logo" />
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default ClientLogo;
