import AboutComp from "@/components/AboutComp/AboutComp";
import LatestProjects from "@/components/LatestProjects/LatestProjects";
import Layout from "@/components/Layout/Layout";
import HeroSlider from "@/components/Sliders/HeroSlider";
import React from "react";

const Home = () => {
    return (
        <Layout>
            <HeroSlider />
            <AboutComp />
            <LatestProjects />
        </Layout>
    );
};

export default Home;
