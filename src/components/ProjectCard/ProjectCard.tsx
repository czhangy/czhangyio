// Stylesheet
import styles from "./ProjectCard.module.scss";
// TS
import Project from "@/models/Project";
// Helper function
import { toSlug } from "@/utils/helpers";

type Props = {
    project: Project;
};

const ProjectCard: React.FC<Props> = ({ project }: Props) => {
    return (
        <div
            className={styles["project-card"]}
            style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/projects/${toSlug(
                    project.name
                )}/thumbnail.webp');`,
            }}
        >
            {project.name}
        </div>
    );
};

export default ProjectCard;
