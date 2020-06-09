import AsyncStorage from '@react-native-community/async-storage';
import {PersistContainer} from 'unstated-persist';
import HowTo from './HowTo';

export default class HowTosContainer extends PersistContainer {
  persist = {
    key: 'howtos',
    version: 1,
    storage: AsyncStorage,
  };

  state = {
    data: [],
    query: '',
  };

  filterData = (query) => this.setState({query});

  get data() {
    if (!this.state.query) {
      return this.state.data.sort(
        (a, b) =>
          new Date(a.date).getMilliseconds() -
          new Date(b.date).getMilliseconds(),
      );
    }
    return this.state.data.filter((item) =>
      item.title.toLowerCase().includes(this.state.query.toLowerCase()),
    );
  }

  createHowTo = (json) => {
    const howTo = new HowTo(json);
    if (json.id) {
      this.setState({
        data: this.state.data
          .filter((current) => current.id !== json.id)
          .concat(howTo),
      });
    } else {
      this.setState({
        data: [...this.state.data, howTo],
      });
    }
  };

  delete = (id) => {
    this.setState({
      data: this.state.data.filter((howTo) => howTo.id !== id),
    });
  };

  findById = (id) => {
    return this.state.data.find((howTo) => howTo.id === id);
  };
}
