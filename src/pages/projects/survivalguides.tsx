// TS
import { NextPage } from "next";
import Project from "@/models/Project";
// Prisma
import prisma from "@/lib/prisma";
// Next
import Head from "next/head";
// Component
import ProjectOutline from "@/components/ProjectOutline/ProjectOutline";

type Props = {
    survivalGuides: Project;
};

const SurvivalGuides: NextPage<Props> = ({ survivalGuides }: Props) => {
    const about = (
        <p>
            The Survival Guides were designed to be a tool for UCLA students to
            use to help them with their coursework. They focused on presenting
            the course material in a way that was digestable and accessible to
            as many people as possible. In addition to the material itself, the
            guides made made an attempt to offer more detailed descriptions of
            the professors&apos; teaching style, how best to navigate
            assignments, and time management policies that worked well for me.
            All in all, the primary intent of these guides was to condense my
            experience in the course into a relatively short, holistic guide
            that could help others succeed.
        </p>
    );

    const features = (
        <p>
            The Survival Guides currently include 6 courses: CS 33, CS M51A, CS
            131, CS 180, MATH 61, and PHYS 1C. Each guide follows a uniform
            design which is meant to be simple, and easy to follow. They all
            begin with a table of contents, showing how I split each course up
            into units and sections, and allowing users to jump to a specific
            section by clicking on it. These breakdowns tend to mimic the
            professor&apos;s progression through the course, but with some minor
            changes that I felt made the content flow better. Each unit has a
            high-level introduction into what to expect, which is then followed
            by sections containing paragraphs of content, as well as handmade
            assets and diagrams that I use to try and get my point across
            better. Finally, a few of the guides contain practice questions and
            solutions that are designed to help users prepare for exams.
        </p>
    );

    const development = (
        <p>
            Unlike my other projects, this project&apos;s development was almost
            solely focused on writing the content of each guide. Very little
            went into the development of the actual site, just some general
            routing logic and styling. As I took each course, I would write
            section drafts after each lecture, correcting and re-organizing them
            later to improve the flow of the content. At the end of the course,
            I then grouped these sections into units and revised the entire
            guide. Finally, I would write my introduction and afterword after
            the course was completed, and publish it to the site. Overall, the
            process took around ~50 hours for each course.
        </p>
    );

    const reflection = (
        <p>
            This project was my first taste in trying to help out my local
            commmunity. It began in my freshman year, before I really had any
            technical skills, which is why I choose to think of it as an
            academic pursuit, not a computer science one. I tutored a lot in
            high school, and had been helping peers using less structured
            versions of these guides, so I figured that expanding upon them and
            putting them in a centralized place could be useful to others. In
            addition to helping out others, I found that these guides actually
            really helped me drill down the material I was writing about,
            reinforcing what I was learning. While I was writing them, they
            ended up becoming my primary method for studying, and the results
            didn&apos;t disappoint. However, as I gained more and more technical
            skills and started working with web development, I found writing
            them to just be too burdensome in the end. Although they did benefit
            both me and those that used them, I just couldn&apos;t justify the
            time sink they&apos;d become, so I retired the project after 3
            quarters.
        </p>
    );

    const imageURLs: string[] = [
        "/assets/projects/survivalguides/thumbnail.webp",
        "/assets/projects/survivalguides/courses.webp",
        "/assets/projects/survivalguides/tbc.webp",
        "/assets/projects/survivalguides/unification.webp",
        "/assets/projects/survivalguides/scattering.webp",
    ];

    return (
        <div id="survival-guides">
            <Head>
                <title>Survival Guides | Charles Zhang</title>
            </Head>
            <ProjectOutline
                project={survivalGuides}
                about={about}
                features={features}
                development={development}
                reflection={reflection}
                imageURLs={imageURLs}
            />
        </div>
    );
};

// Fetch projects from DB
export async function getStaticProps() {
    try {
        const survivalGuides: Project | null = await prisma.project.findUnique({
            where: {
                name: "Survival Guides",
            },
            select: {
                id: true,
                gitLink: true,
                link: true,
                name: true,
                tags: true,
            },
        });
        return {
            props: { survivalGuides },
        };
    } catch (err) {
        console.log(err);
        return {
            props: {},
        };
    }
}

export default SurvivalGuides;
