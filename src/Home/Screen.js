import React, {useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Text, Searchbar} from 'react-native-paper';
import List from '../List';
import Fab from '../common/Fab';
import partOfDay from '../lib/time';

export default ({navigation}) => {
  const [focus, setFocus] = useState(false);
  const onFocus = () => setFocus(true);
  const onBlur = () => setFocus(false);
  const navigateToDetails = (id) => navigation.navigate('Details', {id});

  const name = 'michel';
  let source = require('../images/male.png');

  return (
    <View style={styles.container}>
      {!focus && (
        <View style={styles.header}>
          <View>
            <Text style={styles.text}>
              <Text style={styles.hail}>Hey </Text>
              {name},
            </Text>
            <Text style={styles.text}>Good {partOfDay()}</Text>
          </View>
          <Image source={source} style={styles.avatar} />
        </View>
      )}
      <View style={styles.search}>
        <Searchbar onFocus={onFocus} onBlur={onBlur} placeholder="How to..." />
      </View>
      <View style={styles.list}>
        <List navigateToDetails={navigateToDetails} />
      </View>
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
    paddingTop: 40,
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
    marginVertical: 20,
  },
  fab: {
    alignItems: 'center',
  },
  list: {
    flex: 1,
  },
});
