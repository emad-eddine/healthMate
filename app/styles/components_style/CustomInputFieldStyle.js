import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils/constants';
export const styles = StyleSheet.create({
  inputFieldContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#ffe0f4',
    borderRadius: 8,
    marginVertical: 10,

    alignItems: 'center',
  },
  inputField: {
    flex: 1,
    marginLeft: 20,
    fontFamily: 'OS_MEDIUM',
    fontSize: 16,
    color: COLORS.DARK_GRAY,
  },

  onInputFocus: {
    borderColor: COLORS.DARK_GRAY,
    borderWidth: 2,
  },
  onInputBlur: {
    borderWidth: 0,
  },
  errorText: {
    fontFamily: 'OS_REGULAR',
    fontSize: 14,
    color: COLORS.HEART_RED,
    maxWidth: '80%',
  },
});
