// TS
import type { NextPage } from "next";
// Next
import Head from "next/head";
// Stylesheet
import styles from "@/styles/pages/Home.module.scss";
// Local components
import LandingPage from "@/components/Home/LandingPage/LandingPage";
import AboutMe from "@/components/Home/AboutMe/AboutMe";
import MySkills from "@/components/Home/MySkills/MySkills";

const Home: NextPage = () => {
    return (
        <div id={styles.home}>
            <Head>
                <title>Charles Zhang&apos;s Portfolio</title>
            </Head>
            <LandingPage />
            <AboutMe />
            <MySkills />
        </div>
    );
};

export default Home;
