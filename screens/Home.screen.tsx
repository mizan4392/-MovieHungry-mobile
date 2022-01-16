import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {getPopularMovies, getUpcomingMovies} from '../requests/get/movies';
import {} from '../requests/get/movies';
import {MovieI} from '../requests/get/movies.interface';
//@ts-ignore
import {SliderBox} from 'react-native-image-slider-box';
import {IMAGE_BASE} from '../utils/http';
import List from '../components/List.component';
export const Home = () => {
  const [upComingMovies, setUpComingMovies] = useState<Array<MovieI>>([]);
  const [popularMovies, setPopularMovies] = useState<Array<MovieI>>([]);
  const [movieImages, setMovieImages] = useState<Array<string>>([]);
  const dimenssion = Dimensions.get('screen');
  useEffect(() => {
    getUpcomingMovies().then(moviesres => {
      const images: Array<string> = [];
      moviesres.results?.forEach((movie: MovieI) => {
        images.push(`${IMAGE_BASE}${movie.poster_path}`);
      });

      setMovieImages(images);
      setUpComingMovies(moviesres.results);
    });

    getPopularMovies().then(popular => {
      setPopularMovies(popular.results);
    });
  }, []);

  return (
    <React.Fragment>
      <View style={styles.sliderContainer}>
        <SliderBox
          images={movieImages}
          circleLoop={true}
          sliderBoxHeight={dimenssion.height / 1.5}
          autoPlay={true}
          dotStyle={styles.sliderOdtStyle}
        />
      </View>
      <View style={styles.sliderContainer}>
        <List movies={popularMovies} title="Popular Movies" />
      </View>
    </React.Fragment>
  );
};
const styles = StyleSheet.create({
  sliderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderOdtStyle: {
    height: 0,
  },
});
