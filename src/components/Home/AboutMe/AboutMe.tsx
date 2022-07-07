// Stylesheet
import styles from "./AboutMe.module.scss";
// Next
import Image from "next/image";
// React
import { useEffect, useState } from "react";
// Home component
import SeeMore from "@/components/Home/SeeMore";
// Helper function
import { showElements } from "@/utils/helpers";

const AboutMe: React.FC = () => {
    // Component state
    const [show, setShow] = useState<boolean>(false);

    // Init scroll listener to watch scroll into view
    useEffect(() => {
        window.addEventListener("scroll", () =>
            showElements(styles["about-header"], setShow)
        );
        return function cleanup() {
            window.removeEventListener("scroll", () =>
                showElements(styles["about-header"], setShow)
            );
        };
    }, []);

    return (
        <div id={styles["about-me"]}>
            <h2
                id={styles["about-header"]}
                className={show ? styles.show : styles.hide}
            >
                About Me
            </h2>
            <div id={styles["about-container"]}>
                <div
                    id={styles["about-image"]}
                    className={show ? styles.show : styles.hide}
                >
                    <Image
                        src="/assets/images/bitmoji.png"
                        alt=""
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <p
                    id={styles["about-paragraph"]}
                    className={show ? styles.show : styles.hide}
                    data-testid="about-paragraph"
                >
                    Hey! I'm Charles and I'm a fourth-year Computer Science
                    major studying at UCLA. I'm primarily experienced in
                    full-stack development, but I'm open to exploring whatever
                    facets of CS are available to me. I'm currently working as a
                    SWE intern with the COAF Refinance team at Capital One for
                    this summer, working in full-stack development and machine
                    learning. As I move on in my career, I look forward to
                    continuing to discover ways that computer science can help
                    make the world a better place, and hope to put myself in a
                    position to be a part of that change.
                </p>
            </div>
            <SeeMore show={show} url="about" />
        </div>
    );
};

export default AboutMe;