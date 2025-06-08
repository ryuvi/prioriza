import { Tabs } from 'expo-router';
import { Icon, useTheme } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import Header from '@/components/header';

export default function TabsLayout() {
  const { colors } = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.onSurfaceVariant,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.outlineVariant,
        },
        headerStyle: {
          backgroundColor: colors.surface,
        },
        headerTintColor: colors.onSurface,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tarefas',
          tabBarIcon: ({ color, size, focused }) => (
            <Icon source={focused ? "home" : "home-outline"} size={size} color={color} />
          ),
          header: () => <Header title="Tarefas" />
        }}
      />
      <Tabs.Screen
        name="achievements"
        options={{
          title: 'Conquistas',
          tabBarIcon: ({ color, size, focused }) => (
            <Icon source={focused ? "trophy" : "trophy-outline"} size={size} color={color} />
          ),
          header: () => <Header title="Conquistas" />
        }}
        />
      <Tabs.Screen
        name="calendar"
        options={{
          title: 'Calendário',

          tabBarIcon: ({ color, size, focused }) => (
            <Icon source={focused ? "calendar-month" : "calendar-month-outline"} size={size} color={color} />
          ),
          header: () => <Header title="Calendário" />
        }}
      />
    </Tabs>
  );
}
