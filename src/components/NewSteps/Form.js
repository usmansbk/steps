import React, {useState, useCallback, useEffect, useMemo} from 'react';
import dayjs from 'dayjs';
import {View, StyleSheet, Platform} from 'react-native';
import {Text, IconButton} from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';
import TextInput from '../common/TextInput';
import Icon from '../common/Icon';
import Steps from './List';
import StepBox from './StepBox';
import {colors} from '../../config/theme';

const options = {
  title: 'Select Picture',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
export default (props) => {
  const _stepsRef = React.useRef(null);
  const [stepText, onChangeStepText] = useState('');
  const [photo, setPhoto] = useState(null);

  const {draft, navigation, howTos, route} = props;

  useEffect(() => {
    const id = route.params && route.params.id;
    if (id) {
      const toEdit = howTos.findById(id);
      draft.prepare(toEdit);
      navigation.setParams({id: null});
    }
  });

  const date = useMemo(() => dayjs().format('MMM D').toUpperCase(), []);
  const _goBack = useCallback(() => navigation.goBack(), [navigation]);
  const _scrollDown = useCallback(() => _stepsRef.current.scrollDown(), [
    _stepsRef,
  ]);
  const _onAdd = useCallback(() => {
    draft.addStep(stepText, photo);
    onChangeStepText('');
    setPhoto(null);
    _scrollDown();
  }, [draft, stepText, photo, _scrollDown]);
  const _onSubmit = () => {
    howTos.createHowTo(draft.state, photo);
    navigation.goBack();
    draft.dispose();
  };
  const _onSwap = (data) => draft.onSwap(data);
  const _removeStep = (removeId) => draft.removeStep(removeId);
  const _clear = () => draft.dispose();
  const _unPickPhoto = useCallback(() => setPhoto(null), []);
  const _onPickPhoto = useCallback(() => {
    ImagePicker.showImagePicker(options, (response) => {
      if (!(response.error || response.didCancel)) {
        let uri = '';
        if (Platform.OS === 'android') {
          uri = 'file:///' + response.path;
        } else {
          uri = response.uri;
        }
        const source = {uri};
        setPhoto(source);
      }
    });
  }, []);
  const {title, steps} = draft.state;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IconButton
          onPress={_goBack}
          icon={() => <Icon name="left" size={24} />}
        />
        <View style={styles.date}>
          <Text>{date}</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.rowBtn}>
            <IconButton
              disabled={!title}
              onPress={_clear}
              icon={() => <Icon color={colors.danger} name="close" size={24} />}
            />
            <IconButton
              disabled={!title}
              onPress={_onSubmit}
              icon={() => (
                <Icon color={colors.accent} name="pushpin" size={24} />
              )}
            />
          </View>
        </View>
      </View>
      <View style={styles.steps}>
        <TextInput
          value={title}
          autoFocus={!title}
          onChangeText={draft.onTitleChange}
          placeholder="How to..."
          style={styles.textinput}
        />
      </View>
      <Steps
        data={steps}
        ref={_stepsRef}
        onSwap={_onSwap}
        removeStep={_removeStep}
      />
      <StepBox
        value={stepText}
        photo={photo}
        onPickPhoto={_onPickPhoto}
        unPickPhoto={_unPickPhoto}
        onChangeText={onChangeStepText}
        step={steps.length + 1}
        onAdd={_onAdd}
        autoFocus={title}
        disabled={!(stepText || photo)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingHorizontal: 16,
    paddingBottom: 4,
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
  buttons: {
    flex: 1,
    alignSelf: 'flex-end',
  },
  rowBtn: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
});
