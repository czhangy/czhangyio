// Component
import ProjectCard from "./ProjectCard";
// Libraries
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
// Helper function
import { toSlug } from "@/utils/helpers";
// Mock
import { mockProjects } from "@/mocks/mocks.js";

describe("<ProjectCard />", () => {
    it("Renders all content", () => {
        render(<ProjectCard project={mockProjects[0]} />);
        const name = screen.queryByText(mockProjects[0].name);
        const img = screen.queryByAltText(`${mockProjects[0].name} thumbnail`);
        const mainLink = img.closest("a");
        const gitLink = screen.queryByAltText("GitHub link").closest("a");
        const siteLink = screen.queryByAltText("Site link").closest("a");
        expect(name).toBeInTheDocument();
        expect(img).toBeInTheDocument();
        expect(mainLink).toHaveAttribute(
            "href",
            `/projects/${toSlug(mockProjects[0].name)}`
        );
        expect(gitLink).toHaveAttribute("href", mockProjects[0].gitLink);
        expect(siteLink).toHaveAttribute("href", mockProjects[0].link);
    });

    it("Excludes Git link for Git-less content", () => {
        render(<ProjectCard project={mockProjects[1]} />);
        const gitLink = screen.queryByAltText("GitHub link");
        expect(gitLink).not.toBeInTheDocument();
    });
});
