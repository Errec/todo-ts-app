// src/components/atoms/Button.ts
export const Button = (iconClass: string, onClick: () => void, ariaLabel: string, buttonText?: string) => {
    const button = document.createElement('button');
    const icon = document.createElement('i');
    icon.className = iconClass;
    button.appendChild(icon);

    if (buttonText) {
        button.textContent = buttonText; // Set the text content if provided
    }

    // Add accessibility attributes
    button.setAttribute('aria-label', ariaLabel);
    button.addEventListener('click', onClick);
    return button;
};