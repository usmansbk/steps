import AsyncStorage from '@react-native-community/async-storage';
import {PersistContainer} from 'unstated-persist';
import {Step} from './HowTo';

export default class DraftContainer extends PersistContainer {
  persist = {
    key: 'draft',
    version: 2,
    storage: AsyncStorage,
  };

  state = {
    id: null,
    title: '',
    category: '',
    ingredients: '',
    steps: [],
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

  onChangeIngredients = (ingredients) => {
    this.setState({
      ingredients,
    });
  };

  addStep = (text, photo) => {
    if (text || photo) {
      const step = new Step(text, photo);
      this.setState((prev) => ({
        steps: [...prev.steps, step],
      }));
    }
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
      title: '',
      category: '',
      ingredients: '',
      steps: [],
    });
  };

  prepare = (json) => {
    this.setState({
      id: json.id,
      title: json.title,
      ingredients: json.ingredients,
      steps: json.steps,
      category: json.category,
    });
  };
}
