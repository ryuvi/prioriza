import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import {
  Card,
  IconButton,
  useTheme,
  Text,
  Icon,
  Chip,
} from "react-native-paper";
import { Task } from "@/stores/useTaskStore";
import { useModalStore } from "@/stores/useModalStore";
import { useScoreStore } from "@/stores/useScoreStore";
import XPFloat from "./taskXPFloat";
import { useStreakStore } from "@/stores/useStreakStore";

interface TaskCardProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  task,
  onToggle,
  onDelete,
}) => {
  const { showModal, setEditableTask } = useModalStore();
  const { addScore } = useScoreStore();
  const { registerActivity } = useStreakStore();
  const { colors } = useTheme();

  const [showXP, setShowXP] = useState(false);

  let taskColors = "#4CAF50";
  let taskPriority = "Baixa";
  let taskScore = 10;

  if ((task.priority ?? 1) === 2) {
    taskColors = "#FFC107";
    taskPriority = "Media";
    taskScore = 20;
  } else if ((task.priority ?? 1) === 3) {
    taskColors = "#F44336";
    taskPriority = "Alta";
    taskScore = 30;
  }

  const handleComplete = () => {
    registerActivity()
    onToggle(task.id);
    addScore(taskScore);
    setShowXP(true);
  };

  return (
    <TouchableOpacity onPress={handleComplete} activeOpacity={0.9}>
      {showXP && <XPFloat amount={taskScore} onEnd={() => setShowXP(false)} />}
      <Card
        mode="elevated"
        style={[
          styles.card,
          {
            backgroundColor: colors.primaryContainer,
            borderColor: colors.outlineVariant,
          },
        ]}
      >
        <Card.Title
          titleStyle={[
            styles.title,
            {
              color: colors.onSurface,
              textDecorationLine: task.completed ? "line-through" : "none",
              opacity: task.completed ? 0.5 : 1,
            },
          ]}
          subtitleStyle={[
            styles.subtitle,
            {
              color: colors.onSurfaceVariant,
              opacity: task.completed ? 0.5 : 1,
            },
          ]}
          title={
            <Text>
              {task.completed && (
                <Icon source={"check"} color="#4CAF50" size={16} />
              )}{" "}
              {task.name}
            </Text>
          }
          subtitle={task.description}
          right={() => (
            <View style={{ flexDirection: "row" }}>
              <IconButton
                icon="pencil"
                iconColor={colors.secondary}
                onPress={() => {
                  setEditableTask(task);
                  showModal();
                }}
              />
              <IconButton
                icon="delete"
                iconColor={colors.error}
                onPress={() => {onDelete(task.id);registerActivity()}}
              />
            </View>
          )}
        />
        <Card.Content>
          <View style={{ flexDirection: "row" }}>
          {task.category &&
            task.category.split(",").map((category, index) => (
              <Chip
                mode="flat"
                key={index}
                icon={"tag"}
                style={{
                  alignSelf: "flex-start",
                  backgroundColor: colors.tertiaryContainer,
                  borderRadius: 50,
                  paddingVertical: 0,
                  paddingHorizontal: 0,
                  marginVertical: 5,
                  marginHorizontal: 5,
                }}
                textStyle={{
                  color: colors.onTertiaryContainer,
                  fontWeight: "600",
                  fontSize: 10,
                }}
                showSelectedOverlay={false}
              >
                {category}
              </Chip>
            ))}
            </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text variant="bodySmall">
              Prioridade:
              <Text style={{ color: taskColors }}> {taskPriority}</Text>
            </Text>
            {task.dueDate && (
              <Text variant="bodySmall">
                Prazo:
                <Text> {task.dueDate.replaceAll("-", "/")}</Text>
              </Text>
            )}
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    borderWidth: 1,
    elevation: 2,
    marginHorizontal: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 13,
  },
});
