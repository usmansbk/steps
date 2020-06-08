import React from 'react';
import dayjs from 'dayjs';
import {View, StyleSheet} from 'react-native';
import {Text, IconButton} from 'react-native-paper';
import TextInput from '../common/TextInput';
import Icon from '../common/Icon';
import Steps from './List';
import StepBox from './StepBox';

const data = [
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
];

export default class Form extends React.Component {
  static defaultProps = {
    isNew: true,
  };

  _goBack = () => this.props.navigation.goBack();

  render() {
    const date = dayjs().format('MMM D').toUpperCase();
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <IconButton
            onPress={this._goBack}
            icon={() => <Icon name="left" size={24} />}
          />
          <View style={styles.date}>
            <Text>{date}</Text>
          </View>
        </View>
        <View style={styles.steps}>
          <TextInput
            autoFocus={this.props.isNew}
            placeholder="How to..."
            style={styles.textinput}
          />
        </View>
        <Steps data={data} />
        <StepBox />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingHorizontal: 16,
    paddingBottom: 10,
    backgroundColor: 'white',
  },
  date: {
    alignItems: 'center',
  },
  textinput: {
    fontSize: 27,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
