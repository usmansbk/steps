import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Text} from 'react-native-paper';

export default ({label, photo}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Image source={photo} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
  },
  label: {
    color: '#2d3436',
    paddingBottom: 8,
  },
  step: {
    fontWeight: 'bold',
    marginVertical: 4,
  },
  image: {
    height: 200,
    borderRadius: 16,
  },
});
