import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

export default ({label, step}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.step}>STEP {step}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
  label: {
    color: '#2d3436',
  },
  step: {
    fontWeight: 'bold',
    marginVertical: 4,
  },
});
