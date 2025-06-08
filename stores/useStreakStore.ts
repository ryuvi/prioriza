import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { isToday, isYesterday, formatISO } from "date-fns";

interface StreakState {
  streak: number;
  lastActiveDate: string | null;
  activeDates: string[]; // novo array para dias ativos
  registerActivity: () => void;
}

export const useStreakStore = create<StreakState>()(
  persist(
    (set, get) => ({
      streak: 1,
      lastActiveDate: null,
      activeDates: [],
      registerActivity: () => {
        const now = new Date();
        const todayStr = formatISO(now, { representation: "date" });
        const last = get().lastActiveDate ? new Date(get().lastActiveDate ?? 0) : null;
        const activeDates = get().activeDates;

        if (last && isToday(last)) return; // já contou hoje

        let newStreak = get().streak;

        if (last && isYesterday(last)) {
          newStreak += 1;
        } else {
          newStreak = 1;
        }

        // adiciona o dia atual ao array se não existir
        const newActiveDates = activeDates.includes(todayStr)
          ? activeDates
          : [...activeDates, todayStr];

        set({
          streak: newStreak,
          lastActiveDate: todayStr,
          activeDates: newActiveDates,
        });
      },
    }),
    {
      name: "streak-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
