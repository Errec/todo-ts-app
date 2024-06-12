import { Task } from '../../types/Task';
import { Checkbox } from '../atoms/Checkbox';
import { Button } from '../atoms/Button';

/**
 * Creates a task item element.
 * @param task - The task object.
 * @param onToggle - The callback function to toggle the task completion.
 * @param onDelete - The callback function to delete the task.
 * @param onEdit - The callback function to edit the task name.
 * @returns The task item element.
 */
export const TaskItem = (task: Task, onToggle: () => void, onDelete: () => void, onEdit: (newName: string) => void) => {
    const container = document.createElement('div');
    container.className = 'task-item';
    container.setAttribute('role', 'listitem');

    const checkbox = Checkbox(task.completed, onToggle, `task-${task.id}`);
    const label = document.createElement('label');
    label.setAttribute('for', `task-${task.id}`);
    label.innerText = task.name;

    const nameInput = document.createElement('input');
    nameInput.value = task.name;
    nameInput.setAttribute('aria-label', 'Edit task name');
    nameInput.style.display = 'none';

    const editButton = Button('Edit', () => {
        label.style.display = 'none';
        nameInput.style.display = 'block';
        nameInput.focus();
    }, 'Edit task');

    nameInput.addEventListener('blur', () => {
        onEdit(nameInput.value);
        label.innerText = nameInput.value;
        label.style.display = 'block';
        nameInput.style.display = 'none';
    });

    nameInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            nameInput.blur();
        }
    });

    const deleteButton = Button('Delete', onDelete, 'Delete task');

    container.appendChild(checkbox);
    container.appendChild(label);
    container.appendChild(nameInput);
    container.appendChild(editButton);
    container.appendChild(deleteButton);

    return container;
};
