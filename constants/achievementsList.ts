import { Achievement } from "../stores/useAchievementsStore";

const streakAchievements: Achievement[] = [
  {
    id: "streak-1",
    name: "Primeiro Passo",
    description: "Volte amanhã para continuar a jornada!",
    completed: false,
    condition: { type: "dayStreak", value: 1 },
  },
  {
    id: "streak-3",
    name: "Trinca de Ouro",
    description: "Três dias seguidos! Tá ficando sério!",
    completed: false,
    condition: { type: "dayStreak", value: 3 },
  },
  {
    id: "streak-7",
    name: "Uma Semana",
    description: "Sete dias seguidos de produtividade. Parabéns!",
    completed: false,
    condition: { type: "dayStreak", value: 7 },
  },
  {
    id: "streak-14",
    name: "Duas Semanas",
    description: "Você está criando um hábito.",
    completed: false,
    condition: { type: "dayStreak", value: 14 },
  },
  {
    id: "streak-21",
    name: "Vinte e Um",
    description: "Constância é a chave do sucesso.",
    completed: false,
    condition: { type: "dayStreak", value: 21 },
  },
  {
    id: "streak-30",
    name: "Um Mês Inteiro",
    description: "Um mês sem falhar. Incrível!",
    completed: false,
    condition: { type: "dayStreak", value: 30 },
  },
  {
    id: "streak-50",
    name: "Meio Século",
    description: "50 dias seguidos é um feito pra poucos.",
    completed: false,
    condition: { type: "dayStreak", value: 50 },
  },
  {
    id: "streak-75",
    name: "Três Quinas",
    description: "Você está dominando sua rotina!",
    completed: false,
    condition: { type: "dayStreak", value: 75 },
  },
  {
    id: "streak-100",
    name: "Centurião",
    description: "100 dias seguidos. Você é imparável.",
    completed: false,
    condition: { type: "dayStreak", value: 100 },
  },
  {
    id: "streak-150",
    name: "Foco Total",
    description: "150 dias mantendo o hábito.",
    completed: false,
    condition: { type: "dayStreak", value: 150 },
  },
  {
    id: "streak-200",
    name: "Bicentenário",
    description: "200 dias na missão. Você é referência!",
    completed: false,
    condition: { type: "dayStreak", value: 200 },
  },
  {
    id: "streak-250",
    name: "Quase Lá",
    description: "A reta final está logo ali.",
    completed: false,
    condition: { type: "dayStreak", value: 250 },
  },
  {
    id: "streak-300",
    name: "Três Centenas",
    description: "300 dias de disciplina. Uau.",
    completed: false,
    condition: { type: "dayStreak", value: 300 },
  },
  {
    id: "streak-365",
    name: "Um Ano Perfeito",
    description: "Um ano inteiro sem quebrar o streak. Exemplar.",
    completed: false,
    condition: { type: "dayStreak", value: 365 },
  },
];

const scoreAchievements: Achievement[] = [
  {
    id: "score-100",
    name: "Primeiros 100",
    description: "Acumule 100 pontos de XP.",
    completed: false,
    condition: { type: "score", value: 100 },
  },
  {
    id: "score-500",
    name: "Meio Milhar",
    description: "Acumule 500 pontos de XP.",
    completed: false,
    condition: { type: "score", value: 500 },
  },
  {
    id: "score-1000",
    name: "Milagre",
    description: "1.000 pontos! Você está voando.",
    completed: false,
    condition: { type: "score", value: 1000 },
  },
  {
    id: "score-2500",
    name: "XP Master",
    description: "Acumule 2.500 XP no app.",
    completed: false,
    condition: { type: "score", value: 2500 },
  },
  {
    id: "score-5000",
    name: "Maratonista",
    description: "5.000 pontos de XP conquistados!",
    completed: false,
    condition: { type: "score", value: 5000 },
  },
  {
    id: "score-10000",
    name: "Lendário",
    description: "10.000 XP acumulados. Respeito.",
    completed: false,
    condition: { type: "score", value: 10000 },
  },
];

const levelAchievements: Achievement[] = [
  {
    id: "level-2",
    name: "Subiu de Nível",
    description: "Alcance o nível 2.",
    completed: false,
    condition: { type: "level", value: 2 },
  },
  {
    id: "level-5",
    name: "Top 5",
    description: "Alcance o nível 5.",
    completed: false,
    condition: { type: "level", value: 5 },
  },
  {
    id: "level-10",
    name: "Dez é só o começo",
    description: "Nível 10 alcançado!",
    completed: false,
    condition: { type: "level", value: 10 },
  },
  {
    id: "level-15",
    name: "Veterano",
    description: "Nível 15 desbloqueado.",
    completed: false,
    condition: { type: "level", value: 15 },
  },
  {
    id: "level-20",
    name: "Mestre da Produtividade",
    description: "Nível 20 alcançado. Incrível!",
    completed: false,
    condition: { type: "level", value: 20 },
  },
];

const taskAchievements: Achievement[] = [
  {
    id: "tasks-1",
    name: "Primeira Missão",
    description: "Conclua sua primeira tarefa.",
    completed: false,
    condition: { type: "tasksCompleted", value: 1 },
  },
  {
    id: "tasks-10",
    name: "Dez Tarefas",
    description: "10 tarefas concluídas!",
    completed: false,
    condition: { type: "tasksCompleted", value: 10 },
  },
  {
    id: "tasks-25",
    name: "Produtivo",
    description: "Conclua 25 tarefas.",
    completed: false,
    condition: { type: "tasksCompleted", value: 25 },
  },
  {
    id: "tasks-50",
    name: "Executor",
    description: "50 tarefas riscadas da lista!",
    completed: false,
    condition: { type: "tasksCompleted", value: 50 },
  },
  {
    id: "tasks-100",
    name: "Centenário",
    description: "100 tarefas concluídas. Você é imparável.",
    completed: false,
    condition: { type: "tasksCompleted", value: 100 },
  },
  {
    id: "tasks-250",
    name: "Insano",
    description: "250 tarefas completadas. Lenda viva.",
    completed: false,
    condition: { type: "tasksCompleted", value: 250 },
  },
];

export const achievementsList: Achievement[] = [
    ...taskAchievements,
    ...levelAchievements,
    ...scoreAchievements,
    ...streakAchievements
];