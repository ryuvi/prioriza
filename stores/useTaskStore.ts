import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

export interface Task {
  id: string;
  name: string;
  description?: string;
  priority?: number;
  completed: boolean;
  createdAt: Date;
  dueDate?: string;
  category?: string;
}

export interface TaskState {
  tasks: Task[];
  addTask: (name: string, description?: string, priority?: number, dueDate?: string, category?: string) => void;
  toggleTask: (id: string) => void;
  removeTask: (id: string) => void;
  updateTask: (task: Task) => void;
  clearTasks: () => void;
}

export const useTaskStore = create<TaskState>()(
  persist(
    (set, get) => ({
      tasks: [{
        id: uuid.v4(),
        name: 'Task 1',
        description: 'Description 1',
        priority: 1,
        completed: false,
        createdAt: new Date(),
        dueDate: new Date().toLocaleDateString('pt-Br'),
        category: 'Category 1',
      }],
      addTask: (name, description, priority, dueDate, category) => {
        const newTask: Task = {
          id: uuid.v4(),
          name,
          description,
          priority,
          completed: false,
          createdAt: new Date(),
          dueDate,
          category,
        };
        set({ tasks: [...get().tasks, newTask] });
      },
      toggleTask: (id) => {
        set({
          tasks: get().tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
          ),
        });
      },
      removeTask: (id) => {
        set({ tasks: get().tasks.filter((task) => task.id !== id) });
      },
      updateTask: (task) => {
        set({
          tasks: get().tasks.map((t) => (t.id === task.id ? task : t)),
        });
      },
      clearTasks: () => {
        set({ tasks: [] });
      },
    }),
    {
      name: 'task-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);