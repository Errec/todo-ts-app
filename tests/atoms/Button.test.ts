import { Button } from '../../src/components/atoms/Button';

describe('Button component', () => {
    it('should trigger onClick event', () => {
        const onClick = jest.fn();
        const button = Button('Click me', onClick, 'Click button');
        document.body.appendChild(button);
        
        button.click();
        
        expect(onClick).toHaveBeenCalled();
    });

    it('should have correct text content', () => {
        const onClick = jest.fn();
        const button = Button('Click me', onClick, 'Click button');
        
        expect(button.innerText).toBe('Click me');
    });

    it('should have aria-label attribute', () => {
        const onClick = jest.fn();
        const button = Button('Click me', onClick, 'Click button');
        
        expect(button.getAttribute('aria-label')).toBe('Click button');
    });
});
