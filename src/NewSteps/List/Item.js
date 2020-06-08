import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, IconButton} from 'react-native-paper';
import Icon from '../../common/Icon';

export default ({step, details, onPress, onLongPress}) => {
  return (
    <TouchableOpacity onLongPress={onLongPress}>
      <View>
        <View style={styles.head}>
          <Text>STEP {step}</Text>
          <IconButton
            onPress={onPress}
            icon={() => <Icon color="gray" size={20} name="closecircle" />}
          />
        </View>
        <Text style={styles.details}>{details}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  number: {
    fontWeight: 'bold',
    color: 'gray',
    fontSize: 16,
  },
  details: {
    fontWeight: 'bold',
  },
});
