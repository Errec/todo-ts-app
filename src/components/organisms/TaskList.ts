import { Task } from '../../types/Task';
import { TaskItem } from '../molecules/TaskItem';

/**
 * Creates a task list component.
 *
 * @param tasks - An array of tasks.
 * @param onToggle - A callback function to handle task toggle event.
 * @param onDelete - A callback function to handle task delete event.
 * @param onEdit - A callback function to handle task edit event.
 * @returns The task list component as a DOM element.
 */
export const TaskList = (tasks: Task[], onToggle: (id: string) => void, onDelete: (id: string) => void, onEdit: (id: string, newName: string) => void) => {
    const container = document.createElement('div');
    container.setAttribute('role', 'list');

    tasks.forEach(task => {
        const taskItem = TaskItem(task, () => onToggle(task.id), () => onDelete(task.id), (newName) => onEdit(task.id, newName));
        container.appendChild(taskItem);
    });

    return container;
};
