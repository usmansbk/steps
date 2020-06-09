import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, IconButton} from 'react-native-paper';
import dayjs from 'dayjs';
import Steps from './List';
import Confirm from '../common/Confirm';
import Icon from '../common/Icon';
import {colors} from '../../config/theme';

export default ({navigation, howTos, route}) => {
  const id = route.params.id;
  const item = howTos.findById(id) || {};

  const [isVisible, setVisible] = useState(false);
  const date = dayjs(item.date).format('MMM D YYYY HH:MM').toUpperCase();
  const onDelete = () => setVisible(true);
  const onEdit = () => navigation.navigate('New', {id});
  const _onCancel = () => setVisible(false);
  const _onConfirm = () => {
    howTos.delete(id);
    navigation.pop();
  };
  const _goBack = () => navigation.goBack();
  const _openImage = (source) => navigation.navigate('ImageViwer', {source});

  return (
    <View style={styles.container}>
      <View style={styles.dateline}>
        <IconButton
          onPress={_goBack}
          icon={() => <Icon name="left" size={24} />}
        />
        <Text>{date}</Text>
        <View style={styles.menu}>
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
      <Steps title={item.title} data={item.steps} openImage={_openImage} />
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
    padding: 20,
    backgroundColor: 'white',
  },
  dateline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menu: {
    flexDirection: 'row',
  },
});
