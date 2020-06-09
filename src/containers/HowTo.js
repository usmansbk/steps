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
export default class HowToContainer {
  store = null;

  constructor(store, json) {
    this.id = shortid.generate();
    this.title = json.title;
    this.date = dayjs().toISOString();
    this.steps = json.steps;
    this.store = store;
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
    this.title = json.title;
    this.date = dayjs().toISOString();
    this.steps = json.steps;
  };
}
