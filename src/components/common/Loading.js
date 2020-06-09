import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {Subscribe} from 'unstated';
import UI from '../../containers/UI';
import {colors} from '../../config/theme';

const Screen = ({firstLaunch, navigation, loading}) => {
  React.useEffect(() => {
    if (firstLaunch) {
      navigation.replace('Welcome');
    } else if (!loading) {
      navigation.replace('Home');
    }
  }, [firstLaunch, loading, navigation]);
  return (
    <View style={styles.container}>
      <ActivityIndicator color={colors.accent} />
    </View>
  );
};

export default ({navigation}) => {
  return (
    <Subscribe to={[UI]}>
      {(ui) => {
        return (
          <Screen
            firstLaunch={ui.state.firstLaunch}
            loading={ui.state.isLoading}
            navigation={navigation}
          />
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
