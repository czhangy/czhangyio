// Component
import ExperiencePage from "./ExperiencePage";
// Libraries
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
// Mock
import { mockExperiences } from "@/mocks/mocks.js";

describe("<ExperiencePage />", () => {
    it("Renders all experiences", () => {
        render(<ExperiencePage experience={mockExperiences} />);
        expect(screen.queryAllByRole("heading").length).toEqual(
            mockExperiences.length
        );
    });
    it("Renders starting point on the left for odd lengths", () => {
        render(<ExperiencePage experience={mockExperiences.slice(1)} />);
        expect(screen.queryByTestId("start-point")).toHaveClass("left");
    });
    it("Renders starting point on the right for even lengths", () => {
        render(<ExperiencePage experience={mockExperiences} />);
        expect(screen.queryByTestId("start-point")).toHaveClass("right");
    });
});
