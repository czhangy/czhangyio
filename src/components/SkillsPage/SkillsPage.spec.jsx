// Component
import SkillsPage from "./SkillsPage";
// Libraries
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
// Mock
import { mockSkills } from "@/mocks/mocks.js";

describe("<SkillsPage />", () => {
    it("Renders all cards", () => {
        render(<SkillsPage skills={mockSkills} />);
        const headers = screen.queryAllByRole("heading");
        expect(headers.length).toEqual(mockSkills.length);
    });
});
