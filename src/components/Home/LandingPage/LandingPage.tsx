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
    useEffect(() => {
        setShow(true);
    }, []);

    return (
        <div id={styles["landing-page"]}>
            <div
                id={styles.headshot}
                className={show ? styles.show : styles.hide}
            >
                <Image
                    src="/assets/images/headshot.webp"
                    alt="Headshot"
                    layout="fill"
                    objectFit="contain"
                    priority={true}
                />
            </div>
            <h2
                id={styles["landing-text"]}
                className={show ? styles.show : styles.hide}
            >
                Hi, I&apos;m Charles.
            </h2>
        </div>
    );
};

export default LandingPage;
