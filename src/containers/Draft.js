import AsyncStorage from '@react-native-community/async-storage';
import {PersistContainer} from 'unstated-persist';
import {Step} from './HowTo';

export default class DraftContainer extends PersistContainer {
  persist = {
    key: 'draft',
    version: 3,
    storage: AsyncStorage,
  };

  state = {
    id: null,
    image: null,
    title: '',
    category: '',
    ingredients: [],
    steps: [],
  };

  setImage = (image) => {
    this.setState({
      image,
    });
  };

  onTitleChange = (title) => {
    this.setState({
      title,
    });
  };

  onCategoryChange = (category) => {
    this.setState({
      category,
    });
  };

  onAddIngredient = (ingredient, add = true) => {
    if (add) {
      this.setState((prev) => ({
        ingredients: [...prev.ingredients, ingredient],
      }));
    } else {
      const newList = this.state.ingredients
        .slice(0, ingredient)
        .concat(this.state.ingredients.slice(ingredient + 1));
      this.setState({
        ingredients: newList,
      });
    }
  };

  addStep = (text, photo) => {
    if (text || photo) {
      const step = new Step(text, photo);
      this.setState((prev) => ({
        steps: [...prev.steps, step],
      }));
    }
  };

  findStepById = (id) => this.state.steps.find((step) => step.id === id);

  updateStep = ({id, label, photo}) => {
    const index = this.state.steps.findIndex((step) => step.id === id);
    const step = this.state.steps[index];
    const newStep = Object.assign({}, step, {label, photo});
    const steps = this.state.steps
      .slice(0, index)
      .concat([newStep])
      .concat(this.state.steps.slice(index + 1));
    this.setState({steps});
  };

  onSwap = (steps) => {
    this.setState({steps});
  };

  removeStep = (id) => {
    this.setState((prev) => ({
      steps: prev.steps.filter((step) => step.id !== id),
    }));
  };

  dispose = () => {
    this.setState({
      id: null,
      image: null,
      title: '',
      category: '',
      ingredients: [],
      steps: [],
    });
  };

  prepare = (json) => {
    this.setState({
      id: json.id,
      image: json.image,
      title: json.title,
      ingredients: json.ingredients,
      steps: json.steps,
      category: json.category,
    });
  };
}
