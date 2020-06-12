import React from 'react';
import {View, StyleSheet} from 'react-native';
import FlatList from 'react-native-draggable-flatlist';
import Item from './Item';
import Header from './Header';

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
        photo={item.photo}
        isActive={isActive}
        onLongPress={drag}
        onDelete={this._onDelete}
      />
    );
  };
  _renderFooter = () => <View style={styles.footer} />;
  _renderSeparator = () => <View style={styles.separator} />;
  _renderHeader = () => {
    const {
      title,
      category,
      ingredients,
      onChangeIngredients,
      onChangeCategory,
      onChangeTitle,
      onBlurTitle,
      loading,
    } = this.props;
    return (
      <Header
        title={title}
        category={category}
        ingredients={ingredients}
        onBlurTitle={onBlurTitle}
        onChangeIngredients={onChangeIngredients}
        onChangeCategory={onChangeCategory}
        onChangeTitle={onChangeTitle}
        loading={loading}
      />
    );
  };

  render() {
    return (
      <FlatList
        data={this.props.data}
        removeClippedSubviews={false}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
        ListFooterComponent={this._renderFooter}
        ListHeaderComponent={this._renderHeader}
        ItemSeparatorComponent={this._renderSeparator}
        initialNumToRender={1}
        keyboardShouldPersistTaps="always"
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
