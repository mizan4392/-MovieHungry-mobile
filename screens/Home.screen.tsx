import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {getUpcomingMovies} from '../requests/get/movies';
import {} from '../requests/get/movies';
import {MovieI} from '../requests/get/movies.interface';
//@ts-ignore
import {SliderBox} from 'react-native-image-slider-box';
import {IMAGE_BASE} from '../utils/http';
export const Home = () => {
  const [movies, setMovies] = useState<Array<MovieI>>([]);
  const [movieImages, setMovieImages] = useState<Array<string>>([]);

  useEffect(() => {
    getUpcomingMovies().then(moviesres => {
      const images: Array<string> = [];
      moviesres.results?.forEach((movie: MovieI) => {
        images.push(`${IMAGE_BASE}${movie.poster_path}`);
      });
      setMovieImages(images);

      setMovies(moviesres.results);
    });
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <SliderBox
        // images={[
        //   'https://image.tmdb.org/t/p/w500/nk26r1JoKEXpptobBRBFRdq22lV.jpg',
        //   'https://image.tmdb.org/t/p/w500/7GcqdBKaMM9BWXWN07BirBMkcBF.jpg',
        //   'https://image.tmdb.org/t/p/w500/30SLnoKmYNyRPkKCYowsrGLRnJA.jpg',
        //   'https://image.tmdb.org/t/p/w500/gDaxYkYNbHuM2VlUazbcpnFZB6d.jpg',
        //   'https://image.tmdb.org/t/p/w500/pj0EPtI1mEwqjR34RQJdnbns0am.jpg',
        //   'https://image.tmdb.org/t/p/w500/ruHDFumJfW7F2vEqTZEQQ9xT7CA.jpg',
        //   'https://image.tmdb.org/t/p/w500/odVv1sqVs0KxBXiA8bhIBlPgalx.jpg',
        // ]}
        images={movieImages}
        sliderBoxHeight={600}
      />
    </View>
  );
};
