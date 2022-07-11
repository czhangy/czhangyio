// Stylesheet
import styles from "./AboutMe.module.scss";
// Next
import Image from "next/image";
// React
import { useEffect, useState } from "react";
// Helper function
import { showElements } from "@/utils/helpers";

const AboutMe: React.FC = () => {
    // Component state
    const [show, setShow] = useState<boolean>(false);

    // Init scroll listener to watch scroll into view
    useEffect(() => {
        window.addEventListener("scroll", () =>
            showElements("about-header", setShow)
        );
        return function cleanup() {
            window.removeEventListener("scroll", () =>
                showElements("about-header", setShow)
            );
        };
    }, []);

    return (
        <div className={styles["about-me"]}>
            <h2
                id="about-header"
                className={`${styles["about-header"]} ${
                    show ? "show" : "hide"
                }`}
            >
                About Me
            </h2>
            <div className={styles["about-container"]}>
                <div
                    className={`${styles["about-image"]} ${
                        show ? "show" : "hide"
                    }`}
                >
                    <Image
                        src="/assets/images/bitmoji.png"
                        alt=""
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <p
                    className={`${styles["about-paragraph"]} ${
                        show ? "show" : "hide"
                    }`}
                    data-testid="about-paragraph"
                >
                    Hey! I&apos;m Charles and I&apos;m a fourth-year Computer
                    Science major studying at UCLA. I&apos;m primarily
                    experienced in full-stack development, but I&apos;m open to
                    exploring whatever facets of CS are available to me.
                    I&apos;m currently working as a SWE intern with the COAF
                    Refinance team at Capital One for this summer, working in
                    full-stack development and machine learning. As I move on in
                    my career, I look forward to continuing to discover ways
                    that computer science can help make the world a better
                    place, and hope to put myself in a position to be a part of
                    that change.
                </p>
            </div>
        </div>
    );
};

export default AboutMe;
