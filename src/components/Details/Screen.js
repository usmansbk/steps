import React, {useState, useCallback, useMemo} from 'react';
import {View, StyleSheet, Share} from 'react-native';
import {Text, IconButton} from 'react-native-paper';
import dayjs from 'dayjs';
import Steps from './List';
import Confirm from '../common/Confirm';
import Icon from '../common/Icon';
import {colors} from '../../config/theme';
import {exportRecipeAsText} from '../../lib/util';

function share([content, options]) {
  Share.share(content, options)
    .then(() => null)
    .catch(console.log);
}

export default ({navigation, howTos, route}) => {
  const id = route.params.id;
  const item = howTos.findById(id) || {};

  const [isVisible, setVisible] = useState(false);
  const date = useMemo(
    () => dayjs(item.date).format('MMM D YYYY HH:MM').toUpperCase(),
    [item.date],
  );
  const onDelete = useCallback(() => setVisible(true), []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onEdit = useCallback(() => navigation.navigate('New', {id}), [id]);
  const _onCancel = useCallback(() => setVisible(false), []);
  const _onConfirm = () => {
    howTos.delete(id);
    navigation.pop();
  };
  const _goBack = useCallback(() => navigation.goBack(), [navigation]);
  const _viewImage = useCallback(
    (source) => navigation.navigate('ImageViewer', {source}),
    [navigation],
  );
  const _share = useCallback(() => share(exportRecipeAsText(item)), [item]);

  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <View style={styles.left}>
          <IconButton
            onPress={_goBack}
            icon={() => <Icon name="left" size={24} />}
          />
          <Text numberOfLines={1} ellipsizeMode="tail">
            {date}
          </Text>
        </View>
        <View style={styles.menu}>
          <IconButton
            onPress={_share}
            icon={() => <Icon name="sharealt" size={24} />}
          />
          <IconButton
            onPress={onEdit}
            icon={() => <Icon name="edit" size={24} />}
          />
          <IconButton
            onPress={onDelete}
            icon={() => <Icon color={colors.danger} name="delete" size={24} />}
          />
        </View>
      </View>
      <Steps
        image={item.image}
        title={item.title}
        category={item.category}
        ingredients={item.ingredients}
        data={item.steps}
        viewImage={_viewImage}
      />
      <Confirm
        isVisible={isVisible}
        onCancel={_onCancel}
        onConfirm={_onConfirm}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 0,
    backgroundColor: 'white',
  },
  appbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menu: {
    flexDirection: 'row',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
