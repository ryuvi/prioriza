import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { achievementsList } from "@constants/achievementsList";
import AsyncStorage from "@react-native-async-storage/async-storage";

type ConditionType = "score" | "level" | "tasksCompleted" | "dayStreak";

interface Condition {
  type: ConditionType;
  value: number;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  completed: boolean;
  condition: Condition;
}

interface AchievementsState {
  achievements: Achievement[];
  checkAchievements: (userData: {
    score: number;
    level: number;
    tasksCompleted: number;
    dayStreak: number;
  }) => void;
}

export const useAchievementsStore = create<AchievementsState>()(
  persist(
    (set, get) => ({
      achievements: achievementsList,
      checkAchievements: ({ score, level, tasksCompleted, dayStreak }) => {
        const { achievements } = get();

        const updated = achievements.map((a) => {
          if (a.completed) return a;

          const { type, value } = a.condition;

          const passed =
            (type === "score" && score >= value) ||
            (type === "level" && level >= value) ||
            (type === "tasksCompleted" && tasksCompleted >= value) ||
            (type === "dayStreak" && dayStreak >= value);

          return { ...a, completed: passed };
        });

        set({ achievements: updated });
      },
    }),
    {
      name: "achievements-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);