import React from "react";
import { Appbar, useTheme } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";

export default function Header() {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <BlurView tint="dark" intensity={50} style={StyleSheet.absoluteFill} />
      <Appbar.Header
        style={[
          styles.header,
          {
            backgroundColor: `${colors.primaryContainer}cc`, // com alpha (80% opacidade)
          },
        ]}
      >
        <Appbar.Content
          title="Tarefas"
          titleStyle={{ color: colors.onPrimaryContainer }}
        />
      </Appbar.Header>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    zIndex: 10,
  },
  header: {
    backgroundColor: "transparent",
    elevation: 0,
  },
});