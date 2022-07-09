/*
 * Calls a function when an element is scrolled into view
 * @param id - the element ID of the triggering element
 * @param setter - the setter function to call when element is scrolled to
 * @returns
 */
export const showElements = (id: string, setter: (val: boolean) => void) => {
    const header: HTMLElement = document.getElementById(id)!;
    if (header.getBoundingClientRect().top < window.innerHeight - 350) {
        setter(true);
        window.removeEventListener("scroll", () => showElements(id, setter));
    }
};

/*
 * Converts a name into its corresponding slug
 * @param name - the string that needs to be converted
 * @returns {string} - the slug
 */
export const toSlug = (name: string) => {
    return name
        .replace(/[.\s\/]/g, "")
        .replace(/\+/g, "p")
        .toLowerCase();
};
