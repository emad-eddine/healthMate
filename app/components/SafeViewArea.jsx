import {
  KeyboardAvoidingView,
  SafeAreaView,
  Platform,
  ScrollView,
} from 'react-native';
import { styles } from '../styles/components_style/saveViewAreaStyle';

const SafeViewArea = ({ children, customStyle }) => {
  return (
    <SafeAreaView style={[styles.SafeViewContainer, customStyle]}>
      {children}
    </SafeAreaView>
  );
};
export default SafeViewArea;
