import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../config/Colors';
import AppText from './AppText';

const Card = ({title, subTitle, image}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.cardImage} source={image} />
      <View style={styles.detailsContianer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 15,
    backgroundColor: Colors.white,
    marginBottom: 20,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  detailsContianer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: Colors.secondary,
    fontWeight: 'bold',
  },
});
