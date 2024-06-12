export const Checkbox = (checked: boolean, onChange: (checked: boolean) => void, id: string) => {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = checked;
    checkbox.id = id;

    // Add accessibility attributes
    checkbox.setAttribute('aria-checked', checked.toString());
    checkbox.addEventListener('change', () => onChange(checkbox.checked));
    return checkbox;
};
