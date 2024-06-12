import { Task } from '../types/Task';

const TASKS_KEY = 'tasks';

// Function to get tasks from local storage
export const getTasks = (): Task[] => {
    try {
        const tasksJson = localStorage.getItem(TASKS_KEY);
        return tasksJson ? JSON.parse(tasksJson) : [];
    } catch (error) {
        console.error('Error getting tasks from local storage:', error);
        return [];
    }
};

// Function to save tasks to local storage
export const saveTasks = (tasks: Task[]) => {
    try {
        localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
    } catch (error) {
        console.error('Error saving tasks to local storage:', error);
    }
};
