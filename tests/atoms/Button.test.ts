// tests/atoms/Button.test.ts
import { Button } from '../../src/components/atoms/Button';

describe('Button component', () => {
    it('should trigger onClick event', () => {
        const onClick = jest.fn();
        const button = Button('icon-class', onClick, 'Click button', 'Click me');
        document.body.appendChild(button);
        
        button.click();
        
        expect(onClick).toHaveBeenCalled();
    });

    it('should have correct text content', () => {
        const onClick = jest.fn();
        const button = Button('icon-class', onClick, 'Click button', 'Click me');
        
        expect(button.textContent).toBe('Click me');
    });

    it('should have aria-label attribute', () => {
        const onClick = jest.fn();
        const button = Button('icon-class', onClick, 'Click button', 'Click me');
        
        expect(button.getAttribute('aria-label')).toBe('Click button');
    });
});