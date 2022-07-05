// Stylesheet
import styles from "./LandingPage.module.scss";
// Next
import Image from "next/image";
// React
import { useEffect } from "react";

const LandingPage: React.FC = () => {
    // Animate page elements on mount
    useEffect(() => {
        const els: HTMLCollectionOf<Element> = document.getElementsByClassName(
            styles.hide
        );
        Array.from(els).forEach((el) => el.classList.add(styles.show));
    });

    return (
        <div id={styles["landing-page"]}>
            <div id={styles.headshot} className={styles.hide}>
                <Image
                    src="/assets/images/headshot.webp"
                    alt="Headshot"
                    layout="fill"
                    objectFit="contain"
                    priority={true}
                />
            </div>
            <h2 id={styles["landing-text"]} className={styles.hide}>
                Hi, I&apos;m Charles.
            </h2>
        </div>
    );
};

export default LandingPage;
