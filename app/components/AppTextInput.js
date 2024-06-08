import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import GlobalStyles from '../config/GlobalStyles';

const AppTextInput = ({icon, width = '100%', ...otherProps}) => {
  return (
    <View style={[styles.container, {width}]}>
      {icon && (
        <Feather
          name={icon}
          size={20}
          color={GlobalStyles.colors.grey}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={GlobalStyles.colors.grey}
        style={GlobalStyles.text}
        {...otherProps}
      />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.lightGrey,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
  },

  icon: {
    marginRight: 10,
  },
});
