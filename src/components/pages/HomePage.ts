import { TaskTemplate } from '../templates/TaskTemplate';
import { Task } from '../../types/Task';
import { getTasks, saveTasks } from '../../utils/storage';

/**
 * Represents the home page component.
 */
export const HomePage = () => {
    /**
     * An array of tasks.
     */
    let tasks: Task[] = getTasks();

    /**
     * Adds a new task to the tasks array.
     * @param name - The name of the task.
     */
    const addTask = (name: string) => {
        const newTask: Task = {
            id: Date.now().toString(),
            name,
            completed: false
        };
        tasks.push(newTask);
        saveTasks(tasks);
        render();
    };

    /**
     * Toggles the completion status of a task.
     * @param id - The ID of the task.
     */
    const toggleTask = (id: string) => {
        tasks = tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task);
        saveTasks(tasks);
        render();
    };

    /**
     * Deletes a task from the tasks array.
     * @param id - The ID of the task.
     */
    const deleteTask = (id: string) => {
        tasks = tasks.filter(task => task.id !== id);
        saveTasks(tasks);
        render();
    };

    /**
     * Edits the name of a task.
     * @param id - The ID of the task.
     * @param newName - The new name of the task.
     */
    const editTask = (id: string, newName: string) => {
        tasks = tasks.map(task => task.id === id ? { ...task, name: newName } : task);
        saveTasks(tasks);
        render();
    };

    /**
     * Renders the tasks on the page.
     */
    const render = () => {
        document.body.innerHTML = '';
        const taskTemplate = TaskTemplate(tasks, addTask, toggleTask, deleteTask, editTask);
        document.body.appendChild(taskTemplate);
    };

    render();
};
