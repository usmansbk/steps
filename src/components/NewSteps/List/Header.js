import React, {useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Text, IconButton} from 'react-native-paper';
import TextInput from '../../common/TextInput';
import Icon from '../../common/Icon';

export default ({
  image,
  title,
  category,
  ingredients,
  onBlurTitle,
  onChangeTitle,
  onChangeCategory,
  onAddIngredient,
  onPressAvatar,
}) => {
  const [ingredient, onChangeIngredients] = useState('');
  const _addIngredient = () => {
    onAddIngredient(ingredient);
    onChangeIngredients('');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressAvatar}>
        <Image
          style={image ? styles.image : styles.placeholder}
          resizeMode={image ? 'cover' : 'contain'}
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
      {Array.isArray(ingredients) && (
        <View>
          {ingredients.map((ing) => (
            <Text style={[styles.category, styles.lineSpacing]}>{ing}</Text>
          ))}
        </View>
      )}
      <View style={styles.ingredientInput}>
        <TextInput
          value={ingredient}
          onChangeText={onChangeIngredients}
          placeholder="Add Ingredient..."
          style={[styles.category, styles.ingredientInputBox]}
          multiline
        />
        <IconButton
          disabled={!ingredient}
          onPress={_addIngredient}
          icon={() => <Icon name="pluscircleo" size={24} />}
        />
      </View>
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
    width: '100%',
    height: 200,
    alignSelf: 'center',
  },
  placeholder: {
    borderRadius: 16,
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  ingredientInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ingredientInputBox: {
    flex: 1,
  },
  lineSpacing: {
    marginVertical: 8,
  },
});
