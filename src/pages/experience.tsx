// TS
import type { NextPage } from "next";
import Experience from "@/models/Experience";
// Next
import Head from "next/head";
// Stylesheet
import styles from "@/styles/Experience/Experience.module.scss";
// Prisma
import prisma from "@/lib/prisma";

type Props = {
    experience: Experience[];
};

const Experience: NextPage<Props> = ({ experience }: Props) => {
    return (
        <div id={styles.home}>
            <Head>
                <title>My Experience | Charles Zhang</title>
            </Head>
            Experience
        </div>
    );
};

// Fetch projects from DB
export async function getStaticProps() {
    try {
        const experience: Experience[] | null =
            await prisma.experience.findMany({
                select: {
                    id: true,
                    endDate: true,
                    jobTitle: true,
                    name: true,
                    points: true,
                    startDate: true,
                },
                orderBy: {
                    timestamp: "desc",
                },
            });
        return {
            props: { experience },
        };
    } catch (err) {
        console.log(err);
        return {
            props: {},
        };
    }
}

export default Experience;
