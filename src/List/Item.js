import React from 'react';
import {View} from 'react-native';
import {TouchableRipple, Text, Caption} from 'react-native-paper';

export default ({title, date}) => {
  return (
    <TouchableRipple>
      <View>
        <Text>{title}</Text>
        <Caption>{date}</Caption>
      </View>
    </TouchableRipple>
  );
};
