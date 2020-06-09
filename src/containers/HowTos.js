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
}
