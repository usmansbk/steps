import {SCHEMA, TYPE, ID} from './constants';
import {first, value} from './util';

const URL = SCHEMA + 'url';
const IMAGE = SCHEMA + 'image';
const LABEL = SCHEMA + 'text';
const HOWTO = SCHEMA + 'HowTo';
const STEP = SCHEMA + 'HowToStep';
const SECTION = SCHEMA + 'HowToSection';
const SECTION_ITEMS = SCHEMA + 'itemListElement';

const RECIPE = SCHEMA + 'Recipe';
const NAME = SCHEMA + 'name';
const CATEGORY = SCHEMA + 'recipeCategory';
const INGREDIENT = SCHEMA + 'recipeIngredient';
const STEPS = SCHEMA + 'step';

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

  const howtoJson = jsonld_arr.find((arr) => {
    const found = arr.find((item) => item[TYPE].includes(HOWTO));
    return found;
  });

  const howto = first(howtoJson);
  const stepsJson = howto[STEPS];
  const steps = formatSteps(stepsJson);

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

function formatIngredients(array) {
  return array.map((obj) => value(obj)).join('\n');
}

function formatSteps(array) {
  let steps = [];

  for (let elem of array) {
    if (elem[TYPE].includes(SECTION)) {
      const items = elem[SECTION_ITEMS];
      steps = steps.concat(formatSteps(items));
    } else if (elem[TYPE].includes(STEP)) {
      const label = value(first(elem[LABEL]));
      const uri = value(first(elem[IMAGE]), ID);
      steps.push({
        label,
        photo: uri
          ? {
              uri,
            }
          : null,
      });
    }
  }

  return steps;
}
