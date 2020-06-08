import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Text} from 'react-native-paper';

export default () => {
  return (
    <View style={styles.container}>
      <Image source={require('../images/male.png')} style={styles.avatar} />
      <Text>Hello! Partner,</Text>
      <Text>How should I call you?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    width: 64,
    height: 64,
  },
});
