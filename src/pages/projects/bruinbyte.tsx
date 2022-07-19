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
    bruinbyte: Project;
};

const BruinByte: NextPage<Props> = ({ bruinbyte }: Props) => {
    const about = (
        <p>
            BruinByte is a food review platform designed for Westwood residents.
            The main goal of the application was to provide a more targeted food
            review experience than general platforms like Yelp!. By refining the
            target audience, we hoped to provide a more accurate user
            experience, with more relevant options being highlighted. This
            project was developed by a team as part of a final project for CS
            97: Software Construction.
        </p>
    );

    const features = (
        <p>
            BruinByte revolves around a page where users can check out local
            restaurants to the Westwood area. Each restaurant page has a link to
            their main site (if it exists), GrubHub/DoorDash/Uber Eats links,
            contact info, address, map location, and user-submitted reviews. To
            enable this review system, we also integrated user auth through
            Auth0 and profiles for users to customize using a profile page,
            private to each user. In addition to written reviews, users would
            also be prompted to provide a star rating, providing a quick
            overview of a restaurant&apos;s rating.
        </p>
    );

    const development = (
        <p>
            This project&apos;s development started off with research into the
            tools we would be using. This meant looking into React.js, Firebase,
            and Node.js, specifically. From there, we split our team into 2
            groups: frontend and backend. As part of the frontend team, I worked
            on building components using MaterialUI, including the landing page,
            restaurant cards, restaurant modals, and the profile page. Due to
            the nature of the project, the primary focus during this development
            was completion, so a lot of best practices were ignored. After the
            UI was built, I pivoted to integrating Auth0 with our application
            and making all the necessary changes to add auth into the
            application&apos;s flow. Finally, I finished things up by gathering
            static data for each restaurant and assisting the backend team in
            their integration with the frontend.
        </p>
    );

    const reflection = (
        <p>
            This project was my team&apos;s first introduction into web
            development, and, as to be expected, things were pretty rocky.
            Varying levels of interest in the subject matter made a lot of the
            work distribution unbalanced, resulting in a significant hit to team
            morale. In addition, a lack of experience with the tools we were
            using led to a lot of wasted energy, such as researching Node.js
            when the main draw of Firebase is its serverless nature, or the use
            of Auth0 despite Firebase having user authentication out of the box.
            The application itself is also hacked together, with 0 consideration
            for responsiveness, many unsolved bugs, and a massive amount of
            bloat in the form of uneccessary files. Despite all of these
            obstacles, this project was a great introduction into the world of
            full-stack development, and catapulted my technical abilities to a
            level where I could make more complex apps. In turn, this enabled me
            to expand my horizons in terms of how I approached trying to help my
            local communities.
        </p>
    );

    const imageURLs: string[] = [
        "/assets/projects/bruinbyte/thumbnail.webp",
        "/assets/projects/bruinbyte/cards.webp",
        "/assets/projects/bruinbyte/modal.webp",
        "/assets/projects/bruinbyte/reviews.webp",
        "/assets/projects/bruinbyte/auth.webp",
    ];

    return (
        <div id="splekbot">
            <Head>
                <title>BruinByte | Charles Zhang</title>
            </Head>
            <ProjectOutline
                project={bruinbyte}
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
        const bruinbyte: Project | null = await prisma.project.findUnique({
            where: {
                name: "BruinByte",
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
            props: { bruinbyte },
        };
    } catch (err) {
        console.log(err);
        return {
            props: {},
        };
    }
}

export default BruinByte;
