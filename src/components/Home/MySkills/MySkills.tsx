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
// TS
import Skill from "@/models/Skill";

type Props = {
    skills: Skill[];
};

const MySkills: React.FC<Props> = ({ skills }: Props) => {
    // Hook => check screen size
    const isDesktop = useMediaQuery({ query: `(min-width: 1023px)` });

    // Constants
    const smallViewport = 3;
    const largeViewport = 5;

    // Component state
    const [show, setShow] = useState<boolean>(false);
    const [mainViewportSize, setMainViewportSize] =
        useState<number>(smallViewport);
    const [languageNames, setLanguageNames] = useState<string[]>([]);
    const [fullStackNames, setFullStackNames] = useState<string[]>([]);
    const [otherNames, setOtherNames] = useState<string[]>([]);

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

    // Separate skills into different categories
    useEffect(() => {
        if (skills) {
            // Separate
            const languageSkills = skills.filter(
                (skill) => skill.category === "language"
            );
            const fullStackSkills = skills.filter(
                (skill) => skill.category === "full-stack"
            );
            const otherSkills = skills.filter(
                (skill) => skill.category === null
            );
            // Get names
            setLanguageNames(languageSkills.map((skill) => skill.name));
            setFullStackNames(fullStackSkills.map((skill) => skill.name));
            setOtherNames(otherSkills.map((skill) => skill.name));
        }
    }, [skills]);

    // Change main viewport size based on screen width
    useEffect(() => {
        setMainViewportSize(isDesktop ? largeViewport : smallViewport);
    }, [isDesktop]);

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
                        skills={languageNames}
                        viewport={smallViewport}
                    />
                    <SkillCarousel
                        groupName="Full-Stack Development"
                        skills={fullStackNames}
                        viewport={smallViewport}
                    />
                </div>
                <div className={`${styles["skill-row"]} ${styles.center}`}>
                    <SkillCarousel
                        groupName="Software Tools"
                        skills={otherNames}
                        viewport={mainViewportSize}
                    />
                </div>
            </div>
            <SeeMore show={show} url="skills" />
        </div>
    );
};

export default MySkills;
