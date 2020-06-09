import React, {useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Text} from 'react-native-paper';
import TextInput from '../common/TextInput';
import Fab from '../common/Fab';

export default ({navigation, ui}) => {
  const {
    state: {userName},
    setName,
    toggleFirstLaunch,
  } = ui;
  const [name, onChangeText] = useState('');
  const onPress = () => {
    setName(name || userName);
    toggleFirstLaunch();
    navigation.replace('Home');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../images/orange.png')}
        style={styles.avatar}
      />
      <Text style={styles.question}>Hello! Friend,</Text>
      <Text style={styles.question}>What should I call you?</Text>
      <View style={styles.input}>
        <TextInput
          autoFocus
          value={name}
          onChangeText={onChangeText}
          style={styles.textInput}
          placeholder={`Call me ${userName}...`}
        />
      </View>
      <View style={styles.rest}>
        <Fab onPress={onPress} icon="like1" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    paddingTop: 60,
  },
  question: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  avatar: {
    width: 64,
    height: 64,
  },
  input: {
    marginVertical: 20,
  },
  textInput: {
    fontSize: 27,
    fontWeight: 'bold',
  },
  rest: {
    flex: 1,
    alignItems: 'center',
  },
});
