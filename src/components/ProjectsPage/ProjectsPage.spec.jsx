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
        const headers = screen.queryAllByRole("heading");
        expect(headers.length).toEqual(mockProjects.length);
    });
});
