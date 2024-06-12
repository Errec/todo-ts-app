import { Checkbox } from '../../src/components/atoms/Checkbox';

describe('Checkbox component', () => {
    it('should be checked when passed true', () => {
        const onChange = jest.fn();
        const checkbox = Checkbox(true, onChange, 'checkbox-1');
        document.body.appendChild(checkbox);
        
        expect(checkbox.checked).toBe(true);
    });

    it('should be unchecked when passed false', () => {
        const onChange = jest.fn();
        const checkbox = Checkbox(false, onChange, 'checkbox-1');
        document.body.appendChild(checkbox);
        
        expect(checkbox.checked).toBe(false);
    });

    it('should trigger onChange event', () => {
        const onChange = jest.fn();
        const checkbox = Checkbox(false, onChange, 'checkbox-1');
        document.body.appendChild(checkbox);
        
        checkbox.click();
        
        expect(onChange).toHaveBeenCalledWith(true);
    });

    it('should have aria-checked attribute', () => {
        const onChange = jest.fn();
        const checkbox = Checkbox(true, onChange, 'checkbox-1');
        
        expect(checkbox.getAttribute('aria-checked')).toBe('true');
    });
});
