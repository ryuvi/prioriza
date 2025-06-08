import React, { useState } from "react";
import { Portal, FAB, useTheme } from "react-native-paper";
import { useModalStore } from "@/stores/useModalStore";
import { useSettingsStore } from "@/stores/useSettingsStore";

export default function TaskFAB() {
  const { showModal } = useModalStore();
  const { showSettings } = useSettingsStore();
  const { colors } = useTheme();
  const [open, setOpen] = useState(false);

  const actions = [
    {
      icon: "plus",
      label: "Nova Tarefa",
      onPress: () => {
        showModal();
        setOpen(false);
      },
      small: false,
      color: colors.primary,
    },
    {
      icon: "cog",
      label: "Configurações",
      onPress: () => {
        showSettings();
        setOpen(false);
      },
      small: false,
      color: colors.primary,
    },
  ];

  return (
    <Portal>
      <FAB.Group
        open={open}
        icon={open ? "close" : "plus"}
        actions={actions}
        onStateChange={({ open }) => setOpen(open)}
        style={{
          position: "absolute",
          right: 8,
          bottom: 0,
          elevation: 6,
        }}
        fabStyle={{
          backgroundColor: colors.primary,
          elevation: 8,
        }}
        color={colors.onPrimary}
        visible
      />
    </Portal>
  );
}