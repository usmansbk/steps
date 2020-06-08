import React from 'react';
import {StyleSheet} from 'react-native';
import {FAB} from 'react-native-paper';

export default ({icon, ...rest}) => {
  return (
    <FAB color="white" style={styles.fab} icon={icon || 'plus'} {...rest} />
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 0,
    margin: 16,
  },
});
