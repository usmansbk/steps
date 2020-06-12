import React from 'react';
import {View, StyleSheet} from 'react-native';
import FlatList from 'react-native-draggable-flatlist';
import Item from './Item';
import Header from './Header';
import Fab from '../../common/Fab';

export default class List extends React.Component {
  state = {
    offsetY: 0,
  };
  _onRef = (ref) => {
    this.flatlist = ref;
  };

  _onScroll = (offsetY) => {
    this.setState({
      offsetY,
    });
  };

  _scrollToTop = () =>
    this.flatlist.current._component.scrollToIndex({index: 0});

  scrollDown = () => {
    this.flatlist && this.flatlist.current._component.scrollToEnd();
  };
  _onDelete = (id) => this.props.removeStep(id);
  _onEditStep = (id) => this.props.navigateToEditStep(id);

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
        onEditStep={this._onEditStep}
      />
    );
  };
  _renderFooter = () => <View style={styles.footer} />;
  _renderSeparator = () => <View style={styles.separator} />;
  _renderHeader = () => {
    const {
      image,
      title,
      category,
      ingredients,
      onChangeIngredients,
      onChangeCategory,
      onChangeTitle,
      onBlurTitle,
      onPressAvatar,
      loading,
    } = this.props;
    return (
      <Header
        image={image}
        title={title}
        category={category}
        ingredients={ingredients}
        onBlurTitle={onBlurTitle}
        onChangeIngredients={onChangeIngredients}
        onChangeCategory={onChangeCategory}
        onChangeTitle={onChangeTitle}
        onPressAvatar={onPressAvatar}
        loading={loading}
      />
    );
  };

  render() {
    return (
      <>
        <FlatList
          data={this.props.data}
          removeClippedSubviews={false}
          renderItem={this._renderItem}
          onScrollOffsetChange={this._onScroll}
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
          onScroll={this._onScroll}
        />
        {Boolean(this.state.offsetY > 600) && (
          <Fab small style={styles.fab} icon="up" onPress={this._scrollToTop} />
        )}
      </>
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
  fab: {
    right: 0,
    bottom: 90,
    margin: 16,
  },
});
