import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import Footer from './Footer';
import Item from './Item';

export default class List extends React.Component {
  static defaultProps = {
    data: [],
  };

  _keyExtractor = (item) => String(item.key);
  _renderItem = ({item, index}) => {
    const {label, key} = item;
    return <Item label={label} step={index + 1} itemKey={key} />;
  };
  _renderSeparator = () => <View style={styles.separator} />;
  _renderFooter = () => <Footer />;

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
  separator: {
    height: 8,
  },
});
