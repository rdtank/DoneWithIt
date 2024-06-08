import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import Colors from '../config/Colors';

const ListItemDeleteAction = ({onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Feather name="trash" size={35} color={Colors.white} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ListItemDeleteAction;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.danger,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
