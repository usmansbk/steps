import {Container} from 'unstated';
import data from './data';
import HowTo, {Step} from './HowTo';

export default class HowTosContainer extends Container {
  state = {
    data: data,
    query: '',
    draft: {
      title: '',
      steps: [],
    },
  };

  filterData = (query) => this.setState({query});

  onDraftTitleChange = (title) =>
    this.setState((prev) => ({
      draft: Object.assign({}, prev.draft, {title}),
    }));

  addStep = (text) => {
    if (text) {
      const step = new Step(text);
      console.log(step);
      this.setState((prev) => ({
        draft: Object.assign({}, prev.draft, {
          steps: [...prev.draft.steps, step],
        }),
      }));
    }
  };

  get data() {
    if (!this.state.query) {
      return this.state.data;
    }
    return this.state.data.filter((item) =>
      item.title.toLowerCase().includes(this.state.query.toLowerCase()),
    );
  }

  createHowTo = () => {
    const howTo = new HowTo(this, this.state.draft);
    this.setState({
      data: [...this.state.data, howTo],
    });
    return howTo;
  };
}
