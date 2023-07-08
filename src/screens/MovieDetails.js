import {View, Text, ScrollView, Image, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {API_KEY_STRING, BASE_URL} from '../api/api';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const MovieDetails = ({route}) => {
  const navigation = useNavigation();

  console.log('\n\n Props are\n\n', route?.params?.item?.imdbID);
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const id = route?.params?.item?.imdbID || 'tt0413300';
    const getMovieDetails = async () => {
      setLoading(true);
      try {
        let res = await axios.get(
          BASE_URL + API_KEY_STRING + `&i=${id}` + '&type=movie' + '&page=1',
        );
        console.log('\nMovie is\n\n', res.data);
        setMovie(res.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    getMovieDetails();
  }, []);

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
        }}>
        {loading ? (
          <ActivityIndicator size="large" color="#000" />
        ) : (
          <View
            style={{
              flex: 1,
              width: '95%',
              marginTop: 30,
              // height: '98%',
              // backgroundColor: 'blue',
              //   margin: 10,
              // alignItems: 'center',
              // justifyContent: 'center',
              // marginLeft:10
            }}>
            <View
              style={{
                width: '100%',
                height: '50%',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 5,
              }}>
              <Image
                source={{
                  uri: movie.Poster,
                }}
                style={{
                  // alignSelf: 'flex-end',
                  // width: ,
                  width: '85%',
                  height: '98%',
                  resizeMode: 'stretch',
                  borderRadius: 5,
                }}
              />
            </View>
            <View style={{height: '30%', marginTop: 10, marginLeft: 25}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginVertical: 5,
                }}>
                {movie.Title}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '90%',
                  marginVertical: 5,
                }}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                  Year of Release:
                </Text>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                  {movie.Year}
                </Text>
              </View>
              <Text
                style={{fontSize: 20, fontWeight: 'bold', marginVertical: 5}}>
                Plot:{' '}
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'normal',
                    textAlign: 'justify',
                    marginVertical: 5,
                  }}>
                  {movie?.Plot}
                </Text>
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '90%',
                  marginVertical: 5,
                }}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Rating</Text>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                  {movie.imdbRating}★
                </Text>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
    // </View>
  );
};

export default MovieDetails;
