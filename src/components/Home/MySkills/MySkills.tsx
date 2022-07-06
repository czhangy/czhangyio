// Stylesheet
import styles from "./MySkills.module.scss";
// React
import { useEffect, useState } from "react";
// Home component
import LearnMore from "@/components/Home/LearnMore";
// Helper function
import { showElements } from "@/utils/helpers";

const MySkills: React.FC = () => {
    // Component state
    const [show, setShow] = useState<boolean>(false);

    // Init scroll listener to watch scroll into view
    useEffect(() => {
        window.addEventListener("scroll", () =>
            showElements(styles["skills-header"], setShow)
        );
        return function cleanup() {
            window.removeEventListener("scroll", () =>
                showElements(styles["skills-header"], setShow)
            );
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
