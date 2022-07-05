// Stylesheet
import styles from "./AboutPage.module.scss";
// Next
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
    return (
        <div id={styles["about-page"]}>
            <h2 id={styles["about-header"]}>About Me</h2>
            <div id={styles["about-container"]}>
                <div id={styles["about-image"]}>
                    <Image
                        src="/assets/images/bitmoji.png"
                        alt=""
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <p id={styles["about-paragraph"]} data-testid="about-paragraph">
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
            <div id={styles["link-container"]}>
                <Link href="/about">
                    <a id={styles["about-link"]}>Learn More →</a>
                </Link>
            </div>
        </div>
    );
};

export default AboutPage;
