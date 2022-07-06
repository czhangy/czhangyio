export const showElements = (
    headerId: string,
    setter: (val: boolean) => void
) => {
    const header: HTMLElement = document.getElementById(headerId)!;
    if (header.getBoundingClientRect().top < window.innerHeight - 350) {
        setter(true);
        window.removeEventListener("scroll", () =>
            showElements(headerId, setter)
        );
    }
};
