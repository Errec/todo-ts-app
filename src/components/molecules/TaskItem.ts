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
    nameInput.addEventListener('change', () => onEdit(nameInput.value));

    const deleteButton = Button('Delete', onDelete, 'Delete task');

    container.appendChild(checkbox);
    container.appendChild(label);
    container.appendChild(nameInput);
    container.appendChild(deleteButton);

    return container;
};
