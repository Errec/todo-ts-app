import './assets/styles/main.scss';
import './App';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('app');
    if (root) {
        root.innerHTML = ''; // Clear any existing content
    } else {
        const newRoot = document.createElement('div');
        newRoot.id = 'app';
        document.body.appendChild(newRoot);
    }
});
