import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import {colors} from '../../../config/theme';

export default ({label, photo, viewImage}) => {
  const _viewImage = () => viewImage(photo);
  return (
    <View style={styles.container}>
      {Boolean(label) && <Text style={styles.label}>{label}</Text>}
      {Boolean(photo) && (
        <TouchableOpacity onPress={_viewImage}>
          <Image
            resizeMode="contain"
            source={photo}
            style={styles.image}
            defaultSource={require('../../../assets/noimage.jpg')}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    backgroundColor: colors.lightGray,
    borderRadius: 8,
  },
  label: {
    color: '#2d3436',
    padding: 8,
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 8,
  },
  step: {
    fontWeight: 'bold',
    marginVertical: 4,
  },
  image: {
    height: 200,
    width: '100%',
    borderRadius: 16,
    marginBottom: 8,
  },
});
