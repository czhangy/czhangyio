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
    // Component state
    const [show, setShow] = useState<boolean>(false);

    // Init scroll listener to watch scroll into view
    useEffect(() => {
        window.addEventListener("scroll", () =>
            showElements("project-header", setShow)
        );
        return function cleanup() {
            window.removeEventListener("scroll", () =>
                showElements("project-header", setShow)
            );
        };
    }, []);

    return (
        <div className={styles["my-projects"]}>
            <h2
                id="project-header"
                className={`${styles["project-header"]} ${
                    show ? "show" : "hide"
                }`}
            >
                My Projects
            </h2>
            {projects?.length >= 3 ? (
                <div
                    className={`${styles["project-container"]} ${
                        show ? "show" : "hide"
                    }`}
                >
                    <ProjectCard project={projects[0]} />
                    <ProjectCard project={projects[1]} />
                    <ProjectCard project={projects[2]} />
                </div>
            ) : (
                ""
            )}
            <SeeMore show={show} url="projects" />
        </div>
    );
};

export default MyProjects;
