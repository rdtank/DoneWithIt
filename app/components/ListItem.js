import React from 'react';
import {Image, StyleSheet, TouchableHighlight, View} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';

import AppText from './AppText';
import Colors from '../config/Colors';
import GlobalStyles from '../config/GlobalStyles';

const ListItem = ({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={Colors.lightGrey} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {subTitle && (
              <AppText style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </AppText>
            )}
          </View>
          <Feather
            name="chevron-right"
            size={25}
            color={GlobalStyles.colors.grey}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: Colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  detailsContainer: {
    flex: 1,
    marginStart: 10,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
  subTitle: {
    color: Colors.grey,
  },
});
