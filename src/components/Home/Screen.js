import React, {useState, useCallback, useMemo} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Text, Searchbar} from 'react-native-paper';
import List from '../List';
import Fab from '../common/Fab';
import partOfDay from '../../lib/time';

export default ({navigation, ui, howTos}) => {
  const {
    state: {userName},
  } = ui;
  const {
    state: {query},
    data,
    filterData,
  } = howTos;
  const [focus, setFocus] = useState(false);
  const onFocus = useCallback(() => setFocus(true), []);
  const onBlur = useCallback(() => setFocus(false), []);
  const _hailOrange = useCallback(() => navigation.navigate('Welcome'), [
    navigation,
  ]);
  const navigateToDetails = useCallback(
    (id) => navigation.navigate('Details', {id}),
    [navigation],
  );

  let source = useMemo(() => require('../../assets/orange.png'), []);

  return (
    <View style={styles.container}>
      {!focus && (
        <View style={styles.header}>
          <View>
            <Text style={styles.text}>
              <Text style={styles.hail}>Hey </Text>
              {userName},
            </Text>
            <Text style={styles.text}>Good {partOfDay()}</Text>
          </View>
          <TouchableOpacity onPress={_hailOrange}>
            <Image source={source} style={styles.avatar} />
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.search}>
        <Searchbar
          value={query}
          onFocus={onFocus}
          onBlur={onBlur}
          onChangeText={filterData}
          placeholder="How to..."
        />
      </View>
      <List data={data} navigateToDetails={navigateToDetails} />
      <View style={styles.fab}>
        <Fab icon="plus" onPress={() => navigation.navigate('New')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingVertical: 4,
  },
  avatar: {
    width: 64,
    height: 64,
  },
  search: {
    marginTop: 20,
    marginBottom: 10,
  },
  fab: {
    alignItems: 'center',
  },
  list: {
    flex: 1,
  },
});
