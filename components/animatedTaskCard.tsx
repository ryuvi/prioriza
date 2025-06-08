import React, { useEffect, useRef } from "react";
import { Animated, ViewStyle } from "react-native";
import { Task } from "@/stores/useTaskStore";
import { TaskCard } from "./taskCard";

interface AnimatedTaskCardProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  index: number;
}

export function AnimatedTaskCard({ task, onToggle, onDelete, index }: AnimatedTaskCardProps) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        delay: index * 80,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 400,
        delay: index * 80,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const animatedStyle: Animated.WithAnimatedObject<ViewStyle> = {
    opacity: fadeAnim,
    transform: [{ translateY }],
  };

  return (
    <Animated.View style={animatedStyle}>
      <TaskCard task={task} onToggle={onToggle} onDelete={onDelete} />
    </Animated.View>
  );
}
