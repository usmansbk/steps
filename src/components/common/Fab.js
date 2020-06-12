import React from 'react';
import {StyleSheet} from 'react-native';
import {FAB} from 'react-native-paper';
import Icon from './Icon';

export default ({icon, style = {}, ...rest}) => {
  return (
    <FAB
      style={[styles.fab, style]}
      icon={() => <Icon color="white" name={icon} size={24} />}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 0,
  },
});
