import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import Empty from './Empty';
import Item from './Item';
import data from './data';

export default class List extends React.Component {
  _onPressItem = (id) => this.props.navigateToDetails(id);

  _renderItem = ({item}) => {
    const {id, title, date} = item;
    return (
      <Item id={id} title={title} date={date} onPress={this._onPressItem} />
    );
  };
  _renderItemSeparator = () => <View style={styles.separator} />;

  _renderEmpty = () => <Empty />;
  _keyExtractor = (item) => String(item.id);

  render() {
    return (
      <FlatList
        data={data}
        style={styles.list}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        initialNumToRender={2}
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
