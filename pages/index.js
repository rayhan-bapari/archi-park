import AboutComp from "@/components/AboutComp/AboutComp";
import LatestProjects from "@/components/LatestProjects/LatestProjects";
import Layout from "@/components/Layout/Layout";
import ServiceComp from "@/components/ServiceComp/ServiceComp";
import HeroSlider from "@/components/Sliders/HeroSlider";
import WorkProcess from "@/components/WorkProcess/WorkProcess";
import React from "react";

const Home = () => {
    return (
        <Layout>
            <HeroSlider />
            <AboutComp />
            <LatestProjects />
            <ServiceComp />
            <WorkProcess />
        </Layout>
    );
};

export default Home;
