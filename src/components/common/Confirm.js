import React from 'react';
import {StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';
import {Text, Button} from 'react-native-paper';
import Icon from './Icon';
import {colors} from '../../config/theme';

export default ({onConfirm, onCancel, isVisible = false}) => {
  return (
    <Modal
      onBackButtonPress={onCancel}
      onBackdropPress={onCancel}
      isVisible={isVisible}>
      <View style={styles.content}>
        <Icon name="exclamationcircle" size={24} color={colors.danger} />
        <Text style={styles.text}>Confirm</Text>
        <Text>Are you sure you want to this?</Text>
        <View style={styles.buttons}>
          <Button onPress={onCancel}>NO</Button>
          <Button onPress={onConfirm}>YES</Button>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  content: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  buttons: {
    paddingVertical: 20,
    flexDirection: 'row',
  },
});
