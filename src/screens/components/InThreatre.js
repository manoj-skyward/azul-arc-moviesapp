import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import api, {API_KEY, IMAGE_BASE_URL} from '../../api/api';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';

const InThreatre = () => {
  const navigation = useNavigation();

  const [moviesList, setMoviesList] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await api.get('movie/now_playing', {
          params: {api_key: API_KEY},
        });

        console.log('\n\n Successful\n\n');
        console.log('\n\n API Data\n\n', response.data.results);

        setMoviesList(response.data.results);
      } catch (err) {
        console.log('\n\nError in Retriving Popular Movies\n\n:', err);
      }
    };

    getMovies();
  }, []);

  const _renderItem = item => {
    console.log('\n\n Inside Render\n\n', item);

    const IMG_PATH = `https://image.tmdb.org/t/p/w780${item.poster_path}`;
    console.log('\n\n Image Path is\n\n', IMG_PATH);
    const realeaseDate = new Date(item.release_date);
    const formattedDate = moment(realeaseDate).format('Do MMMM  YYYY');
    return (
      <View
        id={item.id}
        style={{
          //   backgroundColor: 'pink',
          width: 250,
          height: '98%',
          marginHorizontal: 10,
          // alignItems: 'center',
          // justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('MovieDetails', {movieID: item.id})
          }
          style={{
            width: '100%',
            height: '80%',
            // justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'yellow',
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
        </TouchableOpacity>
        <View style={{height: '20%'}}>
          <Text
            style={{fontSize: 12, fontWeight: 'bold', textAlign: 'justify'}}>
            {item.title}
          </Text>
          <Text style={{fontSize: 12}}>{formattedDate}</Text>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        height: 275,
        // backgroundColor: 'yellow',
        marginTop: 30,
        // alignItems: 'center',
      }}>
      <View
        style={{
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '95%',
          //   backgroundColor: 'pink',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Now Playing</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ViewAll', {category: 'now_playing'})
          }
          style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: 17,
              textAlign: 'center',
              textDecorationLine: 'underline',
            }}>
            View All
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <SwiperFlatList
          // style={{width: '80%'}}
          autoplay
          autoplayDelay={2}
          autoplayLoop
          index={0}
          showPagination
          data={moviesList}
          paginationStyle={{width: '80%', marginTop: 30}}
          renderItem={({item}) => _renderItem(item)}
        />
        {/* <FlatList
          horizontal={true}
          data={moviesList}
          renderItem={({item}) => _renderItem(item)}
          keyExtractor={item => item.id}
        /> */}
      </View>
    </View>
  );
};

export default InThreatre;
