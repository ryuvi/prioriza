import React, { useEffect, useRef } from "react";
import { Animated, Text, StyleSheet } from "react-native";

interface Props {
  amount: number;
  onEnd?: () => void;
}

export default function XPFloat({ amount, onEnd }: Props) {
  const opacity = useRef(new Animated.Value(1)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: -40,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start(() => {
      if (onEnd) onEnd();
    });
  }, []);

  return (
    <Animated.Text
      style={[
        styles.xpText,
        {
          opacity,
          transform: [{ translateY }],
        },
      ]}
    >
      +{amount} XP
    </Animated.Text>
  );
}

const styles = StyleSheet.create({
  xpText: {
    position: "absolute",
    color: "#4CAF50",
    fontWeight: "bold",
    fontSize: 16,
    top: 0,
    alignSelf: "center",
    zIndex: 999,
    elevation: 999,
  },
});
