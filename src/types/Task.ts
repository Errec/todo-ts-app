/**
 * Represents a task.
 */
export interface Task {
    /**
     * The unique identifier of the task.
     */
    id: string;

    /**
     * The name of the task.
     */
    name: string;

    /**
     * Indicates whether the task is completed or not.
     */
    completed: boolean;
}
