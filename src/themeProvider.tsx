import { create } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';
import { MD3DarkTheme, MD3LightTheme, PaperProvider, MD3Theme as PaperTheme } from 'react-native-paper';
import { ReactNode } from 'react';

// Importa todos os temas customizados
import * as themes from '@/src/themes'
import { themeStore } from '@/src/themeStorage'; // AsyncStorage wrapper se necessário

// 🔑 Chaves dos temas disponíveis
export type ThemeKey = 'dracula' | 'pastelPink' | 'stdLight' | 'stdDark' | 'saphire' | 'acquaGreen' | 'redBlack' | 'catppuccin' | 'rosePine' // v1 Colors

// 🎨 Mapeamento de nome -> tema
export const themeMap: Record<ThemeKey, PaperTheme> = {
  dracula: themes.dracula,
  pastelPink: themes.pastelPink,
  stdLight: MD3LightTheme,
  stdDark: MD3DarkTheme,
  saphire: themes.saphire,
  acquaGreen: themes.acquaGreen,
  redBlack: themes.redBlack,
  rosePine: themes.rosePine,
  catppuccin: themes.catppuccin
};

// 🧠 Zustand store
interface ThemeState {
  themeKey: ThemeKey;
  setThemeKey: (key: ThemeKey) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      themeKey: 'stdLight',
      setThemeKey: (key) => set({ themeKey: key }),
    }),
    {
      name: 'theme-storage',
      storage: themeStore,
    } as unknown as PersistOptions<ThemeState>
  )
);

// Hook para usar no app
export function useTheme() {
  const themeKey = useThemeStore((state) => state.themeKey);
  const setThemeKey = useThemeStore((state) => state.setThemeKey);

  const theme = themeMap[themeKey];

  return { themeKey, theme, themeMap, setThemeKey };
}

// Contexto de provider do tema
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();
  return <PaperProvider theme={theme}>{children}</PaperProvider>;
};

// Utilitário fora do React (ex: usar em config/Toast etc)
export const getCurrentTheme = (): PaperTheme => {
  const key = useThemeStore.getState().themeKey;
  return themeMap[key];
};

