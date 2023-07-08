import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import api, {API_KEY, IMAGE_BASE_URL} from '../api/api';
import moment from 'moment/moment';
import {useNavigation} from '@react-navigation/native';

const MovieDetails = ({route}) => {
  const navigation = useNavigation();

  console.log('\n\n Props are\n\n', route);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await api.get(`movie/${route?.params?.movieID}`, {
          params: {api_key: API_KEY},
        });

        console.log('\n\n Successful\n\n');
        console.log('\n\n API Data\n\n', response.data);

        setMovie(response.data);
      } catch (err) {
        console.log('\n\nError in Retriving Popular Movies\n\n:', err);
      }
    };

    getMovie();
  }, []);

  const IMG_PATH = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  console.log('\n\n Image Path is\n\n', IMG_PATH);

  const realeaseDate = new Date(movie.release_date);
  const formattedDate = moment(realeaseDate).format('Do MMMM  YYYY');
  console.log('\n\n Image Path is\n\n', formattedDate);

  return (
    <View
      style={{
        flex: 1,
      }}>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        style={{
          flex: 1,
          backgroundColor: '#b8e5f5',
          //   justifyContent: 'center',
        }}>
        <View
          style={{
            flex: 1,
            // backgroundColor: 'pink',
            width: '95%',
            // height: '98%',
            // backgroundColor: 'blue',
            //   margin: 10,
            // alignItems: 'center',
            // justifyContent: 'center',
          }}>
          <View
            style={{
              width: '100%',
              height: '75%',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 5,
            }}>
            <Image
              source={{uri: IMG_PATH}}
              style={{
                // alignSelf: 'flex-end',
                // width: ,
                width: '100%',
                height: '100%',
                resizeMode: 'stretch',
                borderRadius: 20,
              }}
            />
          </View>
          <View style={{height: '20%', marginTop: 10, marginLeft: 5}}>
            <Text
              style={{fontSize: 20, fontWeight: 'bold', textAlign: 'justify'}}>
              {movie.title}
            </Text>
            <Text style={{fontSize: 20}}>Release Date: {formattedDate}</Text>
            <Text style={{fontSize: 20}}>
              Runtime: {movie?.runtime} Minutes
            </Text>
            {/* <Text style={{fontSize: 20}}>Overview: {movie?.overview}</Text> */}
            <Text style={{fontSize: 20}}>
              Genres:{' '}
              {movie?.genres?.map(t => {
                return <Text id={t.id}>{t.name},</Text>;
              })}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
    // </View>
  );
};

export default MovieDetails;
