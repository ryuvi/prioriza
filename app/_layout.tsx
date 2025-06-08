import Header from '@/components/header';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useCallback, useState } from 'react';
import { ThemeProvider } from '@/src/themeProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync(); // Fora do componente (opcional, mas recomendado)

export default function Layout() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        // Simula carregamento de fontes/assets se necessário
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn('Erro durante o carregamento:', e);
      } finally {
        setAppIsReady(true);
        await SplashScreen.hideAsync(); // <- Esconde a splash aqui
      }
    };

    prepare();
  }, []);

  if (!appIsReady) {
    return null; // Não renderiza a UI até o app estar pronto
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <Stack>
          <Stack.Screen name="index" options={{ header: () => <Header /> }} />
        </Stack>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}