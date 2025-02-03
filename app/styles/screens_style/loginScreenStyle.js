import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils/constants';

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: COLORS.LIGHT_WHITE,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  LogoImg: {
    width: '35%',
    height: '30%',
    resizeMode: 'contain',
  },

  WelcomeText: {
    fontSize: 30,
    fontFamily: 'OS_BOLD',
    color: COLORS.DARK_GRAY,
  },
  InputContainer: {
    width: '95%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  ForgotPasswordText: {
    width: '80%',
    textAlign: 'right',
    fontSize: 14,
    fontFamily: 'OS_REGULAR',
    color: COLORS.DARK_GRAY,
    marginTop: 5,
  },

  LoginBtn: {
    marginTop: 30,
    width: '70%',
    height: 50,
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: COLORS.LIGHT_PURPLE,
  },

  LoginBtnText: {
    fontSize: 16,
    fontFamily: 'OS_BOLD',
    color: COLORS.LIGHT_WHITE,
  },

  NewAccountText: {
    fontSize: 14,
    fontFamily: 'OS_REGULAR',
    color: COLORS.DARK_GRAY,
    width: '100%',
    marginTop: 20,
    textAlign: 'center',
  },

  NewAccountBtn: {
    fontFamily: 'OS_BOLD',
    color: COLORS.HEART_RED,
    textDecorationLine: 'underline',
  },
});
