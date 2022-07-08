// TS
import type { NextPage } from "next";
import Project from "@/models/Project";
import Skill from "@/models/Skill";
import { PrismaPromise } from "@prisma/client";
// Next
import Head from "next/head";
// Stylesheet
import styles from "@/styles/pages/Home.module.scss";
// Local components
import LandingPage from "@/components/Home/LandingPage/LandingPage";
import AboutMe from "@/components/Home/AboutMe/AboutMe";
import MyProjects from "@/components/Home/MyProjects/MyProjects";
import MySkills from "@/components/Home/MySkills/MySkills";
// Prisma
import prisma from "@/lib/prisma";

type Props = {
    projects: Project[];
    skills: Skill[];
};

const Home: NextPage<Props> = ({ projects, skills }: Props) => {
    return (
        <div id={styles.home}>
            <Head>
                <title>Charles Zhang&apos;s Portfolio</title>
            </Head>
            <LandingPage />
            <AboutMe />
            <MyProjects projects={projects} />
            <MySkills skills={skills} />
        </div>
    );
};

// Fetch projects from DB
export async function getStaticProps() {
    try {
        const projectsPromise: PrismaPromise<Project[]> =
            prisma.project.findMany({
                take: 3,
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
        const skillsPromise: PrismaPromise<Skill[]> = prisma.skill.findMany({
            where: {
                proficiency: {
                    gt: 0,
                },
            },
            orderBy: {
                name: "asc",
            },
        });
        // Await repsonses
        const [projects, skills] = await Promise.all([
            projectsPromise,
            skillsPromise,
        ]);
        return {
            props: { projects, skills },
        };
    } catch (err) {
        console.log(err);
        return {
            props: {},
        };
    }
}

export default Home;
