import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import GlobalStyles from '../config/GlobalStyles';
import AppText from './AppText';
import PickerItem from './PickerItem';

const AppPicker = ({
  icon,
  items,
  selectedItem,
  numberOfColumns = 1,
  PickerItemComponent = PickerItem,
  placeholder,
  onSelectItem,
  width = '100%',
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, {width}]}>
          {icon && (
            <Feather
              name={icon}
              size={20}
              color={GlobalStyles.colors.grey}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholderText}>{placeholder}</AppText>
          )}

          <Feather
            name="chevron-down"
            size={20}
            color={GlobalStyles.colors.grey}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Button title="Close" onPress={() => setModalVisible(false)} />
        <FlatList
          data={items}
          keyExtractor={item => item.value.toString()}
          numColumns={numberOfColumns}
          renderItem={({item}) => (
            <PickerItemComponent
              item={item}
              label={item.label}
              onPress={() => {
                setModalVisible(false);
                onSelectItem(item);
              }}
            />
          )}
        />
      </Modal>
    </>
  );
};

export default AppPicker;

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
  placeholderText: {
    flex: 1,
    color: GlobalStyles.colors.grey,
  },
  text: {
    flex: 1,
  },
});
