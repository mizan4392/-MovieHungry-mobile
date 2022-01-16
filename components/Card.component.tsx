import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {MovieI} from '../requests/get/movies.interface';
import {IMAGE_BASE} from '../utils/http';
const ImagePlaceholder = require('../assets/images/placeholder.png');
interface CardProps {
  movie: MovieI;
}

export default function Card({movie}: CardProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={styles.image}
        source={
          movie.poster_path
            ? {
                uri: `${IMAGE_BASE}${movie.poster_path}`,
              }
            : ImagePlaceholder
        }
        resizeMode="cover"
      />
      {!movie?.poster_path ? (
        <Text style={styles.movieName}>{movie.title}</Text>
      ) : null}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    position: 'relative',
    alignItems: 'center',
    height: 200,
  },
  image: {
    height: 200,
    width: 120,
    borderRadius: 20,
  },
  movieName: {
    position: 'absolute',
    top: 10,
    textAlign: 'center',
  },
});
