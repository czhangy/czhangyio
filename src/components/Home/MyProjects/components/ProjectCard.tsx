// Stylesheet
import styles from "../MyProjects.module.scss";
// TS
import Project from "@/models/Project";
import Skill from "@/models/Skill";
// Helper function
import { toSlug } from "@/utils/helpers";
// Local component
import ProjectTag from "./ProjectTag";
// Next
import Link from "next/link";

type Props = {
    project: Project;
};

const ProjectCard: React.FC<Props> = ({ project }: Props) => {
    return (
        <Link href="/">
            <a
                className={styles["project-card"]}
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/assets/projects/${toSlug(
                        project.name
                    )}/thumbnail.jpeg')`,
                }}
            >
                <h4 className={styles["project-name"]}>{project.name}</h4>
                <hr />
                <div className={styles["project-tags"]}>
                    {project.tags!.map((tag: Skill, i: number) => {
                        return (
                            <ProjectTag
                                hex={tag.mainHex}
                                tag={tag.name}
                                key={i}
                            />
                        );
                    })}
                </div>
            </a>
        </Link>
    );
};

export default ProjectCard;
