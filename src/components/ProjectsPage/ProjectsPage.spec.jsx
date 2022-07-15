// Component
import ProjectsPage from "./ProjectsPage";
// Libraries
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
// Mock
import { mockProjects } from "@/mocks/mocks.js";

describe("<ProjectsPage />", () => {
    it("Renders all cards", () => {
        render(<ProjectsPage projects={mockProjects} />);
        expect(screen.queryAllByRole("heading").length).toEqual(
            mockProjects.length
        );
    });
});
