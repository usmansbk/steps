import {Container} from 'unstated';
import shortid from 'shortid';
import dayjs from 'dayjs';

const DATE_FORMAT = 'MMM D YYYY HH:MM';

const data = [
  {
    key: 1,
    label: 'Go to the repo you want to work with',
    attachment: null,
  },
  {
    key: 2,
    label:
      'GGo to the repo you want to work withGo to the repo you want to work withGo to the repo you want to work withGo to the repo you want to work witho to the repo you want to work with',
  },
  {
    key: 3,
    label: 'Go to the repo you want to work with',
  },
  {
    key: 4,
    label: 'Go to the repo you want to work with',
  },
  {
    key: 5,
    label: 'Go to the repo you want to work with',
  },
  {
    key: 6,
    label: 'Go to the repo you want to work with',
  },
  {
    key: 7,
    label: 'Go to the repo you want to work with',
  },
  {
    key: 8,
    label: 'Go to the repo you want to work with',
  },
  {
    key: 9,
    label: 'Go to the repo you want to work with',
  },
  {
    key: 10,
    label: 'Go to the repo you want to work with',
  },
];

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
