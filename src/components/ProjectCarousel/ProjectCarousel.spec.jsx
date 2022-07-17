// Component
import ProjectCarousel from "./ProjectCarousel";
// Libraries
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

// Mock images
const mockImages = ["/A/B/C", "/unit/test", "/1/2/3"];

describe("<ProjectCarousel />", () => {
    beforeEach(() => render(<ProjectCarousel imageURLs={mockImages} />));
    it("Renders all images", () => {
        expect(screen.queryAllByAltText("").length).toEqual(mockImages.length);
    });
    it("Initializes with correct image placement", async () => {
        const imgs = screen.queryAllByAltText("");
        await waitFor(() => {
            expect(imgs[0].closest("div")).toHaveClass("show");
            expect(imgs[1].closest("div")).toHaveClass("right");
            expect(imgs[2].closest("div")).toHaveClass("right");
        });
    });
    it("Nav buttons scroll correctly", async () => {
        const imgs = screen.queryAllByAltText("");
        await waitFor(() => expect(imgs[0].closest("div")).toHaveClass("show"));
        fireEvent.click(document.getElementById("right-button"));
        await waitFor(() => {
            expect(imgs[0].closest("div")).toHaveClass("left");
            expect(imgs[1].closest("div")).toHaveClass("show");
            expect(imgs[2].closest("div")).toHaveClass("right");
        });
        fireEvent.click(document.getElementById("left-button"));
        await waitFor(() => {
            expect(imgs[0].closest("div")).toHaveClass("show");
            expect(imgs[1].closest("div")).toHaveClass("right");
            expect(imgs[2].closest("div")).toHaveClass("right");
        });
    });
    it("Removes buttons at edges of carousel", async () => {
        const imgs = screen.queryAllByAltText("");
        await waitFor(() => expect(imgs[0].closest("div")).toHaveClass("show"));
        expect(screen.queryAllByRole("button").length).toEqual(1);
        fireEvent.click(document.getElementById("right-button"));
        await waitFor(() => {
            expect(screen.queryAllByRole("button").length).toEqual(2);
            expect(imgs[1].closest("div")).toHaveClass("show");
        });
        fireEvent.click(document.getElementById("right-button"));
        await waitFor(() =>
            expect(screen.queryAllByRole("button").length).toEqual(1)
        );
    });
});
