import * as jsonld from 'jsonld';

const SCHEMA = 'http://schema.org/';
const TYPE = '@type';
const VALUE = '@value';
const ID = '@id';
const URL = SCHEMA + 'url';
const IMAGE = SCHEMA + 'image';

const RECIPE = SCHEMA + 'Recipe';
const NAME = SCHEMA + 'name';
const CATEGORY = SCHEMA + 'recipeCategory';
const INGREDIENT = SCHEMA + 'recipeIngredient';
const STEPS = SCHEMA + 'recipeInstructions';

export default async function processor(jsonld_arr) {
  const recipeJson = jsonld_arr.find((arr) => {
    const found = arr.find((item) => item[TYPE].includes(RECIPE));
    return found;
  });
  if (!recipeJson) {
    return null;
  }
  const recipe = first(recipeJson);

  const uri = value(first(first(recipe[IMAGE])[URL]), ID);
  const title = value(first(recipe[NAME]));
  const category = value(first(recipe[CATEGORY]));
  const ingredients = formatIngredients(recipe[INGREDIENT]);

  const result = {
    image: {
      uri,
    },
    title,
    category,
    ingredients,
    steps: [],
  };
  return result;
}

function first(array) {
  return array[0];
}

function value(obj, key = VALUE) {
  return obj[key];
}

function formatIngredients(array) {
  return array.map(value).join('\n');
}
