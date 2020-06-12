import React, {useCallback, useState, useMemo} from 'react';
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {IconButton, Text} from 'react-native-paper';
import TextInput from '../common/TextInput';
import Icon from '../common/Icon';
import {colors} from '../../config/theme';
import {pickImage} from '../../lib/util';

export default ({navigation, draft, route}) => {
  const id = route && route.params && route.params.id;

  const _goBack = useCallback(() => navigation.goBack(), [navigation]);
  const {label, photo} = useMemo(() => draft.findStepById(id), [draft, id]);
  const [text, setText] = useState(label);
  const [image, setImage] = useState(photo);
  const _removeImage = useCallback(() => setImage(null), []);
  const _pickImage = useCallback(() => pickImage(setImage), []);

  const _submit = () => {
    draft.updateStep({
      id,
      label: text,
      photo: image,
    });
    _goBack();
  };

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
      <ScrollView keyboardShouldPersistTaps="always">
        <TextInput
          value={text}
          onChangeText={setText}
          style={styles.textinput}
          placeholder="Type here..."
          multiline
          autoFocus
        />
        <TouchableOpacity onPress={_pickImage} onLongPress={_removeImage}>
          <Image
            resizeMode="contain"
            source={image || require('../../assets/fish.png')}
            style={styles.image}
          />
        </TouchableOpacity>
      </ScrollView>
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
    fontSize: 20,
  },
  image: {
    height: 200,
    width: '100%',
    marginVertical: 16,
  },
});
