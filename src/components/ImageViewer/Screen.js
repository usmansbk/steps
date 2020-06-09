import React from 'react';
import {Image, StyleSheet} from 'react-native';

export default ({route}) => {
  const source = route.params.source;
  return <Image source={source} resizeMode="contain" style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});
