import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Text, Caption} from 'react-native-paper';
import dayjs from 'dayjs';
import { colors } from '../../config/theme';

export default ({title, date, onPress, id}) => {
  const _onPress = () => onPress(id);
  return (
    <TouchableOpacity onPress={_onPress}>
      <View style={styles.container}>
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>
          {title}
        </Text>
        <Caption>{dayjs(date).format('MMM D YYYY HH:MM')}</Caption>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    padding: 16,
    backgroundColor: colors.accentOpacity,
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
