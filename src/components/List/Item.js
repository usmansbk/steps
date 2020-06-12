import React from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {Text, Caption} from 'react-native-paper';
import dayjs from 'dayjs';
import {colors} from '../../config/theme';

export default ({title, date, onPress, id, image, category}) => {
  const source = image || require('../../assets/fish.png');
  const _onPress = () => onPress(id);
  return (
    <TouchableOpacity onPress={_onPress}>
      <View style={styles.container}>
        <Image
          source={source}
          style={styles.image}
          defaultSource={require('../../assets/fish.png')}
        />
        <View style={styles.body}>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>
            {title}
          </Text>
          <Caption>
            {dayjs(date).format('MMM D YYYY')}{' '}
            {Boolean(category) && <Caption>#{category}</Caption>}
          </Caption>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    padding: 12,
    flexDirection: 'row',
    backgroundColor: colors.accentOpacity,
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  body: {
    flex: 1,
    paddingLeft: 8,
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
