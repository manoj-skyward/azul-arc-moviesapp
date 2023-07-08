import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {API_KEY_STRING, BASE_URL} from '../api/api';
import {SplashMessage} from '../Utils';

const MoviesDahsboard = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // searchMovies('');
  }, []);

  const searchMovies = async () => {
    setLoading(true);
    console.log('\n\n Called Function Axios');
    try {
      console.log('\n\n Called Function Axios Try Block');
      let res = await axios.get(
        BASE_URL +
          API_KEY_STRING +
          `&s=${searchText}` +
          '&type=movie' +
          '&page=1',
      );
      console.log('\nMovies are\n\n', res.data.Search);
      setMovies(res.data.Search);
      setLoading(false);
      // SplashMessage('Movies Fetched Successfully');
    } catch (error) {
      console.log('\n\n Called Function Axios Error Block', error);
      setLoading(false);
      SplashMessage('Something Went Wrong', error);
    }
  };

  const _renderUserCard = item => {
    console.log('\n\n Inside Render\n\n', item);
    return (
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '98%',
        }}
        id={item.imdbID}
        onPress={() =>
          navigation.navigate('MovieDetails', {movieID: item.imdbID})
        }>
        <View
          id={item.id}
          style={{
            marginVertical: 5,
            width: '98%',
            height: 450,
            borderRadius: 10,
            // backgroundColor: '#2c2e2e',
            justifyContent: 'space-between',
            marginLeft: 20,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('MovieDetails', {item: item})}
            style={{
              width: '100%',
              height: '80%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={{uri: item.Poster}}
              style={{
                // alignSelf: 'flex-end',
                // width: ,
                width: '95%',
                height: '100%',
                resizeMode: 'stretch',
                borderRadius: 10,
              }}
            />
          </TouchableOpacity>
          <View style={{height: '20%', alignItems: 'center', marginTop: 10}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'justify',
                // color: '#1ce4eb',
              }}>
              {item.Title}
            </Text>
            <Text style={{fontSize: 15}}>{item.Year}</Text>
            <View
              style={{
                width: '95%',
                height: 2,
                backgroundColor: '#626666',
                marginVertical: 10,
              }}></View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View
        style={{
          wdith: '98%',
          flexDirection: 'row',
          marginVertical: 20,
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: '80%',
            height: 50,
            borderRadius: 20,
            // backgroundColor: 'yellow',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TextInput
            value={searchText}
            onChangeText={text => setSearchText(text)}
            placeholder="Search Movie"
            placeholderTextColor={'grey'}
            style={{
              color: 'black',
              borderColor: '#000',
              width: '90%',
              borderRadius: 5,
              height: 50,
              borderWidth: 1,
              marginVertical: 20,
            }}
          />
        </View>
        <TouchableOpacity
          onPress={searchMovies}
          style={{
            width: '10%',
            height: 50,
            borderRadius: 20,
            // backgroundColor: 'yellow',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../res/images/search_icon.png')}
            style={{
              width: 30,
              height: 30,
              resizeMode: 'contain',
              borderRadius: 5,
            }}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: '98%',
          // backgroundColor: '#242626',
          // marginLeft: 5,
          // alignItems: 'center',
        }}>
        {loading ? (
          <ActivityIndicator size="large" color="#000" />
        ) : (
          <FlatList
            // horizontal={true}
            data={movies}
            renderItem={({item}) => _renderUserCard(item)}
            keyExtractor={item => item.id}
            style={{width: '98%'}}
          />
        )}
      </View>
      {/* <ScrollView
        style={{
          flexGrow: 1,
          backgroundColor: '#b8e5f5',
        }}></ScrollView> */}
    </View>
  );
};

export default MoviesDahsboard;
