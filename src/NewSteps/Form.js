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
];

export default class Form extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.date}>
          <Text>JUN 8</Text>
        </View>
        <View style={styles.steps}>
          <TextInput
            autoFocus
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
    flex: 1,
  },
  date: {
    alignItems: 'center',
  },
  textinput: {
    fontSize: 27,
    fontWeight: 'bold',
  },
});
