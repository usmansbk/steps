import React from 'react';
import {View, StyleSheet} from 'react-native';
import FlatList from 'react-native-draggable-flatlist';
import Item from './Item';

export default class List extends React.Component {
  _onRef = (ref) => {
    this.flatlist = ref;
  };
  scrollDown = () => {
    this.flatlist && this.flatlist.current._component.scrollToEnd();
  };
  _onDelete = (id) => this.props.removeStep(id);

  _keyExtractor = (item, index) => String(index);
  _renderItem = ({item, drag, index, isActive}) => {
    return (
      <Item
        id={item.id}
        step={index}
        details={item.label}
        isActive={isActive}
        onLongPress={drag}
        onDelete={this._onDelete}
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
        initialNumToRender={2}
        onDragEnd={({data}) => this.props.onSwap(data)}
        onRef={(ref) => {
          this.flatlist = ref;
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    height: 100,
  },
  separator: {
    height: 10,
  },
});
