import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import TextInput from '../../common/TextInput';

export default ({
  image,
  title,
  category,
  ingredients,
  onBlurTitle,
  onChangeTitle,
  onChangeCategory,
  onChangeIngredients,
  onPressAvatar,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressAvatar}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={image || require('../../../assets/fish.png')}
          defaultSource={require('../../../assets/fish.png')}
        />
      </TouchableOpacity>
      <TextInput
        value={title}
        autoFocus={!title}
        onChangeText={onChangeTitle}
        onBlur={onBlurTitle}
        placeholder="How to make..."
        style={styles.textinput}
      />
      <TextInput
        value={category}
        onChangeText={onChangeCategory}
        placeholder="Category"
        style={styles.category}
      />
      <TextInput
        value={ingredients}
        onChangeText={onChangeIngredients}
        placeholder="Ingredients"
        style={styles.category}
        multiline
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    paddingVertical: 16,
  },
  textinput: {
    fontSize: 27,
    fontWeight: 'bold',
  },
  category: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    borderRadius: 16,
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
});
