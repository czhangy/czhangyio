// Component
import AboutPage from "./AboutPage";
// Libraries
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("<AboutPage />", () => {
    beforeEach(() => render(<AboutPage />));
    it("Renders 'My Story' section", () => {
        expect(screen.queryByText("My Story")).toBeInTheDocument();
        expect(screen.queryByTestId("story-p")).toBeInTheDocument();
        expect(screen.queryByAltText("Smile")).toBeInTheDocument();
    });
    it("Renders 'My Work' section", () => {
        expect(screen.queryByText("My Work")).toBeInTheDocument();
        expect(screen.queryByTestId("work-p")).toBeInTheDocument();
        expect(screen.queryByAltText("Dev")).toBeInTheDocument();
    });
    it("Renders 'My Interests' section", () => {
        expect(screen.queryByText("My Interests")).toBeInTheDocument();
        expect(screen.queryByTestId("interests-p")).toBeInTheDocument();
        expect(screen.queryByAltText("Basketball")).toBeInTheDocument();
    });
});
