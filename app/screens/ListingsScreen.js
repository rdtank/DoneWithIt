import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Screen from '../components/Screen';
import Card from '../components/Card';
import Colors from '../config/Colors';

const listings = [
  {
    id: 1,
    title: 'Red Jacket',
    price: 100,
    image: require('../assets/jacket.jpg'),
  },
  {
    id: 2,
    title: 'Couch',
    price: 1000,
    image: require('../assets/couch.jpg'),
  },
];

const ListingsScreen = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={list => list.id.toString()}
        renderItem={({item}) => (
          <Card
            title={item.title}
            subTitle={'$' + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: Colors.lightGrey,
  },
});
