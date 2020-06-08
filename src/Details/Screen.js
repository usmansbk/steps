import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import dayjs from 'dayjs';
import Steps from './List';

const item = {
  id: 1,
  title: 'Create a PR',
  date: new Date(),
  steps: [
    {
      key: 1,
      label: 'Go to the repo you want to work with',
      attachment: null,
    },
    {
      key: 2,
      label:
        'GGo to the repo you want to work withGo to the repo you want to work withGo to the repo you want to work withGo to the repo you want to work witho to the repo you want to work with',
    },
    {
      key: 3,
      label: 'Go to the repo you want to work with',
    },
    {
      key: 4,
      label: 'Go to the repo you want to work with',
    },
    {
      key: 5,
      label: 'Go to the repo you want to work with',
    },
    {
      key: 6,
      label: 'Go to the repo you want to work with',
    },
    {
      key: 7,
      label: 'Go to the repo you want to work with',
    },
    {
      key: 8,
      label: 'Go to the repo you want to work with',
    },
    {
      key: 9,
      label: 'Go to the repo you want to work with',
    },
    {
      key: 10,
      label: 'Go to the repo you want to work with',
    },
  ],
};

export default () => {
  const date = dayjs(item.date).format('MMM D YYYY HH:MM').toUpperCase();
  return (
    <View style={styles.container}>
      <Text>{date}</Text>
      <Text style={styles.heading}>{item.title}</Text>
      <Steps data={item.steps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 27,
    fontWeight: 'bold',
  },
});
