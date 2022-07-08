// Stylesheet
import styles from "../MyProjects.module.scss";
// TS
import Project from "@/models/Project";
// Next
import Link from "next/link";

type Props = {
    project: Project;
};

const ProjectCard: React.FC<Props> = ({ project }: Props) => {
    return (
        <Link href="/" target="_blank">
            <a className={styles["project-card"]}>
                <h4 className={styles["project-name"]}>Hey</h4>
            </a>
        </Link>
    );
};

export default ProjectCard;
