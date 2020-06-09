import {Container} from 'unstated';
import {Step} from './HowTo';

export default class DraftContainer extends Container {
  state = {
    id: null,
    title: '',
    steps: [],
  };

  onTitleChange = (title) => {
    this.setState({
      title,
    });
  };

  addStep = (text) => {
    if (text) {
      const step = new Step(text);
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
      title: '',
      steps: [],
    });
  };

  prepare = (json) => {
    this.setState({
      id: json.id,
      title: json.title,
      steps: json.steps,
    });
  };
}
