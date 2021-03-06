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
        <div className={styles["project-card"]}>
            <Link href={`/projects/${toSlug(project.name)}`}>
                <a className={styles.bg}>
                    <Image
                        src={`/assets/projects/${toSlug(
                            project.name
                        )}/thumbnail.webp`}
                        alt={`${project.name} thumbnail`}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="top"
                    ></Image>
                </a>
            </Link>
            <h2 className={`${styles.ribbon} ${styles.top}`}>{project.name}</h2>
            <div className={`${styles.ribbon} ${styles.bottom}`}>
                {project.gitLink ? (
                    <a
                        href={project.gitLink}
                        target="_blank"
                        rel="noreferrer"
                        className={styles["link-icon"]}
                    >
                        <Image
                            src="/assets/icons/github.svg"
                            alt="GitHub link"
                            layout="fill"
                            objectFit="contain"
                        />
                    </a>
                ) : (
                    ""
                )}
                <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className={styles["link-icon"]}
                >
                    <Image
                        src="/assets/icons/link.svg"
                        alt="Site link"
                        layout="fill"
                        objectFit="contain"
                    />
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
