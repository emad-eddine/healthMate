import { router } from 'expo-router';
import {
  View,
  Text,
  StatusBar,
  Pressable,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import SafeViewArea from '../components/SafeViewArea';
import { COLORS, REGEX, errorMessage } from '../utils/constants';
import { styles } from '../styles/screens_style/loginScreenStyle';
import { MaterialIcons } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import CustomInputField from './../components/CustomInputField';
const LoginScreen = () => {
  // INPUTS FIELD DECLARATION

  const [isChecked, setChecked] = useState(false);

  const [emailField, setEmailField] = useState('');
  const handleEmailChange = (value) => {
    setEmailField(value);
  };

  const [passwordField, setPasswordField] = useState('');
  const handlePasswordChange = (value) => {
    setPasswordField(value);
  };

  return (
    <SafeViewArea>
      <StatusBar
        translucent
        backgroundColor={COLORS.LIGHT_WHITE}
        barStyle="dark-content"
      />
      <View style={styles.Container}>
        <Image
          source={require('../assets/images/icon.png')}
          style={styles.LogoImg}
        />
        <Text style={styles.WelcomeText}>Bienvenue !</Text>
        <View style={styles.InputContainer}>
          <CustomInputField
            Icon={
              <MaterialIcons
                name={'email'}
                size={28}
                color={COLORS.DARK_GRAY}
              />
            }
            placeholder="Email"
            regexType={REGEX.email}
            errorMessage={errorMessage.email}
            inputValue={emailField}
            setInputValue={handleEmailChange}
          />
          <CustomInputField
            Icon={
              <MaterialIcons name={'lock'} size={28} color={COLORS.DARK_GRAY} />
            }
            placeholder="Password"
            regexType={REGEX.password}
            errorMessage={errorMessage.password}
            isPassword={true}
            inputValue={passwordField}
            setInputValue={handlePasswordChange}
            EyeIcon={
              <Ionicons name={'eye'} size={22} color={COLORS.DARK_GRAY} />
            }
          />
          <Text style={styles.ForgotPasswordText}>Mot de passe oublié?</Text>
          <Pressable style={styles.LoginBtn}>
            <Text style={styles.LoginBtnText}>Se connecter</Text>
          </Pressable>
          <Text style={styles.NewAccountText}>
            Vous n'avez pas de compte?
            <Text style={styles.NewAccountBtn}> Créer un compte</Text>
          </Text>
        </View>
      </View>
    </SafeViewArea>
  );
};
export default LoginScreen;
