// Stylesheet
import styles from "./PageWrapper.module.scss";
// TS
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

const PageWrapper: React.FC<Props> = ({ children }: Props) => {
    return <div className={styles["page-wrapper"]}>{children}</div>;
};

export default PageWrapper;
