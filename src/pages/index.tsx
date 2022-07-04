// TS
import type { NextPage } from "next";
// Next
import Head from "next/head";
// Stylesheet
import styles from "@/styles/Home/Home.module.scss";
// Local components
import LandingPage from "@/components/Home/LandingPage/LandingPage";

const Home: NextPage = () => {
    return (
        <div id={styles.home}>
            <Head>
                <title>Charles Zhang&apos;s Portfolio</title>
            </Head>
            <LandingPage />
        </div>
    );
};

export default Home;
