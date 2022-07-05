// Stylesheet
import styles from "./MySkills.module.scss";
// React
import { useEffect } from "react";

const MySkills: React.FC = () => {
    // Show elements when scrolled into view
    const showSkills = () => {
        const els: HTMLCollectionOf<Element> = document.getElementsByClassName(
            styles.hide
        );
        const header: HTMLElement = document.getElementById(
            styles["skills-header"]
        )!;
        if (header.getBoundingClientRect().top < window.innerHeight - 350) {
            Array.from(els).forEach((el) => el.classList.add(styles.show));
            window.removeEventListener("scroll", showSkills);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", showSkills);
        return function cleanup() {
            window.removeEventListener("scroll", showSkills);
        };
    }, []);

    return (
        <div id={styles["my-skills"]}>
            <h2 id={styles["skills-header"]} className={styles.hide}>
                My Skills
            </h2>
        </div>
    );
};

export default MySkills;
