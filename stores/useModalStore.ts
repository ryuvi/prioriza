import {create} from 'zustand';

interface Task {
  id: string;
  name: string;
  description?: string;
  priority?: number;
  completed: boolean;
  createdAt: Date;
}

interface ModalState {
  visible: boolean;
  editableTask: Task | null;
  setEditableTask: (task: Task) => void,
  showModal: () => void;
  hideModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  visible: false,
  editableTask: null,
  setEditableTask: (task) => set({ editableTask: task }),
  showModal: () => set({ visible: true }),
  hideModal: () => set({ visible: false }),
}));
