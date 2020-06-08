import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
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
