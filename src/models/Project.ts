// TS
import Skill from "./Skill";

export default interface Project {
    id: string;
    gitLink: string | null;
    link: string;
    name: string;
    tags?: Skill[];
}
