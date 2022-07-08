// Stylesheet
import styles from "./MyProjects.module.scss";
// React
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
// Helper function
import { showElements } from "@/utils/helpers";
// Home component
import SeeMore from "@/components/Home/SeeMore";
// Local components
import ProjectCard from "./components/ProjectCard";
// TS
import Project from "@/models/Project";

type Props = {
    projects: Project[];
};

const MyProjects: React.FC<Props> = ({ projects }: Props) => {
    // Hook => check screen size
    const isDesktop = useMediaQuery({ query: `(min-width: 1023px)` });

    // Component state
    const [show, setShow] = useState<boolean>(false);
    const [largeDisplay, setLargeDisplay] = useState<boolean>(false);

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

    // Set large display as state on hook change => solves hydration
    useEffect(() => {
        setLargeDisplay(isDesktop);
    }, [isDesktop]);

    return (
        <div className={styles["my-projects"]}>
            <h2
                id="skills-header"
                className={`${styles["project-header"]} ${
                    show ? "show" : "hide"
                }`}
            >
                My Projects
            </h2>
            <div className={styles["project-container"]}>
                <ProjectCard />
                {largeDisplay ? <ProjectCard /> : ""}
            </div>
            <SeeMore show={show} url="projects" />
        </div>
    );
};

export default MyProjects;
