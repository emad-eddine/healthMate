import { View, Text, TextInput } from 'react-native';
import { styles } from '../styles/components_style/CustomInputFieldStyle';
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS } from '../utils/constants';
import { useState } from 'react';
const CustomInputField = ({
  Icon,
  placeholder,
  regexType,
  errorMessage,
  isPassword,
  EyeIcon,
  inputValue,
  setInputValue,
  customStyle,
}) => {
  const [isFocused, setFocused] = useState(false);
  const [inputField, setInputField] = useState('');
  const [isValid, setValid] = useState(true);

  return (
    <View>
      <View
        style={[
          styles.inputFieldContainer,
          isFocused ? styles.onInputFocus : styles.onInputBlur,
          customStyle,
        ]}
      >
        {Icon}
        <TextInput
          style={styles.inputField}
          placeholder={placeholder}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          value={inputValue}
          onChangeText={(text) => {
            setInputValue(text);
            setValid(regexType.test(text));
          }}
          secureTextEntry={isPassword ? true : false}
        />
        {isPassword ? EyeIcon : null}
      </View>
      {isValid ? (
        <View></View>
      ) : (
        <Text style={styles.errorText}>{errorMessage}</Text>
      )}
    </View>
  );
};
export default CustomInputField;
