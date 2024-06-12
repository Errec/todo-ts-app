import { Input } from '../../src/components/atoms/Input';

describe('Input component', () => {
    it('should have the correct placeholder text', () => {
        const input = Input('Enter text', 'Input field');
        document.body.appendChild(input);
        
        expect(input.placeholder).toBe('Enter text');
    });

    it('should have aria-label attribute', () => {
        const input = Input('Enter text', 'Input field');
        
        expect(input.getAttribute('aria-label')).toBe('Input field');
    });

    it('should accept text input', () => {
        const input = Input('Enter text', 'Input field');
        document.body.appendChild(input);
        
        input.value = 'Test input';
        
        expect(input.value).toBe('Test input');
    });
});
