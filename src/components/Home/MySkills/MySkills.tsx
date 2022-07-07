// Stylesheet
import styles from "./MySkills.module.scss";
// React
import { useEffect, useState } from "react";
// Home component
import SeeMore from "@/components/Home/SeeMore";
// Helper function
import { showElements } from "@/utils/helpers";
// Local component
import SkillCarousel from "./components/SkillCarousel";

const MySkills: React.FC = () => {
    // Component state
    const [show, setShow] = useState<boolean>(false);

    // Constant
    const skillMap: { [key: string]: string[] } = {
        Languages: ["C++", "HTML/CSS", "JavaScript", "SASS", "TypeScript"],
        "Full-Stack Development": [
            "ExpressJS",
            "NextJS",
            "NodeJS",
            "ReactJS",
            "VueJS",
        ],
        "Software Tools": [
            "Git",
            "Heroku",
            "Jest",
            "Jira",
            "MongoDB",
            "MySQL",
            "Prisma",
            "Testing Library",
            "UNIX",
            "Vercel",
        ],
    };

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
            <div
                className={`${styles["skill-content"]} ${
                    show ? styles.show : styles.hide
                }`}
            >
                <div className={styles["skill-row"]}>
                    <SkillCarousel
                        groupName="Languages"
                        skills={skillMap["Languages"]}
                        viewport={3}
                    />
                    <SkillCarousel
                        groupName="Full-Stack Development"
                        skills={skillMap["Full-Stack Development"]}
                        viewport={3}
                    />
                </div>
                <div className={styles["skill-row"]}>
                    <SkillCarousel
                        groupName="Software Tools"
                        skills={skillMap["Software Tools"]}
                        viewport={3}
                    />
                </div>
            </div>
            <SeeMore show={show} url="skills" />
        </div>
    );
};

export default MySkills;
