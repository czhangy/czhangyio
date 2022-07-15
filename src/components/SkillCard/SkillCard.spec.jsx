// Component
import SkillCard from "./SkillCard";
// Libraries
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
// Mock
import { mockSkills } from "@/mocks/mocks.js";

describe("<SkillCard />", () => {
    it("Renders all content", () => {
        render(<SkillCard skill={mockSkills[0]} />);
        const name = screen.queryByText(mockSkills[0].name);
        const img = screen.queryByAltText(`${mockSkills[0].name} logo`);
        expect(name).toBeInTheDocument();
        expect(img).toBeInTheDocument();
    });
});
