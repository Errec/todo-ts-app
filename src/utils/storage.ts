import { Task } from '../types/Task';

const TASKS_KEY = 'tasks';

/**
 * Retrieves the tasks from the local storage.
 * @returns An array of tasks.
 */
export const getTasks = (): Task[] => {
    const tasksJson = localStorage.getItem(TASKS_KEY);
    return tasksJson ? JSON.parse(tasksJson) : [];
};

export const saveTasks = (tasks: Task[]) => {
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
};
