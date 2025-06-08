import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { achievementsList } from "@constants/achievementsList";

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
  checkAchievements: (
    userData: {
      score: number;
      level: number;
      tasksCompleted: number;
      dayStreak: number;
    },
    onUnlock?: (achievement: Achievement) => void
  ) => void;
}

export const useAchievementsStore = create<AchievementsState>()(
  persist(
    (set, get) => ({
      achievements: achievementsList,

      checkAchievements: (userData, onUnlock) => {
        const { achievements } = get();
        const newlyCompleted: Achievement[] = [];

        const updated = achievements.map((a) => {
          if (a.completed) return a;

          const passed =
            (a.condition.type === "score" && userData.score >= a.condition.value) ||
            (a.condition.type === "level" && userData.level >= a.condition.value) ||
            (a.condition.type === "tasksCompleted" && userData.tasksCompleted >= a.condition.value) ||
            (a.condition.type === "dayStreak" && userData.dayStreak >= a.condition.value);

          if (passed) {
            const completedAchievement = { ...a, completed: true };
            newlyCompleted.push(completedAchievement);
            return completedAchievement;
          }

          return a;
        });

        set({ achievements: updated });

        // Trigger callback for each unlocked achievement
        if (onUnlock && newlyCompleted.length > 0) {
          newlyCompleted.forEach(onUnlock);
        }
      },
    }),
    {
      name: "achievements-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
