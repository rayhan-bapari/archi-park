import AboutComp from "@/components/AboutComp/AboutComp";
import Counter from "@/components/Counter/Counter";
import LatestProjects from "@/components/LatestProjects/LatestProjects";
import Layout from "@/components/Layout/Layout";
import ServiceComp from "@/components/ServiceComp/ServiceComp";
import HeroSlider from "@/components/Sliders/HeroSlider";
import TeamComp from "@/components/TeamComp/TeamComp";
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
            <Counter />
            <TeamComp />
        </Layout>
    );
};

export default Home;
