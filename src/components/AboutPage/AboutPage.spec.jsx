// Component
import AboutPage from "./AboutPage";
// Libraries
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("<AboutPage />", () => {
    beforeEach(() => render(<AboutPage />));
    it("Renders 'My Story' section", () => {
        const header = screen.queryByText("My Story");
        const p = screen.queryByTestId("story-p");
        const img = screen.queryByAltText("Smile");
        expect(header).toBeInTheDocument();
        expect(p).toBeInTheDocument();
        expect(img).toBeInTheDocument();
    });
    it("Renders 'My Work' section", () => {
        const header = screen.queryByText("My Work");
        const p = screen.queryByTestId("work-p");
        const img = screen.queryByAltText("Dev");
        expect(header).toBeInTheDocument();
        expect(p).toBeInTheDocument();
        expect(img).toBeInTheDocument();
    });
    it("Renders 'My Interests' section", () => {
        const header = screen.queryByText("My Interests");
        const p = screen.queryByTestId("interests-p");
        const img = screen.queryByAltText("Basketball");
        expect(header).toBeInTheDocument();
        expect(p).toBeInTheDocument();
        expect(img).toBeInTheDocument();
    });
});
