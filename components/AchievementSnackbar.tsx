import React, { useState } from "react";
import { Snackbar, Text, useTheme } from "react-native-paper";
import { Achievement } from "@/stores/useAchievementsStore";

export function useAchievementSnackbar() {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState<{ title: string; description: string } | null>(null);

  const showAchievement = (achievement: Achievement) => {
    setMessage({
      title: achievement.name,
      description: achievement.description,
    });
    setVisible(true);
  };

  const SnackbarComponent = () => {
    const { colors } = useTheme();
    return (
      <Snackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
        duration={3000}
        style={{ backgroundColor: colors.primary }}
      >
        <Text variant="titleSmall" style={{ color: colors.onPrimary }}>
          🏆 {message?.title}
        </Text>
        <Text variant="bodySmall" style={{ color: colors.onPrimary }}>
          {message?.description}
        </Text>
      </Snackbar>
    );
  };

  return { SnackbarComponent, showAchievement };
}
