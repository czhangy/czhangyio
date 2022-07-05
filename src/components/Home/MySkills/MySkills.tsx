// Stylesheet
import styles from "./MySkills.module.scss";
// React
import { useEffect, useState } from "react";
// Home component
import LearnMore from "@/components/Home/LearnMore";

const MySkills: React.FC = () => {
    // Component state
    const [show, setShow] = useState<boolean>(false);

    // Show elements when scrolled into view
    const showSkills = () => {
        const header: HTMLElement = document.getElementById(
            styles["skills-header"]
        )!;
        if (header.getBoundingClientRect().top < window.innerHeight - 350) {
            setShow(true);
            window.removeEventListener("scroll", showSkills);
        }
    };

    // Init scroll listener to watch scroll into view
    useEffect(() => {
        window.addEventListener("scroll", showSkills);
        return function cleanup() {
            window.removeEventListener("scroll", showSkills);
        };
    }, []);

    return (
        <div id={styles["my-skills"]}>
            <h2
                id={styles["skills-header"]}
                className={show ? styles.show : styles.hide}
            >
                My Skills
            </h2>
            <LearnMore show={show} url="skills" />
        </div>
    );
};

export default MySkills;
