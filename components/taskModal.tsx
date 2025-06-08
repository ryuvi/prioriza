import { useModalStore } from "@/stores/useModalStore";
import { useTaskStore, Task } from "@/stores/useTaskStore";
import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { Button, Modal, Portal, Text, TextInput, useTheme } from "react-native-paper";

const TaskModal = () => {
  const { visible, hideModal, editableTask } = useModalStore(); // Peguei editableTask direto aqui
  const { colors } = useTheme();
  const { addTask, updateTask } = useTaskStore();

  const [task, setTask] = useState({
    name: "",
    description: "",
    priority: 1,
  });

  // Sincroniza o estado local com o editableTask sempre que o modal abrir ou editableTask mudar
  useEffect(() => {
    if (visible) {
      if (editableTask) {
        setTask({
          name: editableTask.name,
          description: editableTask.description ?? '',
          priority: editableTask.priority ?? 1,
        });
      } else {
        setTask({
          name: "",
          description: "",
          priority: 1,
        });
      }
    }
  }, [visible, editableTask]);

  const handleSave = () => {
    if (!task.name.trim()) return;
    addTask(task.name.trim(), task.description.trim(), task.priority);
    hideModal();
  };

  const handleUpdate = () => {
    if (!editableTask) return;
    if (!task.name.trim()) return;
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
          onChangeText={(description) => setTask((old) => ({ ...old, description }))}
        />
        <Text>Prioridade:</Text>
        <Dropdown
          labelField="label"
          valueField="value"
          value={task.priority}
          onChange={(item) => setTask((old) => ({ ...old, priority: item.value }))}
          data={[
            { label: "Baixa", value: 1 },
            { label: "Normal", value: 2 },
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
          itemTextStyle={{ color: colors.onSurfaceVariant }}
          activeColor={colors.secondary}
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