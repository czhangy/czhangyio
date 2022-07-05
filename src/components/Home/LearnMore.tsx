// Stylesheet
import styles from "@/styles/pages/Home.module.scss";
// Next
import Link from "next/link";

type Props = {
    show: boolean;
    url: string;
};

const LearnMore: React.FC<Props> = ({ show, url }: Props) => {
    return (
        <div
            id={styles["learn-more"]}
            className={show ? styles.show : styles.hide}
        >
            <Link href={`/${url}`}>
                <a id={styles["learn-more-link"]}>Learn More →</a>
            </Link>
        </div>
    );
};

export default LearnMore;
