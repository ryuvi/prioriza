import { View, FlatList } from 'react-native';
import { Text, useTheme, Card, Icon, Badge, Chip } from 'react-native-paper';
import { useAchievementsStore } from '@/stores/useAchievementsStore';
import { useState } from 'react';

export default function AchievementsScreen() {
  const { achievements } = useAchievementsStore();
  const { colors } = useTheme();
  const [ isCompleted, setIsCompleted ] = useState(false)
  const [ isPendente, setIsPendente ] = useState(false)

  const achFilter = achievements.filter((ach) => {
    if (isCompleted) {
      return ach.completed
    } else if (isPendente) {
      return !ach.completed
    } else {
      return ach
    }
  })

  return (
    <View style={{ flex: 1, backgroundColor: colors.background, padding: 16 }}>

      <View style={{ flexDirection: 'row', marginBottom: 16 }}>
        <Chip style={{ marginHorizontal: 5 }} icon={isCompleted ? 'minus' : 'check'} onPress={() => setIsCompleted(!isCompleted)}>Concluidos</Chip>
        <Chip style={{ marginHorizontal: 5 }} icon={isPendente ? 'minus' : 'check'} onPress={() => setIsPendente(!isPendente)}>Pendentes</Chip>
      </View>

      <FlatList
        data={achFilter}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            style={{
              marginBottom: 12,
              backgroundColor: item.completed ? colors.primaryContainer : colors.surfaceVariant,
              borderColor: item.completed ? colors.primary : colors.outlineVariant,
              borderWidth: 1,
              borderRadius: 12,
            }}
          >
            <Card.Title
              title={item.name}
              titleStyle={{ color: colors.onSurface, fontWeight: 'bold' }}
              subtitle={item.description}
              subtitleStyle={{ color: colors.onSurfaceVariant }}
              left={() =>
                item.completed ? (
                  <Icon source="check-circle" color={colors.primary} size={32} />
                ) : (
                  <Icon source="progress-clock" color={colors.outline} size={32} />
                )
              }
              right={() =>
                item.completed && (
                  <Badge
                    style={{
                      backgroundColor: colors.primary,
                      color: colors.onPrimary,
                      marginRight: 12,
                      alignSelf: 'center',
                    }}
                  >
                    Concluído
                  </Badge>
                )
              }
            />
          </Card>
        )}
      />
    </View>
  );
}