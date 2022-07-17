// Component
import ProjectHeader from "./ProjectHeader";
// Libraries
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
// Mock
import { mockProjects } from "@/mocks/mocks.js";

describe("<ProjectHeader />", () => {
    it("Renders all content", () => {
        render(<ProjectHeader project={mockProjects[0]} />);
        expect(screen.queryByText(mockProjects[0].name)).toBeInTheDocument();
        expect(
            screen.queryByAltText("GitHub link").closest("a")
        ).toHaveAttribute("href", mockProjects[0].gitLink);
        expect(screen.queryByAltText("Site link").closest("a")).toHaveAttribute(
            "href",
            mockProjects[0].link
        );
    });

    it("Excludes Git link for Git-less content", () => {
        render(<ProjectHeader project={mockProjects[1]} />);
        expect(screen.queryByAltText("GitHub link")).not.toBeInTheDocument();
    });
});
