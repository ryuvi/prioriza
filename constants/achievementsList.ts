import { Achievement } from "../stores/useAchievementsStore";

export const achievementsList: Achievement[] = [
    {
        id: "score-100",
        name: "100 XP!",
        description: "Ganhe 100 pontos de XP.",
        completed: false,
        condition: { type: "score", value: 100 },
    },
    {
        id: "level-5",
        name: "Subida!",
        description: "Alcance o nível 5.",
        completed: false,
        condition: { type: "level", value: 5 },
    },
];