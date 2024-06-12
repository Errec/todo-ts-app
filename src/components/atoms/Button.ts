// src/components/atoms/Button.ts
export const Button = (iconClass: string, onClick: () => void, ariaLabel: string) => {
    const button = document.createElement('button');
    const icon = document.createElement('i');
    icon.className = iconClass;
    button.appendChild(icon);

    // Add accessibility attributes
    button.setAttribute('aria-label', ariaLabel);
    button.addEventListener('click', onClick);
    return button;
};