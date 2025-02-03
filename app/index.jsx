import { router } from 'expo-router';
import {
  View,
  Text,
  StatusBar,
  Pressable,
  StyleSheet,
  Image,
} from 'react-native';
import SafeViewArea from './components/SafeViewArea';
import { styles } from './styles/screens_style/indexStyle';
import { COLORS } from './utils/constants';

const App = () => {
  return (
    <SafeViewArea>
      <StatusBar
        translucent
        backgroundColor={COLORS.LIGHT_WHITE}
        barStyle="dark-content"
      />
      <View style={styles.Container}>
        <Image
          source={require('./assets/images/doctor.png')}
          style={styles.ImgStyle}
        />
        <Text style={styles.LandingText}>
          Un suivi médical en un seul endroit !
        </Text>
        <Pressable
          style={[styles.LandingBtn, { backgroundColor: COLORS.LIGHT_PURPLE }]}
          onPress={() => {
            router.push('/screens/LoginScreen');
          }}
        >
          <Text style={styles.LandingBtnText}>
            Commencer en tant que médecin
          </Text>
        </Pressable>
        <Pressable
          style={[styles.LandingBtn, { backgroundColor: COLORS.LIGHT_PINK }]}
          onPress={() => {
            router.push('/screens/LoginScreen');
          }}
        >
          <Text style={styles.LandingBtnText}>
            Commencer en tant que patient
          </Text>
        </Pressable>
      </View>
    </SafeViewArea>
  );
};
export default App;
