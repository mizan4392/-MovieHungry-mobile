import React from 'react';
import {Text, FlatList, View, StyleSheet} from 'react-native';
import {MovieI} from '../requests/get/movies.interface';

interface ListProps {
  movies: MovieI[];
  title: string;
}

export default function List({movies, title}: ListProps) {
  return (
    <View style={styles.list}>
      <View>
        <Text style={styles.title}> {title}</Text>
      </View>
      <View>
        <FlatList
          data={movies}
          horizontal={true}
          renderItem={({item}) => <Text>{item.title}</Text>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    marginTop: 25,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
});
