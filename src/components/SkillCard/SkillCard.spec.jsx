// Component
import SkillCard from "./SkillCard";
// Libraries
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
// Mock
import { mockSkills } from "@/mocks/mocks.js";

describe("<SkillCard />", () => {
    beforeEach(() => render(<SkillCard skill={mockSkills[0]} />));
    it("Renders all content", () => {
        expect(screen.queryByText(mockSkills[0].name)).toBeInTheDocument();
        expect(
            screen.queryByAltText(`${mockSkills[0].name} logo`)
        ).toBeInTheDocument();
    });

    it("Colors ribbons correctly", () => {
        expect(screen.queryByTestId("main-ribbon")).toHaveStyle({
            background: mockSkills[0].mainHex,
        });
        expect(screen.queryByTestId("accent-ribbon")).toHaveStyle({
            background: mockSkills[0].accentHex,
        });
    });
});
