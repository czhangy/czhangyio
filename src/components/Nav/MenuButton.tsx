// Stylesheet
import styles from "@/styles/Nav/MenuButton.module.scss";
// TS
import { SyntheticEvent } from "react";

type Props = {
    onClick: (e: SyntheticEvent) => void;
    onClose: () => void;
};

const MenuButton: React.FC<Props> = ({ onClick, onClose }: Props) => {
    return (
        <button
            id={styles["menu-button"]}
            onClick={(e: SyntheticEvent) => onClick(e)}
            onBlur={onClose}
        >
            <hr />
            <hr />
            <hr />
        </button>
    );
};

export default MenuButton;
