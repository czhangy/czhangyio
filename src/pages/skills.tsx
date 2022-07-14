// TS
import type { NextPage } from "next";
import Skill from "@/models/Skill";
// Next
import Head from "next/head";
// Prisma
import prisma from "@/lib/prisma";

type Props = {
    skills: Skill[];
};

const Skills: NextPage<Props> = ({ skills }: Props) => {
    return (
        <div id={styles.home}>
            <Head>
                <title>My Skills | Charles Zhang</title>
            </Head>
            Skills
        </div>
    );
};

// Fetch projects from DB
export async function getStaticProps() {
    try {
        const skills: Skill[] | null = await prisma.skill.findMany({
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
