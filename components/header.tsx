import React from "react";
import { Appbar, Text, useTheme, ProgressBar } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";
import { useScoreStore } from "@/stores/useScoreStore";
import { useStreakStore } from "@/stores/useStreakStore";

const BASE_POINTS = 100;
const GROWTH_RATE = 1.5;

function getLevelData(score: number) {
  let level = 1;
  let requiredPoints = BASE_POINTS;
  let accumulated = 0;

  while (score >= requiredPoints) {
    score -= requiredPoints;
    accumulated += requiredPoints;
    requiredPoints = Math.floor(requiredPoints * GROWTH_RATE);
    level++;
  }

  return {
    level,
    progressToNext: score,
    nextLevelThreshold: requiredPoints,
    percentToNext: score / requiredPoints,
  };
}

export default function Header({ title }: { title: string }) {
  const { colors } = useTheme();
  const { score } = useScoreStore();
  const { level, progressToNext, nextLevelThreshold, percentToNext } = getLevelData(score);
  const { streak } = useStreakStore();

  return (
    <View style={styles.container}>
      <BlurView tint="dark" intensity={50} style={StyleSheet.absoluteFill} />
      <Appbar.Header style={[styles.header, { backgroundColor: `${colors.primaryContainer}cc` }]}>
        {/* Streak */}
        <View style={styles.infoBlock}>
          <Text style={[styles.label, { color: colors.onPrimaryContainer }]}>Streak 🔥</Text>
          <Text style={[styles.value, { color: colors.onPrimaryContainer }]}>{streak} dias</Text>
        </View>

        {/* Título */}
        <View style={styles.titleBlock}>
          <Text style={[styles.title, { color: colors.onPrimaryContainer }]}>{title}</Text>
        </View>

        {/* Level / XP */}
        <View style={styles.infoBlockRight}>
          <Text style={[styles.label, { color: colors.onPrimaryContainer }]}>Nível {level}</Text>
          <Text style={[styles.valueSmall, { color: colors.onPrimaryContainer }]}>
            {progressToNext}/{nextLevelThreshold} XP
          </Text>
          <ProgressBar
            animatedValue={percentToNext}
            color={colors.primary}
            style={styles.progress}
            visible
          />
        </View>
      </Appbar.Header>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    zIndex: 1,
  },
  header: {
    elevation: 0,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  infoBlock: {
    alignItems: "flex-start",
  },
  infoBlockRight: {
    alignItems: "flex-end",
  },
  titleBlock: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
  },
  value: {
    fontSize: 16,
    fontWeight: "500",
  },
  valueSmall: {
    fontSize: 12,
    fontWeight: "400",
    marginBottom: 4,
  },
  progress: {
    height: 6,
    width: 60,
    borderRadius: 3,
    backgroundColor: "#cccccc80",
  },
});
