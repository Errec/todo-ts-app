import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';
import { TaskList } from '../organisms/TaskList';
import { Task } from '../../types/Task';

/**
 * Creates a task template component.
 * @param tasks - An array of tasks.
 * @param onAddTask - A callback function to add a new task.
 * @param onToggleTask - A callback function to toggle the status of a task.
 * @param onDeleteTask - A callback function to delete a task.
 * @param onEditTask - A callback function to edit a task.
 * @returns The task template component.
 */
export const TaskTemplate = (tasks: Task[], onAddTask: (name: string) => void, onToggleTask: (id: string) => void, onDeleteTask: (id: string) => void, onEditTask: (id: string, newName: string) => void) => {
    const container = document.createElement('div');

    const form = document.createElement('div');
    form.setAttribute('role', 'form');
    form.setAttribute('aria-labelledby', 'add-task-form');

    const formLabel = document.createElement('label');
    formLabel.id = 'add-task-form';
    formLabel.setAttribute('for', 'new-task');

    const input = Input('Add a new task', 'New task input');
    input.id = 'new-task';

    const addButton = Button('Add Task', () => {
        try {
            if (input.value.trim()) {
                onAddTask(input.value.trim());
                input.value = '';
            }
        } catch (error) {
            console.error('Error adding task:', error);
        }
    }, 'Add task');

    form.appendChild(formLabel);
    form.appendChild(input);
    form.appendChild(addButton);

    const taskList = TaskList(tasks, onToggleTask, onDeleteTask, onEditTask);

    container.appendChild(form);
    container.appendChild(taskList);

    return container;
};
