import React, { useMemo } from "react";
import { Animated, FlatList, SafeAreaView, Text, View } from "react-native";
import { Portal, useTheme } from "react-native-paper";
import { useTaskStore, Task } from "@/stores/useTaskStore";
import { TaskCard } from "@/components/taskCard";
import TaskModal from "@/components/taskModal";
import TaskFAB from "@/components/taskFAB";
import ModalSettings from "@/components/taskSettings";

// Tipando o componente de lista animada
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList<Task>);

export default function Index() {
  const { tasks, removeTask, toggleTask } = useTaskStore();
  const { colors } = useTheme();

  const sortedTasks = useMemo(() => {
    return [...tasks].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }, [tasks]);

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
          renderItem={({ item }) => (
            <TaskCard task={item} onToggle={toggleTask} onDelete={removeTask} />
          )}
          ListEmptyComponent={
            <View style={{ paddingTop: 32, alignItems: "center" }}>
              <Text style={{ color: colors.onBackground, fontSize: 16 }}>
                Nenhuma tarefa por aqui!
              </Text>
            </View>
          }
        />
        <ModalSettings />
        <TaskModal />
        <TaskFAB />
      </SafeAreaView>
    </Portal.Host>
  );
}
