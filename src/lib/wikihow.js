const SCHEMA = 'http://schema.org/';
const TYPE = '@type';
const VALUE = '@value';
const ID = '@id';
const URL = SCHEMA + 'url';
const IMAGE = SCHEMA + 'image';
const LABEL = SCHEMA + 'text';
const HOWTO = SCHEMA + 'HowTo';

const RECIPE = SCHEMA + 'Recipe';
const NAME = SCHEMA + 'name';
const CATEGORY = SCHEMA + 'recipeCategory';
const INGREDIENT = SCHEMA + 'recipeIngredient';
const STEPS = SCHEMA + 'step';

export default async function processor(jsonld_arr) {
  console.log(JSON.stringify(jsonld_arr, null, 3));
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

  const howtoJson = jsonld_arr.find((arr) => {
    const found = arr.find((item) => item[TYPE].includes(HOWTO));
    return found;
  });
  const howto = first(howtoJson);
  const steps = formatSteps(howto[STEPS]);

  const result = {
    image: {
      uri,
    },
    title,
    category,
    ingredients,
    steps,
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
  return array.map((obj) => value(obj)).join('\n');
}

function formatSteps(array) {
  return array.map((step) => {
    const label = value(first(step[LABEL]));
    const uri = value(first(step[IMAGE]), ID);
    return {
      label,
      photo: uri
        ? {
            uri,
          }
        : null,
    };
  });
}
