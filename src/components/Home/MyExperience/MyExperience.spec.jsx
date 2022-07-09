// Component
import MyExperience from "./MyExperience";
// Libraries
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("<MyExperience />", () => {
    beforeEach(() => render(<MyExperience />));
    it("Renders header", () => {
        const header = screen.queryByText("My Experience");
        expect(header).toBeInTheDocument();
    });
});
