import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Text, IconButton} from 'react-native-paper';
import Icon from '../../common/Icon';
import {colors} from '../../../config/theme';

export default ({
  step,
  details,
  photo,
  id,
  onDelete,
  onLongPress,
  isActive,
}) => {
  const onPress = () => onDelete(id);
  return (
    <TouchableOpacity onLongPress={onLongPress}>
      <View style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.step}>STEP {step + 1}</Text>
          <IconButton
            onPress={onPress}
            disabled={isActive}
            icon={() => (
              <Icon
                color="gray"
                size={20}
                name={isActive ? 'swap' : 'closecircle'}
              />
            )}
          />
        </View>
        {Boolean(details) && <Text style={styles.details}>{details}</Text>}
        {Boolean(photo) && (
          <Image
            resizeMode="contain"
            defaultSource={require('../../../assets/noimage.jpg')}
            source={photo}
            style={styles.image}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    backgroundColor: colors.lightGray,
    borderRadius: 8,
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  number: {
    fontWeight: 'bold',
    color: 'gray',
    fontSize: 16,
  },
  step: {
    fontWeight: 'bold',
  },
  details: {
    color: '#2d3436',
    padding: 8,
    fontSize: 15,
    lineHeight: 24,
  },
  image: {
    height: 200,
    width: '100%',
    borderRadius: 16,
    marginBottom: 8,
  },
});
