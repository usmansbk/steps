import React, {useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Text, IconButton} from 'react-native-paper';
import TextInput from '../../common/TextInput';
import Icon from '../../common/Icon';
import IngredientItem from './IngredientItem';

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
  const _removeIngredient = (index) => {
    onAddIngredient(index, false);
  };
  const _editIngredient = (text, index) => {
    onAddIngredient(text, index, true);
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
      <Text style={styles.topSpacing}>NAME</Text>
      <TextInput
        value={title}
        autoFocus={!title}
        onChangeText={onChangeTitle}
        onBlur={onBlurTitle}
        placeholder="How to make..."
        style={styles.textinput}
      />
      <Text style={styles.topSpacing}>CATEGORY</Text>
      <TextInput
        value={category}
        onChangeText={onChangeCategory}
        placeholder="#"
        style={styles.category}
      />
      <Text style={styles.topSpacing}>INGREDIENTS</Text>
      {Array.isArray(ingredients) && (
        <View>
          {ingredients.map((ing, index) => (
            <IngredientItem
              text={ing}
              index={index}
              onDelete={_removeIngredient}
              onEdit={_editIngredient}
            />
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
  topSpacing: {
    marginTop: 8,
  },
});
