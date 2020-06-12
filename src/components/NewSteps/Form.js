import React, {useState, useCallback, useEffect, useMemo} from 'react';
import dayjs from 'dayjs';
import isUrl from 'is-url';
import {View, StyleSheet} from 'react-native';
import {Text, IconButton, ProgressBar, Snackbar} from 'react-native-paper';
import Icon from '../common/Icon';
import Steps from './List';
import StepBox from './StepBox';
import {colors} from '../../config/theme';
import scrapper from '../../lib/scrapper';
import {pickImage} from '../../lib/util';

export default (props) => {
  const _stepsRef = React.useRef(null);
  const [stepText, onChangeStepText] = useState('');
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const {draft, navigation, howTos, route} = props;
  const {title, image, category, ingredients, steps} = draft.state;

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
  const _navigateToEditStep = useCallback(
    (id) => navigation.navigate('EditStep', {id}),
    [navigation],
  );
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
    howTos.createHowTo(draft.state);
    navigation.goBack();
    draft.dispose();
  };
  const _onSwap = (data) => draft.onSwap(data);
  const _removeStep = (removeId) => draft.removeStep(removeId);
  const _clear = () => draft.dispose();
  const _unPickPhoto = useCallback(() => setPhoto(null), []);
  const _onPickPhoto = useCallback(() => {
    pickImage(setPhoto);
  }, []);
  const _onPickImage = useCallback(() => {
    pickImage(draft.setImage);
  }, [draft.setImage]);

  const _onBlur = async () => {
    if (isUrl(title)) {
      setLoading(true);
      try {
        const recipe = await scrapper(title);
        draft.prepare(recipe);
      } catch (e) {
        setError(e.message);
      }
      setLoading(false);
    }
  };

  const _onDismissSnackBar = useCallback(() => {
    setError('');
  }, []);

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
              onPress={_clear}
              icon={() => <Icon color={colors.danger} name="close" size={24} />}
            />
            <IconButton
              disabled={!title || loading}
              onPress={_onSubmit}
              icon={() => (
                <Icon color={colors.accent} name="pushpin" size={24} />
              )}
            />
          </View>
        </View>
      </View>
      {loading && <ProgressBar indeterminate />}
      <Steps
        title={title}
        image={image}
        onPressAvatar={_onPickImage}
        onChangeTitle={draft.onTitleChange}
        onBlurTitle={_onBlur}
        category={category}
        ingredients={ingredients}
        onChangeCategory={draft.onCategoryChange}
        onChangeIngredients={draft.onChangeIngredients}
        navigateToEditStep={_navigateToEditStep}
        disable={loading}
        data={steps}
        ref={_stepsRef}
        onSwap={_onSwap}
        removeStep={_removeStep}
      />
      <Snackbar
        duration={Snackbar.DURATION_SHORT}
        visible={Boolean(error)}
        style={styles.snack}
        onDismiss={_onDismissSnackBar}>
        {error}
      </Snackbar>
      <StepBox
        value={stepText}
        photo={photo}
        onPickPhoto={_onPickPhoto}
        unPickPhoto={_unPickPhoto}
        onChangeText={onChangeStepText}
        step={steps.length + 1}
        onAdd={_onAdd}
        autoFocus={title}
        disabled={!(stepText || photo) || loading}
        editable={!loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 0,
    paddingHorizontal: 16,
    paddingBottom: 4,
    backgroundColor: 'white',
  },
  date: {
    alignItems: 'center',
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
  snack: {
    backgroundColor: colors.danger,
  },
});
