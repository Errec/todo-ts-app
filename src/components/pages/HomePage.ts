import { TaskTemplate } from '../templates/TaskTemplate';
import { Task } from '../../types/Task';
import { getTasks, saveTasks } from '../../utils/storage';

/**
 * Represents the home page component.
 */
export const HomePage = () => {
    let tasks: Task[] = [];

    /**
     * Loads the tasks from storage.
     */
    const loadTasks = () => {
        try {
            tasks = getTasks();
        } catch (error) {
            console.error('Error loading tasks:', error);
            tasks = [];
        }
    };

    /**
     * Adds a new task.
     * @param name - The name of the task.
     */
    const addTask = (name: string) => {
        try {
            const newTask: Task = {
                id: Date.now().toString(),
                name,
                completed: false
            };
            tasks.push(newTask);
            saveTasks(tasks);
            render();
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    /**
     * Toggles the completion status of a task.
     * @param id - The ID of the task.
     */
    const toggleTask = (id: string) => {
        try {
            tasks = tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task);
            saveTasks(tasks);
            render();
        } catch (error) {
            console.error('Error toggling task:', error);
        }
    };

    /**
     * Deletes a task.
     * @param id - The ID of the task.
     */
    const deleteTask = (id: string) => {
        try {
            tasks = tasks.filter(task => task.id !== id);
            saveTasks(tasks);
            render();
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    /**
     * Edits the name of a task.
     * @param id - The ID of the task.
     * @param newName - The new name of the task.
     */
    const editTask = (id: string, newName: string) => {
        try {
            tasks = tasks.map(task => task.id === id ? { ...task, name: newName } : task);
            saveTasks(tasks);
            render();
        } catch (error) {
            console.error('Error editing task:', error);
        }
    };

    /**
     * Renders the tasks on the page.
     */
    const render = () => {
        try {
            document.body.innerHTML = '';
            const taskTemplate = TaskTemplate(tasks, addTask, toggleTask, deleteTask, editTask);
            document.body.appendChild(taskTemplate);
        } catch (error) {
            console.error('Error rendering tasks:', error);
        }
    };

    loadTasks();
    render();
};
