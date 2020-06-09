import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {Subscribe} from 'unstated';
import UI from '../../containers/UI';
import {colors} from '../../config/theme';

export default ({navigation}) => {
  return (
    <Subscribe to={[UI]}>
      {(ui) => {
        if (!ui.state.firstLaunch) {
          navigation.replace('Home');
        }
        return (
          <View style={styles.container}>
            <ActivityIndicator color={colors.accent} />
          </View>
        );
      }}
    </Subscribe>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
