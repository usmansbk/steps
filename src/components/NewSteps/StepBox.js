import React from 'react';
import {View, StyleSheet} from 'react-native';
import {IconButton} from 'react-native-paper';
import TextInput from '../common/TextInput';
import Icon from '../common/Icon';
import theme from '../../config/theme';

export default ({step = 1, onAdd = () => null, ...rest}) => (
  <View style={styles.container}>
    <View style={styles.input}>
      <TextInput
        style={styles.textinput}
        placeholder={`Step ${step}...`}
        {...rest}
      />
    </View>
    <IconButton
      onPress={onAdd}
      icon={() => (
        <Icon color={theme.colors.accent} size={24} name="pluscircle" />
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    borderRadius: 20,
    paddingLeft: 8,
  },
  textinput: {
    fontWeight: 'bold',
  },
});