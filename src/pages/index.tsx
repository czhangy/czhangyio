// TS
import type { NextPage } from "next";
// Next
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// Stylesheet
import styles from "@/styles/Home/Home.module.scss";
// React
import { useEffect, useState } from "react";

const Home: NextPage = () => {
    // Component state
    const [show, setShow] = useState<boolean>(false);

    // Animate page elements on mount
    useEffect(() => setShow(true), []);

    return (
        <div id={styles.home}>
            <Head>
                <title>Charles Zhang&apos;s Portfolio</title>
            </Head>
            <div className={`${styles.headshot} ${show ? "show" : "from-top"}`}>
                <Image
                    src="/assets/images/headshot.webp"
                    alt="Headshot"
                    layout="fill"
                    objectFit="contain"
                />
            </div>
            <h2 className={show ? "show" : "from-bottom"}>
                Hi, I&apos;m Charles.
            </h2>
            <nav>
                <div>
                    <Link href="/about">
                        <a className={show ? "show" : "from-bottom"}>About</a>
                    </Link>
                    <Link href="/experience">
                        <a className={show ? "show" : "from-bottom"}>
                            Experience
                        </a>
                    </Link>
                </div>
                <div>
                    <Link href="/projects">
                        <a className={show ? "show" : "from-bottom"}>
                            Projects
                        </a>
                    </Link>
                    <Link href="/skills">
                        <a className={show ? "show" : "from-bottom"}>Skills</a>
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Home;
