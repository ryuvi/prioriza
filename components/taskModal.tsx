import { useModalStore } from "@/stores/useModalStore";
import { useStreakStore } from "@/stores/useStreakStore";
import { useTaskStore } from "@/stores/useTaskStore";
import React, { useState, useEffect } from "react";
import { KeyboardAvoidingView, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import {
  Button,
  Modal,
  Portal,
  Text,
  TextInput,
  useTheme,
} from "react-native-paper";

const TaskModal = () => {
  const { visible, hideModal, editableTask } = useModalStore();
  const { colors } = useTheme();
  const { addTask, updateTask } = useTaskStore();
  const { registerActivity } = useStreakStore(); 

  const [task, setTask] = useState({
    name: "",
    description: "",
    priority: 1,
    dueDate: "", // novo campo
    category: "",
  });

  // Sincroniza estado local com editableTask
  useEffect(() => {
    if (visible) {
      if (editableTask) {
        setTask({
          name: editableTask.name,
          description: editableTask.description ?? "",
          priority: editableTask.priority ?? 1,
          dueDate: editableTask.dueDate ?? "", // já seta o dueDate existente
          category: editableTask.category ?? "",
        });
      } else {
        setTask({
          name: "",
          description: "",
          priority: 1,
          dueDate: "",
          category: "",
        });
      }
    }
  }, [visible, editableTask]);

  const handleSave = () => {
    if (!task.name.trim()) return;
    registerActivity();
    addTask(
      task.name.trim(),
      task.description.trim(),
      task.priority,
      task.dueDate.trim() || undefined, // repassa a dueDate para addTask, ou undefined se vazio
      task.category.trim() || undefined
    );
    hideModal();
  };

  const handleUpdate = () => {
    if (!editableTask) return;
    if (!task.name.trim()) return;
    registerActivity();
    updateTask({ ...editableTask, ...task });
    hideModal();
  };

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={{
          margin: 20,
          padding: 20,
          backgroundColor: colors.surface,
          borderRadius: 8,
          zIndex: 2,
        }}
      >
        <Text variant="titleLarge" style={{ marginBottom: 24 }}>
          {editableTask ? "Editar Tarefa" : "Nova Tarefa"}
        </Text>
        <TextInput
          mode="outlined"
          label="Título"
          autoFocus
          style={{ marginBottom: 16 }}
          value={task.name}
          onChangeText={(name) => setTask((old) => ({ ...old, name }))}
          returnKeyType="done"
        />
        <TextInput
          mode="outlined"
          label="Descrição"
          multiline
          style={{ marginBottom: 16 }}
          value={task.description}
          onChangeText={(description) =>
            setTask((old) => ({ ...old, description }))
          }
        />
        <Text>Prioridade:</Text>
        <Dropdown
          labelField="label"
          valueField="value"
          value={task.priority}
          onChange={(item) => setTask((old) => ({ ...old, priority: item.value }))}
          data={[
            { label: "Baixa", value: 1 },
            { label: "Media", value: 2 },
            { label: "Alta", value: 3 },
          ]}
          style={{
            backgroundColor: colors.surfaceVariant,
            borderRadius: 8,
            paddingHorizontal: 12,
            paddingVertical: 8,
            marginBottom: 24,
          }}
          selectedTextStyle={{ color: colors.onSurface }}
          containerStyle={{
            backgroundColor: colors.surfaceVariant,
            borderRadius: 8,
          }}
          itemTextStyle={{ color: colors.onPrimaryContainer }}
          activeColor={colors.primaryContainer}
        />

        {/* Campo novo para dueDate */}
        <TextInput
          mode="outlined"
          label="Data Limite (DD-MM-AAAA)"
          style={{ marginBottom: 16 }}
          value={task.dueDate}
          onChangeText={(dueDate) => setTask((old) => ({ ...old, dueDate }))}
          placeholder="Ex: 08-06-2025"
          keyboardType="numeric"
        />

        
        <TextInput
          mode="outlined"
          label="Categoria"
          multiline
          style={{ marginBottom: 16 }}
          value={task.category}
          onChangeText={(category) =>
            setTask((old) => ({ ...old, category }))
          }
        />

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Button mode="text" onPress={hideModal} textColor={colors.primary}>
            Cancelar
          </Button>
          {editableTask ? (
            <Button
              mode="contained"
              onPress={handleUpdate}
              disabled={!task.name.trim()}
              buttonColor={colors.primary}
              textColor={colors.onPrimary}
            >
              Atualizar
            </Button>
          ) : (
            <Button
              mode="contained"
              onPress={handleSave}
              disabled={!task.name.trim()}
              buttonColor={colors.primary}
              textColor={colors.onPrimary}
            >
              Salvar
            </Button>
          )}
        </View>
      </Modal>
    </Portal>
  );
};

export default TaskModal;
