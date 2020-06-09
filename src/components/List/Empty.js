import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

export default () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Do it once and I'll help you remember Step-by-Step
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'gray',
  },
});
