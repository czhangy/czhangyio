// Component
import TimelineElement from "./TimelineElement";
// Libraries
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
// Mock
import { mockExperiences } from "@/mocks/mocks.js";

describe("<TimelineElement />", () => {
    it("Renders all content", () => {
        render(<TimelineElement experience={mockExperiences[0]} index={0} />);
        expect(
            screen.getByAltText(`${mockExperiences[0].name} logo`)
        ).toBeInTheDocument();
        expect(screen.getByText(mockExperiences[0].name)).toBeInTheDocument();
        expect(
            screen.getByText(mockExperiences[0].jobTitle)
        ).toBeInTheDocument();
        expect(
            screen.getByText(
                `${mockExperiences[0].startDate} - ${mockExperiences[0].endDate}`
            )
        ).toBeInTheDocument();
        expect(
            screen.getByText(mockExperiences[0].points[0])
        ).toBeInTheDocument();
        expect(
            screen.getByText(mockExperiences[0].points[1])
        ).toBeInTheDocument();
    });
});
