import { View, Text, StatusBar, Pressable, StyleSheet } from 'react-native';
import SafeViewArea from './components/SafeViewArea';

import { router } from 'expo-router';
const App = () => {
  return (
    <SafeViewArea>
      <StatusBar translucent backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.Container}>
        <Pressable
          onPress={() => {
            //router.push('screens/SignInScreen');
          }}
        >
          <Text>Sign in</Text>
        </Pressable>
      </View>
    </SafeViewArea>
  );
};
export default App;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
