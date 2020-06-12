import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import TextInput from '../../common/TextInput';

export default ({
  title,
  category,
  ingredients,
  onBlurTitle,
  onChangeTitle,
  onChangeCategory,
  onChangeIngredients,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.image}
          source={require('../../../assets/fish.png')}
        />
      </TouchableOpacity>
      <TextInput
        value={title}
        autoFocus={!title}
        multiline
        onChangeText={onChangeTitle}
        onBlur={onBlurTitle}
        placeholder="How to..."
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
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
});
