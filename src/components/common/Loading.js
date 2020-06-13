import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {View, StyleSheet} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {colors} from '../../config/theme';

const Screen = ({navigation}) => {
  const onMount = async () => {
    try {
      const skipWelcome = await AsyncStorage.getItem('skipWelcome');
      if (!skipWelcome) {
        navigation.replace('Welcome');
      } else {
        navigation.replace('Home');
      }
    } catch (error) {
      // console.log(error);
    }
  };
  useEffect(() => {
    onMount();
  });
  return (
    <View style={styles.container}>
      <ActivityIndicator color={colors.accent} />
    </View>
  );
};

export default ({navigation}) => {
  return <Screen navigation={navigation} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
