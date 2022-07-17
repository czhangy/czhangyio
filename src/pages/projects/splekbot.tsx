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
    splekbot: Project;
};

const Splekbot: NextPage<Props> = ({ splekbot }: Props) => {
    const about = (
        <p>
            Splekbot was a game I helped develop with a small team as part of
            ACM Studio&apos;s Winter Showcase. The game was developed using the
            Unity Engine and C#, and centers around the game of Splek, a
            futuristic adaptation of tennis. The player plays as the main
            character, Zorb, who competes against the most elite Splek players
            from around the galaxy, attempting to reunite with his friends. To
            do so, the player must progress through the cosmos, battling with
            the unique skillsets of their opponents, and emerging as the Splek
            champion. This game is available for download on Windows, MacOS, and
            Linux.
        </p>
    );

    const features = (
        <p>
            The game&apos;s interface centers around a world map, where the
            player can select from 1 of 4 levels. Only 1 level is unlocked at
            first, but as the player completes each level, a new one will open.
            Each level presents a unique arena and opponent for the player to
            test their skills against in a game of Splek. In each match, the
            first to 5 points wins, and the player must win to proceed to the
            next step in their journey. Beaten levels can be replayed at any
            time. Each arena and opponent feature original assets, which help
            give the game a more distinct identity. In addition to the gameplay,
            a small storyline about Zorb&apos;s adventures accompanies the level
            progression in an effort to immerse the player in the world of
            Splek.
        </p>
    );

    const development = (
        <p>
            Project development started by breaking up into 3 teams – design,
            story, and mechanics – each working in Agile sprints. As a member of
            the mechanics team, I started off by working on collision detection
            between Zorb and the ball, which was handled by Unity tools and
            vector algebra. From there, I moved on to working on level creation
            using Unity ProBuilder 3D, which allowed us to generate simple Splek
            courts in which we could test our mechanics in 3-dimensional space.
            To wrap up the project, I took on the task of creating an overworld
            map, which handled all level locking/unlocking logic, level
            introductions for storyline purposes, and the interface through
            which the player could select the level they wanted to play.
            Overall, the development process lasted approximately 20 weeks.
        </p>
    );

    const reflection = (
        <p>
            In general, Splekbot was a great introduction in how to work with a
            team to complete a finished product. It was my first experience
            working in an Agile framework, and I feel that it significantly
            increased my productivity and overall contribution to the final
            result. The separation of responsibilities also seemed like a great
            way to modularize our progress, but the lack of formal communication
            channels made it challenging to get a big-picture idea of how the
            project was going. In terms of the technologies and development
            process, the most important thing Splekbot did for me was show me
            that game development isn&apos;t what I&apos;m really passionate
            about. My whole process seemed to consist of searching through
            pre-built technologies for something that fit my use case and
            inserting it into our codebase. Nothing seemed especially
            satisfying, and it was hard to feel any sense of ownership over my
            own contributions. Due to this, I feel that this project taught me a
            lot about what I like and don&apos;t like in development, and for
            that reason, I would say it was a great success for a first project.
        </p>
    );

    const imageURLs: string[] = [
        "/assets/projects/splekbot/thumbnail.webp",
        "/assets/projects/splekbot/gameplay_1.webp",
        "/assets/projects/splekbot/gameplay_2.webp",
    ];

    return (
        <div id="splekbot">
            <Head>
                <title>Splekbot | Charles Zhang</title>
            </Head>
            <ProjectOutline
                project={splekbot}
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
        const splekbot: Project | null = await prisma.project.findUnique({
            where: {
                name: "Splekbot",
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
            props: { splekbot },
        };
    } catch (err) {
        console.log(err);
        return {
            props: {},
        };
    }
}

export default Splekbot;
