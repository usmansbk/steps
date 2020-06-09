import {Container} from 'unstated';
import HowTo from './HowTo';

export default class HowTosContainer extends Container {
  state = {
    data: [],
    query: '',
  };

  filterData = (query) => this.setState({query});

  get data() {
    if (!this.state.query) {
      return this.state.data;
    }
    return this.state.data.filter((item) =>
      item.title.toLowerCase().includes(this.state.query.toLowerCase()),
    );
  }

  createHowTo = (json) => {
    const howTo = new HowTo(this, json);
    this.setState({
      data: [...this.state.data, howTo],
    });
    return howTo;
  };

  removeHowTo = (json) => {
    this.setState({
      data: this.state.data.filter((howTo) => howTo.id !== json.id),
    });
  };

  findById = (id) => {
    return this.state.data.find((howTo) => howTo.id === id);
  };
}
