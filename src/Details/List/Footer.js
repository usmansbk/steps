import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from '../../common/Icon';
import {colors} from '../../config/theme';

export default () => {
  return (
    <View style={styles.container}>
      <Icon name="smileo" size={24} color={colors.accent} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
