import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import ListItem from '../components/ListItem';
import Separator from '../components/Separator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import Screen from '../components/Screen';

const initialMessages = [
  {
    id: 1,
    title: 'T1',
    description: 'Test',
    image: require('../assets/chair.jpg'),
  },
  {
    id: 2,
    title: 'T2',
    description: 'Test2',
    image: require('../assets/couch.jpg'),
  },
];

const MessageScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = message => {
    setMessages(messages.filter(m => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({item}) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('selected', item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={Separator}
        refreshing={refreshing}
        onRefresh={() => setMessages(initialMessages)}
      />
    </Screen>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({});
