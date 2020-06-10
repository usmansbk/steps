import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import Empty from './Empty';
import Item from './Item';

export default class List extends React.Component {
  _onPressItem = (id) => this.props.navigateToDetails(id);

  _renderItem = ({item}) => {
    const {id, title, date, steps, category} = item;
    return (
      <Item
        id={id}
        title={title}
        date={date}
        category={category}
        onPress={this._onPressItem}
        head={steps[0]}
      />
    );
  };
  _renderItemSeparator = () => <View style={styles.separator} />;

  _renderEmpty = () => <Empty />;
  _keyExtractor = (item) => String(item.id);
  _renderFooter = () => <View style={styles.footer} />;

  render() {
    return (
      <FlatList
        data={this.props.data}
        style={styles.list}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        initialNumToRender={2}
        ListEmptyComponent={this._renderEmpty}
        ListHeaderComponent={this._renderHeader}
        ListFooterComponent={this._renderFooter}
        ItemSeparatorComponent={this._renderItemSeparator}
      />
    );
  }
}

const styles = StyleSheet.create({
  separator: {
    height: 4,
  },
  footer: {
    height: 80,
  },
});
