import {Container} from 'unstated';
import shortid from 'shortid';
import dayjs from 'dayjs';

const DATE_FORMAT = 'MMM D YYYY HH:MM';

export class Step {
  id = null;
  label = null;
  constructor(label) {
    this.label = label;
    this.key = this.id = shortid.generate();
  }
}
export default class HowToContainer extends Container {
  state = {
    id: null,
    title: '',
    date: '',
    steps: [],
  };
  store = null;

  constructor(store, json) {
    this.store = store;
    this.state = {
      id: shortid.generate(),
      title: json.title,
      date: dayjs().toISOString(),
      steps: json.steps,
    };
  }

  delete = () => {
    this.store.removeHowTo(this.asJson);
  };

  get asJson() {
    return {
      id: this.state.id,
      title: this.state.title,
      date: dayjs(this.state.date).format(DATE_FORMAT),
      steps: this.state.steps,
    };
  }

  updateFromJson = (json) => {
    this.setState({
      title: json.title,
      date: dayjs().toISOString(),
      steps: json.steps,
    });
  };
}
