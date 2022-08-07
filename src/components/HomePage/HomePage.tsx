// Stylesheet
import styles from "./HomePage.module.scss";
// Next
import Image from "next/image";
import Link from "next/link";
// React
import { useEffect, useState } from "react";
// Components
import PageWrapper from "@/components/PageWrapper/PageWrapper";

const HomePage: React.FC = () => {
    // Component state
    const [show, setShow] = useState<boolean>(false);

    // Animate page elements on mount
    useEffect(() => setShow(true), []);

    return (
        <PageWrapper>
            <div className={`${styles.headshot} ${show ? "show" : "from-top"}`}>
                <Image
                    src="/assets/home/headshot.webp"
                    alt="Headshot"
                    layout="fill"
                    objectFit="contain"
                />
            </div>
            <h2
                className={`${styles["landing-text"]} ${
                    show ? "show" : "from-bottom"
                }`}
            >
                Hi, I&apos;m Charles.
            </h2>
            <nav
                className={`${styles["nav-links"]} ${
                    show ? "show" : "from-bottom"
                }`}
            >
                <div>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                    <Link href="/experience">
                        <a>Experience</a>
                    </Link>
                </div>
                <div>
                    <Link href="/projects">
                        <a>Projects</a>
                    </Link>
                    {/* <Link href="/skills">
                        <a>Skills</a>
                    </Link> */}
                </div>
            </nav>
        </PageWrapper>
    );
};

export default HomePage;
