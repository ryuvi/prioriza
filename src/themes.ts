import { MD3DarkTheme, MD3LightTheme } from "react-native-paper";

export const dracula = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,

    primary: "#bd93f9", // Dracula purple
    onPrimary: "#1e1f29", // Texto escuro para contraste com roxo claro
    primaryContainer: "#4d4a78", // Purple mais escuro
    onPrimaryContainer: "#f8f8f2", // Texto claro

    secondary: "#ff79c6", // Pink
    onSecondary: "#1e1f29",
    secondaryContainer: "#803e6a", // Pink mais escuro
    onSecondaryContainer: "#f8f8f2",

    tertiary: "#8be9fd", // Cyan
    onTertiary: "#1e1f29",
    tertiaryContainer: "#357a85", // Cyan mais escuro
    onTertiaryContainer: "#f8f8f2",

    error: "#ff5555", // Red
    onError: "#1e1f29",
    errorContainer: "#8b2a2a",
    onErrorContainer: "#f8f8f2",

    background: "#282a36", // Dracula background
    onBackground: "#f8f8f2", // Dracula foreground

    surface: "#343746", // Um pouco mais claro que background
    onSurface: "#f8f8f2",

    surfaceVariant: "#44475a", // currentLine
    onSurfaceVariant: "#e2e2e2",

    outline: "#6272a4", // Comments, usado para borders
    outlineVariant: "#51536b",

    inverseSurface: "#f8f8f2", // Branco
    inverseOnSurface: "#1e1f29", // Quase preto
    inversePrimary: "#ffb86c", // Laranja (inversão interessante)

    shadow: "#000000",
    scrim: "#000000",

    surfaceDisabled: "rgba(248, 248, 242, 0.12)",
    onSurfaceDisabled: "rgba(248, 248, 242, 0.38)",
    backdrop: "rgba(40, 42, 54, 0.4)",
  },
};

export const pastelPink = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#F4A6B3",
    onPrimary: "#5A2A33",
    primaryContainer: "#FFD9DE",
    onPrimaryContainer: "#3D1A1E",

    secondary: "#E8B5C1",
    onSecondary: "#4D3035",
    secondaryContainer: "#FFE8EC",
    onSecondaryContainer: "#381E22",

    tertiary: "#F2C7DE",
    onTertiary: "#4D2A3C",
    tertiaryContainer: "#FFE9F3",
    onTertiaryContainer: "#381927",

    error: "#BA1A1A",
    onError: "#FFFFFF",
    errorContainer: "#FFDAD6",
    onErrorContainer: "#410002",

    background: "#FFF8F9",
    onBackground: "#3D2B2F",

    surface: "#FFF1F4",
    onSurface: "#3A2A2D",
    surfaceVariant: "#F3DCE0",
    onSurfaceVariant: "#524345",

    outline: "#8F7C7F",
    outlineVariant: "#D6C2C5",

    inverseSurface: "#513B3F",
    inverseOnSurface: "#FBECEF",
    inversePrimary: "#FFB2C0",

    shadow: "#000000",
    scrim: "#000000",

    surfaceDisabled: "rgba(58, 42, 45, 0.12)",
    onSurfaceDisabled: "rgba(58, 42, 45, 0.38)",
    backdrop: "rgba(61, 43, 47, 0.4)",
  },
};

export const saphire = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#264FAD", // azul safira intenso
    onPrimary: "#FFFFFF", // texto claro sobre o azul
    primaryContainer: "#D6E2FF", // azul claro para container
    onPrimaryContainer: "#00174B", // texto escuro para container claro

    secondary: "#5B6FAF", // azul lavanda intermediário
    onSecondary: "#FFFFFF",
    secondaryContainer: "#DDE1FF",
    onSecondaryContainer: "#151B37",

    tertiary: "#3C9EE7", // azul turquesa como apoio
    onTertiary: "#FFFFFF",
    tertiaryContainer: "#CFE5FF",
    onTertiaryContainer: "#002C4A",

    error: "#BA1A1A",
    onError: "#FFFFFF",
    errorContainer: "#FFDAD6",
    onErrorContainer: "#410002",

    background: "#FDFDFF", // fundo claro geral
    onBackground: "#1B1B1F",

    surface: "#F7F8FF", // cards e superfícies
    onSurface: "#1B1B1F",

    surfaceVariant: "#E1E2EC", // variação para listas, bordas
    onSurfaceVariant: "#44464F",

    outline: "#757780",
    outlineVariant: "#C4C6D0",

    inverseSurface: "#303136",
    inverseOnSurface: "#F1F0F5",
    inversePrimary: "#AEC6FF",

    shadow: "#000000",
    scrim: "#000000",

    surfaceDisabled: "rgba(27, 27, 31, 0.12)",
    onSurfaceDisabled: "rgba(27, 27, 31, 0.38)",
    backdrop: "rgba(43, 45, 66, 0.4)",
  },
};

