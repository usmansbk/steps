import React from 'react';
import {View, StyleSheet} from 'react-native';
import FlatList from 'react-native-draggable-flatlist';
import Item from './Item';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
    };
  }
  _onPressItem = () => console.log('cancel');

  _keyExtractor = (item, index) => String(index);
  _renderItem = ({item, drag, index, isActive}) => {
    return (
      <Item
        step={index}
        details={item.label}
        isActive={isActive}
        onLongPress={drag}
      />
    );
  };
  _renderFooter = () => <View style={styles.footer} />;
  _renderSeparator = () => <View style={styles.separator} />;

  render() {
    return (
      <FlatList
        data={this.state.data}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
        ListFooterComponent={this._renderFooter}
        ItemSeparatorComponent={this._renderSeparator}
        initialNumToRender={2}
        onDragEnd={({data}) => this.setState({data})}
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
