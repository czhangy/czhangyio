// Stylesheet
import styles from "@/styles/ProjectDocs.module.scss";
// TS
import { NextPage } from "next";
import Project from "@/models/Project";
// Prisma
import prisma from "@/lib/prisma";
// Next
import Head from "next/head";
import Image from "next/image";
// Components
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import ProjectHeader from "@/components/ProjectHeader/ProjectHeader";
import ProjectTags from "@/components/ProjectTags/ProjectTags";

type Props = {
    splekbot: Project;
};

const Splekbot: NextPage<Props> = ({ splekbot }: Props) => {
    return (
        <div id="splekbot">
            <Head>
                <title>Splekbot | Charles Zhang</title>
            </Head>
            <PageWrapper>
                <ProjectHeader project={splekbot} />
                <h4 className={styles.subheader}>About the Project</h4>
                <div className={styles["image-container"]}>
                    <Image
                        src="/assets/projects/splekbot/thumbnail.webp"
                        alt="Thumbnail image"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <ProjectTags tags={splekbot.tags} />
            </PageWrapper>
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
