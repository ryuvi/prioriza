import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { isToday, isYesterday, formatISO } from "date-fns";

interface StreakState {
  streak: number;
  lastActiveDate: string | null;
  registerActivity: () => void;
}

export const useStreakStore = create<StreakState>()(
  persist(
    (set, get) => ({
      streak: 0,
      lastActiveDate: null,
      registerActivity: () => {
        const now = new Date();
        const last = get().lastActiveDate
          ? new Date(get().lastActiveDate ?? 0)
          : null;

        if (last && isToday(last)) return; // já contou hoje

        let newStreak = get().streak;

        if (last && isYesterday(last)) {
          newStreak += 1;
        } else {
          newStreak = 1;
        }

        set({
          streak: newStreak,
          lastActiveDate: formatISO(now, { representation: "date" }),
        });
      },
    }),
    {
      name: "streak-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
