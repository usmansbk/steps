import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';

export default ({label, photo, viewImage}) => {
  const _viewImage = () => viewImage(photo);
  return (
    <View style={styles.container}>
      {Boolean(label) && <Text style={styles.label}>{label}</Text>}
      {Boolean(photo) && (
        <TouchableOpacity onPress={_viewImage}>
          <Image
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
  },
  label: {
    color: '#2d3436',
    paddingBottom: 8,
    fontSize: 15,
    lineHeight: 24,
  },
  step: {
    fontWeight: 'bold',
    marginVertical: 4,
  },
  image: {
    height: 200,
    borderRadius: 16,
  },
});
