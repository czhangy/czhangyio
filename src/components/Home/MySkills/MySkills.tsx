// Stylesheet
import styles from "./MySkills.module.scss";
// React
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
// Home component
import SeeMore from "@/components/Home/SeeMore";
// Helper function
import { showElements } from "@/utils/helpers";
// Local component
import SkillCarousel from "./components/SkillCarousel";

const MySkills: React.FC = () => {
    // Hook => check screen size
    const isDesktop = useMediaQuery({ query: `(min-width: 1023px)` });

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
            showElements("skills-header", setShow)
        );
        return function cleanup() {
            window.removeEventListener("scroll", () =>
                showElements("skills-header", setShow)
            );
        };
    }, []);

    return (
        <div className={styles["my-skills"]}>
            <h2
                id="skills-header"
                className={`${styles["skills-header"]} ${
                    show ? "show" : "hide"
                }`}
            >
                My Skills
            </h2>
            <div
                className={`${styles["skill-content"]} ${
                    show ? "show" : "hide"
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
                        viewport={isDesktop ? 5 : 3}
                    />
                </div>
            </div>
            <SeeMore show={show} url="skills" />
        </div>
    );
};

export default MySkills;
