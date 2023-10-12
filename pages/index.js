import AboutComp from "@/components/AboutComp/AboutComp";
import Counter from "@/components/Counter/Counter";
import LatestProjects from "@/components/LatestProjects/LatestProjects";
import Layout from "@/components/Layout/Layout";
import ServiceComp from "@/components/ServiceComp/ServiceComp";
import HeroSlider from "@/components/Sliders/HeroSlider";
import TeamComp from "@/components/TeamComp/TeamComp";
import Testimonial from "@/components/Testimonial/Testimonial";
import WorkProcess from "@/components/WorkProcess/WorkProcess";
import Head from "next/head";
import React from "react";

const Home = () => {
    return (
        <>
            <Head>
                <title>Home - Archipark</title>
                <meta
                    name="description"
                    content="Archipark is a leading architecture and design studio that focuses on creating beautiful and functional spaces for people to live and work in."
                />
                <meta
                    name="keywords"
                    content="Archipark, architecture, design, studio, interior, exterior, building, construction, renovation, residential, commercial, industrial, landscaping, planning, development, urban, architecture studio, design studio, interior design, exterior design, building construction, renovation, residential design, commercial design, industrial design, landscaping design, planning, development, urban design"
                />
                <meta name="author" content="Archipark" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <HeroSlider />
                <AboutComp />
                <LatestProjects />
                <ServiceComp />
                <WorkProcess />
                <Counter />
                <TeamComp />
                <Testimonial />
            </Layout>
        </>
    );
};

export default Home;
