// TS
import type { NextPage } from "next";
import Project from "@/models/Project";
// Next
import Head from "next/head";
// Prisma
import prisma from "@/lib/prisma";
// Component
import ProjectsPage from "@/components/ProjectsPage/ProjectsPage";

type Props = {
    projects: Project[];
};

const Projects: NextPage<Props> = ({ projects }: Props) => {
    return (
        <div id="projects">
            <Head>
                <title>My Projects | Charles Zhang</title>
            </Head>
            <ProjectsPage projects={projects} />
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
