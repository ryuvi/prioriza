import React from "react";
import { Appbar, Text, useTheme, ProgressBar } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";
import { useScoreStore } from "@/stores/useScore";

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

export default function Header() {
  const { colors } = useTheme();
  const { score } = useScoreStore();
  const { level, progressToNext, nextLevelThreshold, percentToNext } = getLevelData(score);

  return (
    <View style={styles.container}>
      <BlurView tint="dark" intensity={50} style={StyleSheet.absoluteFill} />
      <Appbar.Header
        style={[
          styles.header,
          {
            backgroundColor: `${colors.primaryContainer}cc`,
          },
        ]}
      >
        <Appbar.Content
          title="Tarefas"
          titleStyle={{ color: colors.onPrimaryContainer }}
        />
        <View style={styles.scoreContainer}>
          <Text style={[styles.scoreText, { color: colors.onPrimaryContainer }]}>
            Nível: {level}
          </Text>
          <Text style={[styles.pointsText, { color: colors.onPrimaryContainer }]}>
            {progressToNext}/{nextLevelThreshold} XP
          </Text>
          <ProgressBar
            animatedValue={percentToNext}
            color={colors.primary}
            style={styles.progress}
            fillStyle={{ backgroundColor: colors.primary }}
            visible={true}
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
    backgroundColor: "transparent",
    elevation: 0,
  },
  scoreContainer: {
    alignItems: "flex-end",
    justifyContent: "center",
    minWidth: 120,
  },
  scoreText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  pointsText: {
    fontSize: 12,
    marginBottom: 4,
  },
  progress: {
    height: 6,
    borderRadius: 3,
    width: 50,
    backgroundColor: 'grey'
  },
});
