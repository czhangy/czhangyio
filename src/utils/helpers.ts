/*
 * Rotates an array so that k is the center element
 * @param arr - the array to be rotates
 * @param center - the index to center at
 * @returns {any[]} - the rotated array
 */
export const centerArray = (arr: any[], center: number) => {
    const mid = Math.floor(arr.length / 2);
    let di = center - mid;
    if (di > 0) return arr.concat(arr).slice(di, di + arr.length);
    else {
        di = Math.abs(di);
        return arr.slice(di - arr.length).concat(arr.slice(0, di - arr.length));
    }
};

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
    return name.replace(/\s/g, "").replace(/\//g, "+").toLowerCase();
};
