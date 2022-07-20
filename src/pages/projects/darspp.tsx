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
    darspp: Project;
};

const DarsPP: NextPage<Props> = ({ darspp }: Props) => {
    const about = (
        <p>
            DARS++ is my take on improving the DARS (Degree and Audit Report
            System), which students can use to review their academic history
            related to UCLA. Throughout my first 2 years at UCLA, I had
            overheard a lot of complaints about how difficult course planning
            was with official UCLA resources. At the time of development, the
            DARS was challenging to navigate and interpret, so DARS++ was
            created with the intention of simplifying and modernizing the
            platform. In addition, DARS++ aims to make better use of the
            student&apos;s course information, attempting to optimize the
            user&apos;s schedule by prioritizing important courses. In its
            current state, DARS++ acts more as a proof of concept, lacking
            functionality for majors outside of Computer Science.
        </p>
    );

    const features = (
        <p>
            DARS++&apos;s main feature allows users to input their courses and
            the grades they received in those courses. Upon submitting this
            data, the application will calculate the user&apos;s GPA, number of
            courses remaining, and number of units remaining. In addition to
            this, the application supplies the user with the list of courses
            they still have to take, as well as the courses they are eligible to
            take, sorted in order of importance (defined as the number of
            courses a given course is a prerequisite for). Each course listing
            also has an associated link to the course&apos;s page on Bruinwalk.
            Finally, DARS++ features a hash system by which a user can copy a
            code presented upon data submission which allows them to resume
            their progress at a later date without having to fill out all their
            information again.
        </p>
    );

    const development = (
        <>
            <p>
                Development into this project immediately ran into an obstacle
                when I was not approved access to UCLA&apos;s course API. As a
                result, the scope of the project had to be narrowed down
                tremendously to account for time needed for manual data
                collection. Once all course and major data was collected, I
                began by building out the interface users use to select courses
                they&apos;ve taken and input their grades. Most of this process
                was familiarizing myself with list manipulation methods and the
                interactions between my frontend and backend. Due to the lack of
                accessible API and the sheer number of course listings, I made a
                design decision to allow users to insert the number of courses
                taken in various categories rather than select course names from
                a list. The manual nature of this process bothered me as I was
                implementing it, as it gave way to a fairly negative UX, but
                without access to student/course data, it was the best I could
                do.
            </p>
            <p>
                From there, I began work on the results interface, with my main
                focus on clarity. The numerical calculations were trivial, as
                well as building the list of remaining courses. On the other
                hand, implementing the list sorted by importance was a little
                harder. I ended up using a topological sort algorithm to
                generate the list after evaluating other methodologies. At this
                point, I decided to leverage other UCLA resources, and added
                Bruinwalk links to each course listing, giving users the
                opportunity to research potential courses.
            </p>
            <p>
                Finally, my last step was trying to alleviate some of the bad UX
                that my application required. I wanted to do so by allowing the
                user to save their data and return to it later. However, I
                didn&apos;t want to associate this data with an account, as I
                believe courses/grades to be sensitive information that
                user&apos;s would not and should not trust my application with.
                As a result, I settled on a hash system, where the user&apos;s
                data is translated into a hash string that is never saved within
                the application and can be used in place of manual data entry in
                the future. To accomodate this new feature, I added the hash
                string to the results page for the user to copy, as well as an
                input where the user could paste the hash string and all the
                corresponding data would be entered for them.
            </p>
        </>
    );

    const reflection = (
        <p>
            This project was, overall, fairly successful. It was my first
            venture into a solo, full-stack project, and I feel good about its
            motivations and outcome. My biggest takeaway from the whole endeavor
            is how important planning is to a project&apos;s success. Without
            UCLA&apos;s APIs and access to student data, my vision collapsed.
            The app is far from the lightweight, convenient tool it was meant to
            be, which is perhaps most evident in the hash system that really
            should have just been local storage. With more time spent planning
            before starting, I may have been able to detect these issues and
            rethink the application as a whole. Despite all of this, this
            project was an amazing confidence booster, allowing me to prove to
            myself that I was capable of developing more complex applications
            and that my knowledge of web development was only growing. Even
            though it has its fair share of issues, I actually received mostly
            positive feedback from my peers who I distributed it to, and that
            was more than enough confirmation that I was headed in the right
            direction.
        </p>
    );

    const imageURLs: string[] = [
        "/assets/projects/darspp/thumbnail.webp",
        "/assets/projects/darspp/start.webp",
        "/assets/projects/darspp/selection.webp",
        "/assets/projects/darspp/results.webp",
    ];

    return (
        <div id="darspp">
            <Head>
                <title>DARS++ | Charles Zhang</title>
            </Head>
            <ProjectOutline
                project={darspp}
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
        const darspp: Project | null = await prisma.project.findUnique({
            where: {
                name: "DARS++",
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
            props: { darspp },
        };
    } catch (err) {
        console.log(err);
        return {
            props: {},
        };
    }
}

export default DarsPP;
