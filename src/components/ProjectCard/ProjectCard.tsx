// Stylesheet
import styles from "./ProjectCard.module.scss";
// TS
import Project from "@/models/Project";
// Helper function
import { toSlug } from "@/utils/helpers";
// Next
import Image from "next/image";
import Link from "next/link";

type Props = {
    project: Project;
};

const ProjectCard: React.FC<Props> = ({ project }: Props) => {
    return (
        <div
            className={styles["project-card"]}
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/projects/${toSlug(
                    project.name
                )}/thumbnail.webp')`,
            }}
        >
            <div className={`${styles.ribbon} ${styles.top}`}>
                {project.name}
            </div>
            <div className={`${styles.ribbon} ${styles.bottom}`}>
                {project.gitLink ? (
                    <Link href={project.gitLink} target="_blank">
                        <a className={styles["link-icon"]}>
                            <Image
                                src="/assets/icons/github.svg"
                                alt="GitHub link"
                                layout="fill"
                                objectFit="contain"
                            />
                        </a>
                    </Link>
                ) : (
                    ""
                )}
                <Link href={project.link} target="_blank">
                    <a className={styles["link-icon"]}>
                        <Image
                            src="/assets/icons/link.svg"
                            alt="Site link"
                            layout="fill"
                            objectFit="contain"
                        />
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;
