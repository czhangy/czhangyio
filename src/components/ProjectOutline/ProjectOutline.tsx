// Stylesheet
import styles from "./ProjectOutline.module.scss";
// TS
import { NextPage } from "next";
import Project from "@/models/Project";
import { ReactNode } from "react";
// Components
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import ProjectHeader from "@/components/ProjectHeader/ProjectHeader";
import ProjectTags from "@/components/ProjectTags/ProjectTags";
import ProjectCarousel from "@/components/ProjectCarousel/ProjectCarousel";

type Props = {
    project: Project;
    about: ReactNode;
    features: ReactNode;
    development: ReactNode;
    reflection: ReactNode;
    imageURLs: string[];
};

const ProjectOutline: NextPage<Props> = (props: Props) => {
    return (
        <PageWrapper>
            <ProjectHeader project={props.project} />
            <hr className={styles.separator} />
            <div className={styles.section}>
                <h4>About the Project</h4>
                {props.about}
            </div>
            <div className={styles.section}>
                <h4>Tools</h4>
                <ProjectTags tags={props.project.tags} />
            </div>
            <div className={styles.section}>
                <h4>Features</h4>
                {props.features}
            </div>
            <div className={styles.section}>
                <h4>Development</h4>
                {props.development}
            </div>
            <div className={styles.section}>
                <h4>Reflection</h4>
                {props.reflection}
            </div>
            <div className={styles.section}>
                <h4>Gallery</h4>
                <ProjectCarousel imageURLs={props.imageURLs} />
            </div>
        </PageWrapper>
    );
};

export default ProjectOutline;
