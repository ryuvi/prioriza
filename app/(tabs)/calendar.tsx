import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text, useTheme, Card } from "react-native-paper";
import { Calendar, DateData } from "react-native-calendars";
import { useStreakStore } from "@/stores/useStreakStore";

const today = new Date().toISOString().split("T")[0];

function markActiveDays(days: string[], colors: any) {
  const marks: Record<string, any> = {};
  days.forEach((day) => {
    marks[day] = {
      marked: true,
      dotColor: colors.primary,
      activeOpacity: 0,
    };
  });
  return marks;
}

export default function CalendarMonitoring() {
  const { colors } = useTheme();
  const { streak, activeDates } = useStreakStore();
  const [selectedDate, setSelectedDate] = useState(today);

  const markedDates = markActiveDays(activeDates, colors);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.background }}>
      <Card style={styles.card}>
        <Card.Title
          title="Calendário"
          subtitle={`Streak Atual: ${streak} dias`}
        />
        <Card.Content>
          <Calendar
            current={today}
            markedDates={{
              ...markedDates,
              [selectedDate]: { selected: true, selectedColor: colors.primary },
            }}
            onDayPress={(day: DateData) => setSelectedDate(day.dateString)}
            theme={{
              selectedDayBackgroundColor: colors.primary,
              todayTextColor: colors.onPrimary,
              arrowColor: colors.primary,
              textDayFontWeight: "bold",
            }}
            style={{ borderRadius: 10 }}
          />
          <View style={styles.legendContainer}>
            <View style={[styles.legendDot, { backgroundColor: colors.primary }]} />
            <Text style={{ color: colors.primary }}>Dias Ativos</Text>
          </View>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 16,
    borderRadius: 12,
    elevation: 4,
  },
  legendContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  legendDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 8,
  },
});
