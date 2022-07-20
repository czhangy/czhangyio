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
    minroll: Project;
};

const Minroll: NextPage<Props> = ({ minroll }: Props) => {
    const about = (
        <p>
            Minroll is designed to be a all-in-one application for the Diablo
            III community. The app is based on the popular MMORPG hub Maxroll.
            The goals set in mind for its development were twofold: to create a
            more minimalistic platform that focuses on providing utility over
            all else, and to gear said platform towards the lesser-supported
            console community. The utility that this app provides is targeted
            towards players looking to push console leaderboards, ignoring other
            aspects of the game in favor of providing a more relevant experience
            to that playerbase.
        </p>
    );

    const features = (
        <>
            <p>
                Minroll&apos;s primary feature is the ability to plan builds
                using a build planner that supports all classes, items, gems,
                cube slots, skills, passives, etc. in the game. While
                build-planning, the user has access to the effects of all
                items/skills to assist them, accessible in the build sheet that
                visualizes the build. The user can then save this build, which
                can then later be accessed/edited from their user profile.
            </p>
            <p>
                To support the planner, Minroll offers a page featuring official
                builds and a page with an official build tier list. These pages
                provide META builds and guides to players to help them push
                leaderboards more effectively and serve as a base for
                theorycrafters. Currently, an official build + guide exists for
                each set in the game, along with the top LoD build for each
                class.
            </p>
            <p>
                Finally to enable CRUD operations in the app, Minroll supports a
                user system that allows users to save/edit/delete builds. Users
                are private, as are the builds they create. To improve the user
                experience, builds are also saved within local storage by user
                so that users can leave and return to the page, without having
                to restart.
            </p>
        </>
    );

    const development = (
        <>
            <p>
                After collecting all the necessary data to start, I decided to
                start development by implementing auth in the application. I
                settled on using React Context to store auth state and allow
                users to sign in through dedicated auth routes. By starting with
                auth, I felt it would be easier to implement/test CRUD
                operations later on if I could save them with my profile.
            </p>
            <p>
                Once that was complete, I moved on to the meat of the
                application: the build planner. Most of the work here was
                handling edge cases and fetching data from the DB. I created the
                build sheet first, making sure that when items were assigned to
                slots, they could be hovered to view item data. I then moved on
                to the gear page, making sure to filter items by class so that
                no illegal builds could be created. I was then able to do
                similar things for the gems and cube. For skills and passives, I
                decided that using the Diablo III community API was more
                appropriate than building my own, so once that was hooked in to
                the app, the implementation was fairly straightforward. Then, I
                added some minor functionality to everything, such as the
                ability to reset the build and the ability to reset a specific
                field. Finally, I created the POST route needed to save the
                build and added support for local storage so that builds could
                persist.
            </p>
            <p>
                Next, I worked on the individual build pages. These pages can be
                accessed by appending a valid build ID to the /projects route or
                by clicking on the build in the user profile. Once routing was
                set up, I enabled read-only functionality on the build sheet,
                and followed a similar design to the planner page. Finally, to
                encourage users to build off of existing builds, I made it
                possible to copy a build into the planner, so that they can
                start from a template when planning.
            </p>
            <p>
                Then, I took on the profile page, adding a list of the
                user&apos;s builds. Within each list item, I included a link to
                the build&apos;s individual page, a button to edit the build,
                and a button to delete the build. To implement editing, I saved
                the build into local storage on button click and then redirected
                to /planner, which would then load the build from local storage.
                I also added a query param in the URL to notify the planner
                component that the user was in edit mode. To finish up, I
                created a PUT route that the user would use on save instead of a
                POST route. For delete functionality, I simply had to add a
                DELETE route as well.
            </p>
            <p>
                Finally, I added the informational builds and tiers pages. These
                pages display the official builds that I created based off of
                the current META at the time. In addition to the builds
                themselves, I included guides on how to play these builds and to
                optimize their ceilings. On the builds page, all official builds
                are listed and can be sorted by class. On the tiers page, each
                build is arranged into a tier (S, A, B, C, D, F) based on how
                they perform relative to the META. This tier page can also be
                sorted by class to allow users to focus on builds that their
                characters can actually use.
            </p>
        </>
    );

    const reflection = (
        <p>
            This project is another one that I&apos;m especially proud of. It
            was my first true interaction with a CRUD app, and the challenges
            associated with them. Again, Diablo III is another topic I would
            consider myself a domain expert in, so working with a project based
            around it was a lot of fun. The project is actually something I
            would use myself, and was heavily inspired by the work done by the
            Maxroll staff. I really loved the idea of targeting the console
            Diablo III community, as it&apos;s one that I&apos;m actually fairly
            active in, and could use some support. Through my connections in the
            community, I&apos;ve been able to register 200+ users who have been
            active on the site and make use of the utilities that I&apos;ve
            designed.
        </p>
    );

    const imageURLs: string[] = [
        "/assets/projects/minroll/thumbnail.webp",
        "/assets/projects/minroll/login.webp",
        "/assets/projects/minroll/builds.webp",
        "/assets/projects/minroll/tiers.webp",
        "/assets/projects/minroll/planner.webp",
        "/assets/projects/minroll/skills.webp",
        "/assets/projects/minroll/build.webp",
        "/assets/projects/minroll/profile.webp",
    ];

    return (
        <div id="minroll">
            <Head>
                <title>Minroll | Charles Zhang</title>
            </Head>
            <ProjectOutline
                project={minroll}
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
        const minroll: Project | null = await prisma.project.findUnique({
            where: {
                name: "Minroll",
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
            props: { minroll },
        };
    } catch (err) {
        console.log(err);
        return {
            props: {},
        };
    }
}

export default Minroll;
