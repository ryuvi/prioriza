import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Card, IconButton, useTheme, Text } from 'react-native-paper';
import { Task } from '@/stores/useTaskStore';
import { useModalStore } from '@/stores/useModalStore';

interface TaskCardProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, onToggle, onDelete }) => {
  const { showModal, setEditableTask } = useModalStore();
  const { colors } = useTheme();
  let taskColors = '#4CAF50'
  let taskPriority = 'Baixa'

  if ((task.priority ?? 1) === 2) {
    taskColors = '#FFC107'
    taskPriority = 'Normal'
  } else if ((task.priority ?? 1) === 3) {
    taskColors = '#F44336'
    taskPriority = 'Alta'
  }

  return (
    <TouchableOpacity onPress={() => onToggle(task.id)} activeOpacity={0.9}>
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
              textDecorationLine: task.completed ? 'line-through' : 'none',
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
          title={task.name}
          subtitle={task.description}
          right={() => (
            <View style={{ flexDirection: 'row' }}>
              <IconButton
                icon="pencil"
                iconColor={colors.secondary}
                onPress={() => {setEditableTask(task); showModal()}}
              />
              <IconButton
                icon="delete"
                iconColor={colors.error}
                onPress={() => onDelete(task.id)}
              />
            </View>
          )}
        />
        <Card.Content>
          <Text variant='bodySmall'>Prioridade:
            <Text style={{ color: taskColors }}> {taskPriority}</Text>
          </Text>
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
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 13,
  },
});