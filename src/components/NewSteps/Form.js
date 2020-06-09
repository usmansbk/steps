import React from 'react';
import dayjs from 'dayjs';
import {View, StyleSheet} from 'react-native';
import {Text, IconButton} from 'react-native-paper';
import TextInput from '../common/TextInput';
import Icon from '../common/Icon';
import Steps from './List';
import StepBox from './StepBox';
import {colors} from '../../config/theme';

export default (props) => {
  const _stepsRef = React.useRef(null);
  const [stepText, onChangeStepText] = React.useState('');

  const {draft, navigation, updateOrCreate} = props;
  const date = dayjs().format('MMM D').toUpperCase();
  const _goBack = () => navigation.goBack();
  const _scrollDown = () => _stepsRef.current.scrollDown();
  const _onAdd = () => {
    draft.addStep(stepText);
    onChangeStepText('');
    _scrollDown();
  };
  const _onSubmit = () => {
    updateOrCreate(draft.state);
    draft.dispose();
    navigation.goBack();
  };
  const _onSwap = (data) => draft.onSwap(data);
  const _removeStep = (removeId) => draft.removeStep(removeId);
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
        <View style={styles.pin}>
          <IconButton
            disabled={!title}
            onPress={_onSubmit}
            icon={() => <Icon color={colors.accent} name="pushpin" size={24} />}
          />
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
        onChangeText={onChangeStepText}
        step={steps.length + 1}
        onAdd={_onAdd}
        autoFocus={title}
        disabled={!stepText}
      />
    </View>
  );
};

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
  pin: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
