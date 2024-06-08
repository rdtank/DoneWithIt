import {StyleSheet, Text} from 'react-native';
import React from 'react';
import GlobalStyles from '../config/GlobalStyles';

const AppText = ({children, style, ...otherProps}) => {
  return (
    <Text style={[GlobalStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
};

export default AppText;
