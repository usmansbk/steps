import React from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {Text, Caption} from 'react-native-paper';
import dayjs from 'dayjs';
import {colors} from '../../config/theme';

export default ({title, date, onPress, id, head}) => {
  const source = head && head.photo;
  console.log(source);
  const _onPress = () => onPress(id);
  return (
    <TouchableOpacity onPress={_onPress}>
      <View style={styles.container}>
        <View style={styles.body}>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>
            {title}
          </Text>
          <Caption>{dayjs(date).format('MMM D YYYY HH:MM')}</Caption>
        </View>
        {Boolean(source) && (
          <Image
            source={source}
            style={styles.image}
            defaultSource={require('../../images/noimage.jpg')}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    padding: 16,
    flexDirection: 'row',
    backgroundColor: colors.accentOpacity,
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  body: {
    flex: 1,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
