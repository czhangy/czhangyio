// Stylesheet
import styles from "@/styles/Home/LandingPage.module.scss";
// Next
import Image from "next/image";

const LandingPage: React.FC = () => {
    return (
        <div id={styles["landing-page"]}>
            <div id={styles.headshot}>
                <Image
                    src="/assets/images/headshot.webp"
                    alt="Headshot"
                    layout="fill"
                    objectFit="contain"
                />
            </div>
            <h2 id={styles["landing-text"]}>Hi, I&apos;m Charles.</h2>
        </div>
    );
};

export default LandingPage;
