import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';
import Icon from '../common/Icon';

export default ({route, navigation}) => {
  const _goBack = React.useCallback(() => navigation.goBack(), [navigation]);
  const source = route.params.source;
  return (
    <View style={styles.container}>
      <Appbar style={styles.appbar}>
        <Appbar.Action
          onPress={_goBack}
          icon={() => <Icon name="left" size={24} />}
        />
      </Appbar>
      <Image
        defaultSource={require('../../assets/fish.png')}
        source={source}
        resizeMode="contain"
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    flex: 1,
  },
  appbar: {
    elevation: 0,
    backgroundColor: 'transparent',
  },
});
