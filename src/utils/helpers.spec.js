// Function
import { toSlug } from "./helpers";

describe("utils/helpers", () => {
    it("toSlug works", () => {
        expect(toSlug("C++")).toEqual("cpp");
        expect(toSlug("Testing Library")).toEqual("testinglibrary");
        expect(toSlug("HTML/CSS")).toEqual("htmlcss");
    });
});
