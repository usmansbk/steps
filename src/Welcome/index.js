import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Text} from 'react-native-paper';

export default () => {
  return (
    <View style={styles.container}>
      <Image source={require('../images/male.png')} style={styles.avatar} />
      <Text style={styles.question}>Hello! Partner,</Text>
      <Text style={styles.question}>What should I call you?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  question: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  avatar: {
    width: 64,
    height: 64,
  },
});
