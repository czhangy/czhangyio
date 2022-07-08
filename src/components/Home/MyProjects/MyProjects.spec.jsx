// Component
import MyProjects from "./MyProjects";
// Libraries
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("<MyProjects />", () => {
    beforeEach(() => render(<MyProjects />));
    it("Renders header", () => {
        const header = screen.queryByText("My Projects");
        expect(header).toBeInTheDocument();
    });
});
