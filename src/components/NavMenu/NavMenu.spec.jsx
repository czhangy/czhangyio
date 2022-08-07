// Component
import Navbar from "@/components/Navbar/Navbar";
// Libraries
import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";

describe("<NavMenu />", () => {
    beforeEach(() => render(<Navbar />));
    it("Initializes with the nav menu closed", () => {
        expect(screen.queryByRole("list")).toHaveClass("closed");
    });
    it("Nav menu contains links to all pages", () => {
        act(() => fireEvent.click(screen.getAllByRole("button")[1]));
        expect(screen.queryByText("About").closest("a")).toHaveAttribute(
            "href",
            "/about"
        );
        expect(screen.queryByText("Experience").closest("a")).toHaveAttribute(
            "href",
            "/experience"
        );
        expect(screen.queryByText("Projects").closest("a")).toHaveAttribute(
            "href",
            "/projects"
        );
        // expect(screen.queryByText("Skills").closest("a")).toHaveAttribute(
        //     "href",
        //     "/skills"
        // );
    });
});
