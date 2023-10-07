import AboutComp from "@/components/AboutComp/AboutComp";
import Layout from "@/components/Layout/Layout";
import HeroSlider from "@/components/Sliders/HeroSlider";
import React from "react";

const Home = () => {
    return (
        <Layout>
            <HeroSlider />
            <AboutComp />
        </Layout>
    );
};

export default Home;
