import React from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import Footer from './Footer';
import Item from './Item';

export default class List extends React.Component {
  static defaultProps = {
    data: [],
  };

  _keyExtractor = (item) => String(item.key);
  _renderItem = ({item, index}) => {
    const {label, key, photo} = item;
    return <Item label={label} step={index + 1} itemKey={key} photo={photo} />;
  };
  _renderSeparator = () => <View style={styles.separator} />;
  _renderFooter = () => <Footer />;
  _renderHeader = () => (
    <View>
      <Text style={styles.heading}>{this.props.title}</Text>
    </View>
  );

  render() {
    return (
      <FlatList
        data={this.props.data}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
        ListFooterComponent={this._renderFooter}
        ListHeaderComponent={this._renderHeader}
        ItemSeparatorComponent={this._renderSeparator}
      />
    );
  }
}

const styles = StyleSheet.create({
  separator: {
    height: 8,
  },
  heading: {
    fontSize: 27,
    fontWeight: 'bold',
    paddingBottom: 8,
  },
});
