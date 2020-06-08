import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import TextInput from '../common/TextInput';

export default class Form extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.date}>
          <Text>JUN 8</Text>
        </View>
        <View>
          <TextInput placeholder="How to..." style={styles.textinput} />
        </View>
        <View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  date: {
    alignItems: 'center',
  },
  textinput: {
    fontSize: 27,
    fontWeight: 'bold',
  },
});
