import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ScoreState {
  score: number;
  level: number;
  addScore: (score: number) => void;
}

export const useScoreStore = create<ScoreState>()(
  persist(
    (set) => ({
      score: 0,
      level: 1,
      addScore: (score: number) => set(state => {
          const newScore = state.score + score
          const newLevel = Math.floor(newScore / 100) + 1
          return { score: newScore, level: newLevel }
      }),
    }),
    {
      name: "score-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
