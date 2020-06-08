import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, IconButton} from 'react-native-paper';
import dayjs from 'dayjs';
import Steps from './List';
import Icon from '../common/Icon';
import {colors} from '../config/theme';

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
  const onDelete = () => null;
  const onEdit = () => null;
  return (
    <View style={styles.container}>
      <View style={styles.dateline}>
        <Text>{date}</Text>
        <View style={styles.menu}>
          <IconButton
            onPress={onEdit}
            icon={() => <Icon name="edit" size={24} />}
          />
          <IconButton
            onPress={onDelete}
            icon={() => <Icon color={colors.danger} name="delete" size={24} />}
          />
        </View>
      </View>
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
    paddingBottom: 8,
  },
  dateline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menu: {
    flexDirection: 'row',
  },
});
