// Stylesheet
import styles from "./AboutPage.module.scss";
// Components
import PageWrapper from "@/components/PageWrapper/PageWrapper";
// Next
import Image from "next/image";

const AboutPage: React.FC = () => {
    return (
        <PageWrapper>
            <h2 className={styles["content-header"]}>My Story</h2>
            <div className={styles["content-container"]}>
                <p data-testid="story-p">
                    Hi there, my name is Charles Zhang! I grew up in Manhattan
                    Beach, a town in the South Bay area of Los Angeles County in
                    California. As a kid, I developed an inclination towards
                    STEM, participating in activities like Science Olympiad,
                    Math Club, and CyberPatriot, while also becoming an Eagle
                    Scout somewhere along the way. At the same time, I picked up
                    a strong passion for video games and became invested in
                    their potential to do good in the world. All of this
                    together led to me pursue computer science as a career,
                    where I&apos;ve continued to focus on using my skills to the
                    benefit of the communities around me. As the most recent
                    step on this journey, I&apos;m studying at UCLA, and will be
                    graduating next spring with a B.S. in Computer Science.
                </p>
                <div className={styles["image-container"]}>
                    <Image
                        src="/assets/about/smile.webp"
                        alt="Smile"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
            </div>
            <h2 className={`${styles["content-header"]} ${styles.right}`}>
                My Work
            </h2>
            <div className={styles["content-container"]}>
                <div className={styles["image-container"]}>
                    <Image
                        src="/assets/about/dev.webp"
                        alt="Dev"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <p data-testid="work-p">
                    Most of my experience has come from working in full-stack
                    development for small organizations or personal projects.
                    This time has allowed me to help raise awareness for social
                    issues, improve the student experience at UCLA, and support
                    my online communities with games and tools. Most recently,
                    I&apos;ve been working as an intern with the Auto Refinance
                    team at Capital One, using web development and machine
                    learning to develop and optimize a loan-processing platform.
                    With each new experience or project I undertake, I hope to
                    continue growing as a developer and learning how tech can
                    make the world a better place.
                </p>
            </div>
            <h2 className={styles["content-header"]}>My Interests</h2>
            <div className={styles["content-container"]}>
                <p data-testid="interests-p">
                    Outside of work and school I&apos;m, shockingly, still a
                    nerd. As I&apos;ve mentioned, I have a strong passion for
                    video games and have a special place in my heart for the
                    Pokémon, Diablo, and Borderlands franchises, though
                    I&apos;ve poured hours into plenty of other titles. When
                    it&apos;s basketball season, I also enjoy feeding my
                    obsession for the NBA, and am a huge Warriors fan (not a
                    bandwagon, I swear) and analytics nerd. Apart from that, I
                    spend the rest of my free time playing tennis and dabbling
                    in magic/sleight of hand and creative writing, although no
                    one will ever see any of that if I have anything to say
                    about it.
                </p>
                <div className={styles["image-container"]}>
                    <Image
                        src="/assets/about/basketball.webp"
                        alt="Basketball"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
            </div>
        </PageWrapper>
    );
};

export default AboutPage;
