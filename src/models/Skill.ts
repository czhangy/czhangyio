// TS
import Project from "./Project";

export default interface Skill {
    id: string;
    accentHex: string;
    category: string | null;
    mainHex: string;
    name: string;
    proficiency: number;
}
