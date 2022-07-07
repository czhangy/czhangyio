// Stylesheet
import styles from "@/styles/pages/Home.module.scss";
// Next
import Link from "next/link";

type Props = {
    show: boolean;
    url: string;
};

const SeeMore: React.FC<Props> = ({ show, url }: Props) => {
    return (
        <div className={`${styles["see-more"]} ${show ? "show" : "hide"}`}>
            <Link href={`/${url}`}>
                <a className={styles["see-more-link"]}>See More →</a>
            </Link>
        </div>
    );
};

export default SeeMore;
