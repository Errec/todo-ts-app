export const Button = (text: string, onClick: () => void) => {
    const button = document.createElement('button');
    button.innerText = text;
    button.addEventListener('click', onClick);
    
    // Add accessibility attributes
    button.setAttribute('role', 'button');
    button.setAttribute('aria-label', text);
    
    return button;
};
