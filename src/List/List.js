import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import Empty from './Empty';
import Item from './Item';
import data from './data';

export default class List extends React.Component {
  _onPressItem = () => console.log('Pressed');

  _renderItem = ({item}) => {
    const {title, date} = item;
    return <Item title={title} date={date} onPress={this._onPressItem} />;
  };
  _renderItemSeparator = () => <View style={styles.separator} />;

  _renderEmpty = () => <Empty />;
  _keyExtractor = (item) => item.id;

  render() {
    return (
      <FlatList
        data={data}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        ListEmptyComponent={this._renderEmpty}
        ListHeaderComponent={this._renderHeader}
        ItemSeparatorComponent={this._renderItemSeparator}
      />
    );
  }
}

const styles = StyleSheet.create({
  separator: {
    height: 4,
  },
});
