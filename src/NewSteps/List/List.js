import React from 'react';
import {FlatList} from 'react-native';
import Item from './Item';

export default class List extends React.Component {
  _onPressItem = () => console.log('cancel');

  _keyExtractor = (item) => String(item.step);
  _renderItem = ({item}) => {
    return (
      <Item
        step={item.step}
        details={item.details}
        onPress={this._onPressItem}
      />
    );
  };

  render() {
    return (
      <FlatList
        data={this.props.data}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
      />
    );
  }
}
