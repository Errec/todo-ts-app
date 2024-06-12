import { HomePage } from './components/pages/HomePage';

document.addEventListener('DOMContentLoaded', () => {
    try {
        HomePage();
    } catch (error) {
        console.error('Error initializing app:', error);
    }
});
