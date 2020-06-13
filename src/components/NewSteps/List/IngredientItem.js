import React, {useState, useCallback} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, IconButton} from 'react-native-paper';
import Icon from '../../common/Icon';
import TextInput from '../../common/TextInput';
import {colors} from '../../../config/theme';

export default ({onEdit = () => null, onDelete = () => null, text, index}) => {
  const [value, onChangeText] = useState(text);
  const [editable, setEditable] = useState(false);

  const _onDelete = useCallback(() => onDelete(index), [index, onDelete]);
  const _toggleEditMode = () => setEditable(!editable);
  const _onSubmit = () => {
    onEdit(value, index);
    _toggleEditMode();
  };

  return (
    <View style={styles.container}>
      <IconButton
        onPress={_onDelete}
        icon={() => (
          <Icon color={colors.danger} name="closecircleo" size={22} />
        )}
      />
      <TouchableOpacity style={styles.textView} onPress={_toggleEditMode}>
        {editable ? (
          <TextInput value={value} autoFocus onChangeText={onChangeText} />
        ) : (
          <Text style={styles.text}>{text}</Text>
        )}
      </TouchableOpacity>
      {editable && (
        <IconButton
          onPress={_onSubmit}
          icon={() => (
            <Icon color={colors.accent} name="checkcircle" size={22} />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textView: {
    flex: 1,
  },
});
