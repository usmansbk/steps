import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

export default () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={require('../../assets/empty_list.png')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 256,
    height: 256,
  },
});
