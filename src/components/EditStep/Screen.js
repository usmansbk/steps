import React, {useCallback} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {IconButton, Text} from 'react-native-paper';
import TextInput from '../common/TextInput';
import Icon from '../common/Icon';
import {colors} from '../../config/theme';

export default ({navigation}) => {
  const _goBack = useCallback(() => navigation.goBack(), [navigation]);
  const _submit = () => console.log('submit');
  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <IconButton
          onPress={_goBack}
          icon={() => <Icon name="left" size={24} />}
        />
        <Text>EDIT STEP</Text>
        <IconButton
          onPress={_submit}
          icon={() => <Icon name="enter" size={24} color={colors.accent} />}
        />
      </View>
      <TextInput
        style={styles.textinput}
        placeholder="Type here..."
        multiline
        autoFocus
      />
      <Image
        resizeMode="contain"
        source={require('../../assets/fish.png')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  appbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
  },
  textinput: {
    fontSize: 24,
  },
  image: {
    height: 200,
    width: '100%',
    marginVertical: 16,
  },
});
