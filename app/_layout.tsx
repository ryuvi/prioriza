import Header from '@/components/header';
import { Slot, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { ThemeProvider } from '@/src/themeProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function Layout() {

  useEffect(() => {
    const prepare = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        // Aqui você pode carregar fontes, assets, etc. se quiser
      } catch (e) {
        console.warn('Erro ao tentar esconder splash screen:', e);
      }
    };

    prepare();
  }, []);

  return (
    <SafeAreaProvider>
    <ThemeProvider>
      <Stack>
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
    </SafeAreaProvider>
  );
}
