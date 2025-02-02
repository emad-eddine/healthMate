import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useCallback, useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded, fontError] = useFonts({
    OS_BOLD: require('./assets/fonts/OpenSans-Bold.ttf'),
    OS_MEDIUM: require('./assets/fonts/OpenSans-Medium.ttf'),
    OS_REGULAR: require('./assets/fonts/OpenSans-Regular.ttf'),
    OS_LIGHT: require('./assets/fonts/OpenSans-Light.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
};
export default Layout;
