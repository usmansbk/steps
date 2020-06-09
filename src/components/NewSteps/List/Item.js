import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Text, IconButton} from 'react-native-paper';
import Icon from '../../common/Icon';

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
      <View>
        <View style={styles.head}>
          <Text>STEP {step + 1}</Text>
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
        {Boolean(photo) && (
          <Image
            defaultSource={require('../../../images/noimage.jpg')}
            source={photo}
            style={styles.image}
          />
        )}
        {Boolean(details) && <Text style={styles.details}>{details}</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
  details: {
    fontWeight: 'bold',
  },
  image: {
    height: 200,
    borderRadius: 16,
    marginBottom: 4,
  },
});
