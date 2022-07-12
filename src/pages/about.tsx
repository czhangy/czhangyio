// TS
import type { NextPage } from "next";
// Next
import Head from "next/head";
// Stylesheet
import styles from "@/styles/About/About.module.scss";
// Local components

const About: NextPage = () => {
    return (
        <div id={styles.about}>
            <Head>
                <title>About Me | Charles Zhang</title>
            </Head>
            About Me
        </div>
    );
};

export default About;
