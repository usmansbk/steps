import React from 'react';
import {View, StyleSheet} from 'react-native';
import FlatList from 'react-native-draggable-flatlist';
import Item from './Item';

export default class List extends React.Component {
  _onPressItem = () => console.log('cancel');

  _keyExtractor = (item) => String(item.key);
  _renderItem = ({item, drag}) => {
    return (
      <Item
        step={item.key}
        details={item.label}
        onPress={this._onPressItem}
        onLongPress={drag}
      />
    );
  };
  _renderFooter = () => <View style={styles.footer} />;
  _renderSeparator = () => <View style={styles.separator} />;

  render() {
    return (
      <FlatList
        data={this.props.data}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
        ListFooterComponent={this._renderFooter}
        ItemSeparatorComponent={this._renderSeparator}
      />
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    height: 50,
  },
  separator: {
    height: 10,
  },
});
