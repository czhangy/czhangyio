// TS
import type { NextPage } from "next";
// Next
import Head from "next/head";
// Component
import AboutPage from "@/components/AboutPage/AboutPage";

const About: NextPage = () => {
    return (
        <div id="about">
            <Head>
                <title>About Me | Charles Zhang</title>
            </Head>
            <AboutPage />
        </div>
    );
};

export default About;
