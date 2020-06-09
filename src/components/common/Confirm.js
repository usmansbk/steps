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
        <Text style={styles.text}>Are you sure you want to delete this?</Text>
        <Text>You cannot undo this action</Text>
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
    textAlign: 'center',
  },
  content: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    padding: 20,
  },
  buttons: {
    paddingVertical: 20,
    flexDirection: 'row',
  },
});
