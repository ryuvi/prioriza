import {create} from 'zustand';

interface settingsModal {
  settingsVisible: boolean;
  showSettings: () => void;
  hideSettings: () => void;
}

export const useSettingsStore = create<settingsModal>((set) => ({
  settingsVisible: false,
  showSettings: () => set({ settingsVisible: true }),
  hideSettings: () => set({ settingsVisible: false }),
}));
