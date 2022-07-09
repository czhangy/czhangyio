// Component
import MySkills from "./MySkills";
// Libraries
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("<MySkills />", () => {
    beforeEach(() => render(<MySkills />));
    it("Renders header", () => {
        const header = screen.queryByText("My Skills");
        expect(header).toBeInTheDocument();
    });
});
