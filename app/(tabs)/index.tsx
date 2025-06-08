import React, { useEffect, useMemo } from "react";
import { Animated, FlatList, KeyboardAvoidingView, Platform, SafeAreaView, Text, View } from "react-native";
import { Portal, useTheme } from "react-native-paper";
import { useTaskStore, Task } from "@/stores/useTaskStore";
import { TaskCard } from "@/components/taskCard";
import TaskModal from "@/components/taskModal";
import TaskFAB from "@/components/taskFAB";
import ModalSettings from "@/components/taskSettings";
import { AnimatedTaskCard } from "@/components/animatedTaskCard";
import { useScoreStore } from "@/stores/useScoreStore";
import { useAchievementsStore } from "@/stores/useAchievementsStore";
import { useAchievementSnackbar } from "@/components/AchievementSnackbar";

// Tipando o componente de lista animada
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList<Task>);

export default function Index() {
  const { tasks, removeTask, toggleTask } = useTaskStore();
  const { colors } = useTheme();
  const { score, level } = useScoreStore()
  const { checkAchievements } = useAchievementsStore()
  const { SnackbarComponent, showAchievement } = useAchievementSnackbar();

  const sortedTasks = useMemo(() => {
    return [...tasks].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }, [tasks]);

  useEffect(() => {
    checkAchievements({score, level, tasksCompleted: 1, dayStreak: 1}, showAchievement);

  }, [score,level])

  return (
    <Portal.Host>
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
        <AnimatedFlatList
          data={sortedTasks}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            gap: 12,
            padding: 12,
            paddingBottom: 96, // espaço para o FAB
          }}
          renderItem={({ item, index }) => (
            <AnimatedTaskCard task={item} onToggle={toggleTask} onDelete={removeTask} index={index} />
          )}
          ListEmptyComponent={
            <View style={{ paddingTop: 32, alignItems: "center" }}>
              <Text style={{ color: colors.onBackground, fontSize: 16 }}>
                Nenhuma tarefa por aqui!
              </Text>
            </View>
          }
          initialNumToRender={6}
          maxToRenderPerBatch={10}
          removeClippedSubviews={true}
        />
        <ModalSettings />
        <TaskModal />
        <TaskFAB />
        <SnackbarComponent />
      </SafeAreaView>
    </Portal.Host>
  );
}