export const acquaGreen = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#4EC8B6", // verde-água vibrante
    onPrimary: "#003731", // contraste escuro para texto
    primaryContainer: "#AEEFED", // tom mais claro para container
    onPrimaryContainer: "#00201D", // texto escuro sobre container claro

    secondary: "#56C3D0", // azul claro secundário
    onSecondary: "#00363D",
    secondaryContainer: "#C7F5FA",
    onSecondaryContainer: "#001F22",

    tertiary: "#A2E4BA", // tom pastel esverdeado como apoio
    onTertiary: "#113E29",
    tertiaryContainer: "#CFF7D8",
    onTertiaryContainer: "#00210F",

    error: "#BA1A1A",
    onError: "#FFFFFF",
    errorContainer: "#FFDAD6",
    onErrorContainer: "#410002",

    background: "#F6FEFD", // fundo bem claro e suave
    onBackground: "#1B1C1C",

    surface: "#EFFFFD", // cards e superfícies
    onSurface: "#1B1C1C",

    surfaceVariant: "#DDEEEB",
    onSurfaceVariant: "#414947",

    outline: "#707976",
    outlineVariant: "#C1CDC9",

    inverseSurface: "#2E3130",
    inverseOnSurface: "#EEF9F7",
    inversePrimary: "#6EE0D0",

    shadow: "#000000",
    scrim: "#000000",

    surfaceDisabled: "rgba(27, 28, 28, 0.12)",
    onSurfaceDisabled: "rgba(27, 28, 28, 0.38)",
    backdrop: "rgba(24, 44, 43, 0.4)",
  },
};

export const redBlack = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: "#FF5555", // vermelho intenso
    onPrimary: "#1A0000", // preto profundo para contraste
    primaryContainer: "#7A0000", // vermelho escuro para container
    onPrimaryContainer: "#FFD6D6", // claro sobre vermelho escuro

    secondary: "#FF4444", // vermelho levemente mais claro
    onSecondary: "#1A0000",
    secondaryContainer: "#660000", // container escuro
    onSecondaryContainer: "#FFD1D1",

    tertiary: "#B00020", // vermelho ameno, toque roxo
    onTertiary: "#FFFFFF",
    tertiaryContainer: "#5A000D",
    onTertiaryContainer: "#FFD6DC",

    error: "#CF6679",
    onError: "#1A0000",
    errorContainer: "#8C1D27",
    onErrorContainer: "#FFDAD6",

    background: "#121212", // fundo preto clássico
    onBackground: "#FFEFEF", // texto claro sobre fundo preto

    surface: "#1E1E1E", // cards e painéis
    onSurface: "#FFFFFF",

    surfaceVariant: "#3A3A3A", // variação de cinza escuro
    onSurfaceVariant: "#FFCCCC",

    outline: "#8F8F8F",
    outlineVariant: "#555555",

    inverseSurface: "#F5F5F5", // claro invertido
    inverseOnSurface: "#2C2C2C",
    inversePrimary: "#FF9999", // vermelho claro invertido

    shadow: "#000000",
    scrim: "#000000",

    surfaceDisabled: "rgba(255, 255, 255, 0.12)",
    onSurfaceDisabled: "rgba(255, 255, 255, 0.38)",
    backdrop: "rgba(255, 85, 85, 0.32)",
  },
};

export const rosePine = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
  primary: "#ebbcba",
  onPrimary: "#191724",
  primaryContainer: "#524356",
  onPrimaryContainer: "#faf4ed",

  secondary: "#f6c177",
  onSecondary: "#191724",
  secondaryContainer: "#4b4335",
  onSecondaryContainer: "#faf4ed",

  tertiary: "#9ccfd8",
  onTertiary: "#191724",
  tertiaryContainer: "#3a515d",
  onTertiaryContainer: "#e0def4",

  error: "#eb6f92",
  onError: "#191724",
  errorContainer: "#583543",
  onErrorContainer: "#ffdede",

  background: "#191724",
  onBackground: "#e0def4",

  surface: "#1f1d2e",
  onSurface: "#e0def4",
  surfaceVariant: "#26233a",
  onSurfaceVariant: "#908caa",

  outline: "#6e6a86",
  outlineVariant: "#403d52",

  inverseSurface: "#e0def4",
  inverseOnSurface: "#1f1d2e",
  inversePrimary: "#c4a7e7",

  shadow: "#000000",
  scrim: "#000000",

  surfaceDisabled: "rgba(224, 222, 244, 0.12)",
  onSurfaceDisabled: "rgba(224, 222, 244, 0.38)",
  backdrop: "rgba(40, 36, 56, 0.4)",
}

}

export const catppuccin = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
  primary: "#89b4fa", // blue
  onPrimary: "#1e1e2e",
  primaryContainer: "#313244",
  onPrimaryContainer: "#cdd6f4",

  secondary: "#f38ba8", // pinkish red
  onSecondary: "#1e1e2e",
  secondaryContainer: "#45475a",
  onSecondaryContainer: "#f5e0dc",

  tertiary: "#a6e3a1", // green
  onTertiary: "#1e1e2e",
  tertiaryContainer: "#313244",
  onTertiaryContainer: "#d9f99d",

  error: "#f38ba8",
  onError: "#1e1e2e",
  errorContainer: "#cba6f7",
  onErrorContainer: "#f5c2e7",

  background: "#1e1e2e",
  onBackground: "#cdd6f4",

  surface: "#181825",
  onSurface: "#cdd6f4",
  surfaceVariant: "#313244",
  onSurfaceVariant: "#a6adc8",

  outline: "#7f849c",
  outlineVariant: "#45475a",

  inverseSurface: "#cdd6f4",
  inverseOnSurface: "#1e1e2e",
  inversePrimary: "#89b4fa",

  shadow: "#000000",
  scrim: "#000000",

  surfaceDisabled: "rgba(205, 214, 244, 0.12)",
  onSurfaceDisabled: "rgba(205, 214, 244, 0.38)",
  backdrop: "rgba(30, 30, 46, 0.4)",
}

}