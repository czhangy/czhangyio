// Stylesheet
import styles from "./LandingPage.module.scss";
// Next
import Image from "next/image";
// React
import { useEffect, useState } from "react";

const LandingPage: React.FC = () => {
    // Component state
    const [show, setShow] = useState<boolean>(false);

    // Animate page elements on mount
    useEffect(() => setShow(true), []);

    return (
        <div className={styles["landing-page"]}>
            <div className={`${styles.headshot} ${show ? "show" : "hide"}`}>
                <Image
                    src="/assets/images/headshot.webp"
                    alt="Headshot"
                    layout="fill"
                    objectFit="contain"
                />
            </div>
            <h2
                className={`${styles["landing-text"]} ${
                    show ? "show" : "hide"
                }`}
            >
                Hi, I&apos;m Charles.
            </h2>
        </div>
    );
};

export default LandingPage;
