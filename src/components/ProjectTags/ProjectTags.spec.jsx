// Component
import ProjectTags from "./ProjectTags";
// Libraries
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
// Mock
import { mockProjects, mockSkills } from "@/mocks/mocks.js";

describe("<ProjectTags />", () => {
    it("Renders all content", () => {
        render(<ProjectTags tags={mockProjects[0].tags} />);
        const tags = screen.queryAllByRole("heading");
        expect(tags.length).toEqual(mockSkills.length);
        for (let i in tags)
            expect(tags[i]).toHaveStyle({ background: mockSkills[i].mainHex });
    });
});
