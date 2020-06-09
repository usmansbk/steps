import AsyncStorage from '@react-native-community/async-storage';
import {PersistContainer} from 'unstated-persist';

export default class UIContainer extends PersistContainer {
  persist = {
    key: 'ui',
    version: 1,
    storage: AsyncStorage,
  };

  state = {
    firstLaunch: true,
    userName: 'Friend',
  };

  setName = (userName) => {
    this.setState({userName});
  };

  toggleFirstLaunch = () => {
    this.setState({firstLaunch: false});
  };
}
