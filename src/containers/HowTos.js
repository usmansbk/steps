import AsyncStorage from '@react-native-community/async-storage';
import {PersistContainer} from 'unstated-persist';
import dayjs from 'dayjs';
import {filterByQuery} from '../lib/util';
import HowTo from './HowTo';
import tutorial from './tutorial';

export default class HowTosContainer extends PersistContainer {
  persist = {
    key: 'howtos',
    version: 2,
    storage: AsyncStorage,
  };

  state = {
    data: [tutorial],
    query: '',
  };

  filterData = (query) => this.setState({query});

  get data() {
    if (!this.state.query) {
      return this.state.data.sort((a, b) => dayjs(a.date).diff(b.date) * -1);
    }
    return filterByQuery(this.state.data, this.state.query.toLocaleLowerCase());
  }

  createHowTo = (json, image) => {
    const howTo = new HowTo(json, image);
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
