export const Button = (text: string, onClick: () => void, ariaLabel: string) => {
    const button = document.createElement('button');
    button.innerText = text;

    // Add accessibility attributes
    button.setAttribute('aria-label', ariaLabel);
    button.addEventListener('click', onClick);
    return button;
};
