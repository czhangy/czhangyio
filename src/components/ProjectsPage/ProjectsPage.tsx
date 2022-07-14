// Stylesheet
import styles from "./ProjectsPage.module.scss";
// Components
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
// TS
import Project from "@/models/Project";

type Props = {
    projects: Project[];
};

const ProjectsPage: React.FC<Props> = ({ projects }: Props) => {
    return (
        <PageWrapper>
            <div className={styles.container}>
                {projects.map((project: Project, i: number) => {
                    return <ProjectCard project={project} key={i} />;
                })}
            </div>
        </PageWrapper>
    );
};

export default ProjectsPage;
