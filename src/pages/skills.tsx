// TS
import type { NextPage } from "next";
import Skill from "@/models/Skill";
// Next
import Head from "next/head";
// Prisma
import prisma from "@/lib/prisma";
// Component
import SkillsPage from "@/components/SkillsPage/SkillsPage";

type Props = {
    skills: Skill[];
};

const Skills: NextPage<Props> = ({ skills }: Props) => {
    return (
        <div id="skills">
            <Head>
                <title>My Skills | Charles Zhang</title>
            </Head>
            <SkillsPage skills={skills} />
        </div>
    );
};

// Fetch projects from DB
export async function getStaticProps() {
    try {
        const skills: Skill[] | null = await prisma.skill.findMany({
            where: {
                proficiency: {
                    gt: 0,
                },
            },
            orderBy: {
                name: "asc",
            },
        });
        return {
            props: { skills },
        };
    } catch (err) {
        console.log(err);
        return {
            props: {},
        };
    }
}

export default Skills;
