// TS
import type { NextPage } from "next";
import Project from "@/models/Project";
// Next
import Head from "next/head";
// Stylesheet
import styles from "@/styles/Projects/Projects.module.scss";
// Prisma
import prisma from "@/lib/prisma";

type Props = {
    projects: Project[];
};

const Projects: NextPage<Props> = ({ projects }: Props) => {
    return (
        <div id={styles.home}>
            <Head>
                <title>My Projects | Charles Zhang</title>
            </Head>
            Projects
        </div>
    );
};

// Fetch projects from DB
export async function getStaticProps() {
    try {
        const projects: Project[] | null = await prisma.project.findMany({
            select: {
                id: true,
                gitLink: true,
                link: true,
                name: true,
                tags: true,
            },
            orderBy: {
                timestamp: "desc",
            },
        });
        return {
            props: { projects },
        };
    } catch (err) {
        console.log(err);
        return {
            props: {},
        };
    }
}

export default Projects;
