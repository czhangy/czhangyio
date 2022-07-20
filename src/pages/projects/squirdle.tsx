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
    squirdle: Project;
};

const Squirdle: NextPage<Props> = ({ squirdle }: Props) => {
    const about = (
        <p>
            Squirdle is a Pokémon-themed take on the popular game Wordle. It was
            developed with very similar styling to Wordle to keep things simple
            and recognizable, but with the twist that, instead of guessing a
            word, the player needs to &quot;catch&quot; a target Pokémon from
            Gen I to Gen IV by guessing it. The application focuses on clean
            design and optimized performance.
        </p>
    );

    const features = (
        <>
            <p>
                As mentioned above, Squirdle features a Wordle-style game where
                users have 8 guesses to guess a target Pokémon. With each guess,
                the user is notified whether their guessed Pokémon&apos;s
                generation, type, evolution stage, and name length either match
                or are close to the target Pokémon&apos;s. Using these hints,
                the goal of the player is to narrow down the field of Pokémon,
                and eventually arrive at the target. As of now, all Pokémon from
                Generations I through IV are included in the game. Unlike
                Wordle, the game is not tied to a daily timer, and can instead
                be played and replayed whenever the user desires.
            </p>
            <p>
                In addition to the game itself, the application features a
                profile page, where users can see what Pokémon they&apos;ve
                previously caught/seen, how many Pokémon they&apos;ve caught in
                a row, and what achievements they&apos;ve accomplished.
                There&apos;s a total of 493 Pokémon to capture and 32 medals to
                earn. All of this data, along with the game&apos;s state, is
                stored in the user&apos;s local storage.
            </p>
            <p>
                Finally, there are also some modifications to the game that the
                user can choose to enable. The first of these modifications is a
                light mode that users can choose to use if they prefer. The
                other is a hard mode, which removes the dropdown from the game
                so that users have to manually think of and input their guesses.
                This mode also forces users to use all the hints they&apos;re
                given, limiting their ability to extract information through
                guesses. Like the profile and game state, these settings persist
                through local storage.
            </p>
        </>
    );

    const development = (
        <>
            <p>
                This project started by gathering data. Initially, the plan was
                to use PokéAPI to fetch data for each Pokémon, but at the time
                of development, an error in the API prevented the application
                from deploying. As a result, I pivoted to using my own
                database/RESTful API, using data parsed from PokéAPI and
                Serebii.
            </p>
            <p>
                The next step in my development was to create the dropdown
                through which users would make their guesses. I wanted the
                dropdown to be searchable, display the guess number, and
                automatically filter. To accomplish this, I created an input
                field that would display and filter the dropdown menu on change.
                When the component initialized, a list of all Pokémon would be
                fetched from the backend to serve as the base list, which could
                then be filtered by search. On selection, the dropdown options
                could then set the value of the input, which could then be
                submitted as a guess. The final piece of this component was
                validation so that users couldn&apos;t guess Pokémon names that
                didn&apos;t exist or that they&apos;d already guessed.
            </p>
            <p>
                From there, I switched to working on the game grid, where users
                could see the guesses they&apos;ve made. This grid contains 8
                rows (1 for each guess), with 5 columns (1 for each hint). On a
                guess, the corresponding row would flip over, showing the user
                how their guess relates to the target Pokémon. The tiles in
                these rows would feature each individual attribute for each
                guess, and were styled to reflect how close they were to the
                corresponding attribute of the target. To implement this, I had
                to maintain some variables reflecting the game state and play
                with some animations to smooth the visual experience.
            </p>
            <p>
                To finish off the core functionality, I then rounded out the
                game logic. I created win/loss conditions based on the number of
                guesses, corresponding win/loss game states, and added a way to
                reset the game. For testing purposes, I decided it would be best
                to integrate local storage into the application at this point,
                which improved the experience with the application tenfold.
            </p>
            <p>
                The next components I decided to work on were the modals. The
                &quot;How to Play&quot; modal was fairly simple, I just created
                a page for each attribute, explaining how &quot;closeness&quot;
                to the target attribute was determined. I also decided to add
                credits for myself and the resources I used at the end of this
                modal. Next, I introduced a &quot;Current Pokémon&quot; modal
                that showed the user either the target Pokémon if the game had
                ended, or a patch of grass representing an unknown target if the
                game was still going. Finally, I made a settings modal for the
                future implementation of settings and as a navigation hub to
                other pages of the application.
            </p>
            <p>
                I then switched to working on the profile page, which I hoped
                would make the user feel more connected to the game. Since I had
                already been working with local storage, it was easy to begin
                pulling data from there and displaying it on the profile page.
                Keeping track of the number of Pokémon caught/seen was an easy
                modification to the game-end logic. I also decided to implement
                a Pokédex for users to see Pokémon they had previously caught,
                as well as a list of medals for them to obtain if they achieved
                certain milestones. Once again, these were all simple
                modifications that checked for various things during the
                game-end logic.
            </p>
            <p>
                Finally, I implemented the more miscellaneous features. I worked
                on optimizing the game&apos;s performance, cleaning up some of
                the methods I had previously written to be more time/memory
                efficient. I also implemented both the light mode theme and hard
                more logic on top of my existing styling/game logic and
                introduced toggles for both on the settings modal. I added a
                button that allowed users to copy a link to the application so
                that they could share it with friends. Finally, I added a form
                on the settings modal, through which users could submit feedback
                on the application to me through email.
            </p>
        </>
    );

    const reflection = (
        <p>
            This project will likely be one of my favorite projects I ever do. I
            was extremely happy with the way it turned out in the end. I really
            enjoyed working with something like Pokémon, as its something I
            consider myself to be a domain expert in, and that really motivated
            me to keep working through the application. Although the app&apos;s
            concept is simple, I really felt like I learned a lot through the
            entire development process and got the opportunity to work with a
            bunch of new tools like third-party APIs and the local storage web
            API. This application also really gave me a chance to dive into the
            end-user mindset, coming up with features designed to improve the
            user&apos;s quality of life. As for the end result, I&apos;ve
            actually received a lot of feedback, both from friends and from
            users that I acquired through posting my project on online forums.
            As of now, the game has been played approximately 1,500 times, and
            it&apos;s been super satisfying to see it thrive.
        </p>
    );

    const imageURLs: string[] = [
        "/assets/projects/squirdle/thumbnail.webp",
        "/assets/projects/squirdle/light-mode.webp",
        "/assets/projects/squirdle/search.webp",
        "/assets/projects/squirdle/game.webp",
        "/assets/projects/squirdle/win.webp",
        "/assets/projects/squirdle/how-to-play.webp",
        "/assets/projects/squirdle/pokedex.webp",
        "/assets/projects/squirdle/medals.webp",
    ];

    return (
        <div id="squirdle">
            <Head>
                <title>Squirdle | Charles Zhang</title>
            </Head>
            <ProjectOutline
                project={squirdle}
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
        const squirdle: Project | null = await prisma.project.findUnique({
            where: {
                name: "Squirdle",
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
            props: { squirdle },
        };
    } catch (err) {
        console.log(err);
        return {
            props: {},
        };
    }
}

export default Squirdle;
