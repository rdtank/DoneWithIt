import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import Colors from '../config/Colors';
import Icon from '../components/Icon';
import Separator from '../components/Separator';

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'list',
      backgroundColor: Colors.primary,
    },
  },
  {
    title: 'My Messages',
    icon: {
      name: 'mail',
      backgroundColor: Colors.secondary,
    },
  },
];

const AccountScreen = () => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="John Deo"
          subTitle="Testmail123@gmail.com"
          image={require('../assets/chair.jpg')}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={menuItem => menuItem.title}
          ItemSeparatorComponent={Separator}
          renderItem={({item}) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>

      <ListItem
        title="Log Out"
        IconComponent={<Icon name="log-out" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.lightGrey,
  },
  container: {
    marginVertical: 20,
  },
});
