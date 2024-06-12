export const Input = (placeholder: string, ariaLabel: string) => {
    const input = document.createElement('input');
    input.placeholder = placeholder;
    input.setAttribute('aria-label', ariaLabel); // Set aria-label attribute for accessibility
    return input;
};
