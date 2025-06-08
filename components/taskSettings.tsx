import { useSettingsStore } from "@/stores/useSettingsStore";
import { useTheme as customerTheme, ThemeKey } from "@/src/themeProvider";
import React, { useState, useEffect } from "react";
import { Button, Modal, Portal, Text, useTheme } from "react-native-paper";
import { Dropdown } from "react-native-element-dropdown";
import { View } from "react-native";

const ModalSettings = () => {
  const { settingsVisible, hideSettings } = useSettingsStore();
  const { colors } = useTheme();
  const { themeKey, setThemeKey } = customerTheme();

  const [selectedTheme, setSelectedTheme] = useState<ThemeKey>(themeKey);

  const availableThemes = [
    { label: "Padrão Claro", value: "stdLight" },
    { label: "Padrão Escuro", value: "stdDark" },
    { label: "Dracula", value: "dracula" },
    { label: "Rosa Pastel", value: "pastelPink" },
    { label: "Azul Safira", value: "saphire" },
    { label: "Verde Água", value: "acquaGreen" },
    { label: "Vermelho e Preto", value: "redBlack" },
    { label: 'Rosé Pine', value: "rosePine" },
    { label: 'Catppuccin', value: "catppuccin" },
  ];

  // Sincroniza o estado local com o tema atual sempre que o modal abre
  useEffect(() => {
    if (settingsVisible) {
      setSelectedTheme(themeKey);
    }
  }, [settingsVisible, themeKey]);

  return (
    <Portal>
      <Modal
        visible={settingsVisible}
        onDismiss={hideSettings}
        contentContainerStyle={{
          margin: 20,
          padding: 20,
          backgroundColor: colors.surface,
          borderRadius: 8,
        }}
      >
        <Text variant="titleLarge" style={{ color: colors.onSurface, marginBottom: 24 }}>
          Configurações
        </Text>
        <Text
          style={{
            color: colors.onSurface,
            fontWeight: "600",
            fontSize: 16,
            marginBottom: 10,
          }}
        >
          Selecione um Tema:
        </Text>

        <Dropdown
          data={availableThemes}
          labelField="label"
          valueField="value"
          value={selectedTheme}
          onChange={(item) => setSelectedTheme(item.value as ThemeKey)}
          style={{
            backgroundColor: colors.surfaceVariant,
            borderRadius: 8,
            paddingHorizontal: 12,
            paddingVertical: 8,
            marginBottom: 24,
          }}
          selectedTextStyle={{ color: colors.onSurface }}
          containerStyle={{
            backgroundColor: colors.surfaceVariant,
            borderRadius: 8,
          }}
          itemTextStyle={{ color: colors.onSurfaceVariant }}
          activeColor={colors.secondary}
          placeholder="Escolha um tema"
          placeholderStyle={{ color: colors.onSurfaceVariant }}
        />

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Button
            mode="text"
            onPress={hideSettings}
            textColor={colors.primary}
          >
            Cancelar
          </Button>
          <Button
            mode="contained"
            onPress={() => {
              setThemeKey(selectedTheme);
              hideSettings();
            }}
            buttonColor={colors.primary}
            textColor={colors.onPrimary}
            disabled={selectedTheme === themeKey} // opcional, evita salvar sem mudanças
          >
            Salvar
          </Button>
        </View>
      </Modal>
    </Portal>
  );
};

export default ModalSettings;