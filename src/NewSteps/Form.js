import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import TextInput from '../common/TextInput';
import Steps from './List';
import StepBox from './StepBox';

const data = [
  {
    step: 1,
    details: 'Go to the repo you want to work with',
  },
  {
    step: 2,
    details: 'Go to the repo you want to work with',
  },
  {
    step: 3,
    details: 'Go to the repo you want to work with',
  },
  {
    step: 4,
    details: 'Go to the repo you want to work with',
  },
  {
    step: 5,
    details: 'Go to the repo you want to work with',
  },
  {
    step: 6,
    details: 'Go to the repo you want to work with',
  },
  {
    step: 7,
    details: 'Go to the repo you want to work with',
  },
  {
    step: 8,
    details: 'Go to the repo you want to work with',
  },
  {
    step: 9,
    details: 'Go to the repo you want to work with',
  },
  {
    step: 10,
    details: 'Go to the repo you want to work with',
  },
];

export default class Form extends React.Component {
  static defaultProps = {
    isNew: true,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.date}>
          <Text>JUN 8</Text>
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
  steps: {
  },
  date: {
    alignItems: 'center',
  },
  textinput: {
    fontSize: 27,
    fontWeight: 'bold',
  },
});
