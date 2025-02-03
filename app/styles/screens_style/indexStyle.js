import { COLORS } from './../../utils/constants.js';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: COLORS.LIGHT_WHITE,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  ImgStyle: {
    width: '100%', // Makes the image responsive to screen width
    height: '60%', // Adjust the height as needed
    resizeMode: 'contain', // Ensures the image scales properly
    margin: '0',
  },

  LandingText: {
    fontSize: 30,
    fontFamily: 'OS_BOLD',
    color: COLORS.DARK_GRAY,
    width: '90%',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },

  LandingBtn: {
    marginTop: 30,
    width: '90%',
    height: 50,
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },

  LandingBtnText: {
    fontSize: 15,
    fontFamily: 'OS_MEDIUM',
    color: COLORS.LIGHT_WHITE,
  },
});
