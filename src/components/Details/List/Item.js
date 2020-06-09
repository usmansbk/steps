import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import {colors} from '../../../config/theme';

export default ({label, step}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
  },
  label: {
    color: '#2d3436',
  },
  step: {
    fontWeight: 'bold',
    marginVertical: 4,
  },
});
