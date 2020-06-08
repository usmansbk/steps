import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TouchableRipple, Text, Caption} from 'react-native-paper';

export default ({title, date, onPress}) => {
  return (
    <TouchableRipple onPress={onPress}>
      <View style={styles.container}>
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>
          {title}
        </Text>
        <Caption>{date}</Caption>
      </View>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
