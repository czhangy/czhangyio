// TS
import type { NextPage } from "next";
// Next
import Head from "next/head";
// Components
import HomePage from "@/components/HomePage/HomePage";

const Home: NextPage = () => {
    return (
        <div id="home">
            <Head>
                <title>Charles Zhang&apos;s Portfolio</title>
            </Head>
            <HomePage />
        </div>
    );
};

export default Home;
