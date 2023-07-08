import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('MoviesDashboard');
    }, 2000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
      }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: '#05c1f5',
          marginBottom: 30,
        }}>
        All Movies In One Place
      </Text>
      <Text
        style={{
          fontSize: 60,
          fontWeight: 'bold',
          color: '#2da7cc',
          marginBottom: 30,
        }}>
        OMDB{' '}
      </Text>
      <Image
        source={require('../res/images/poster.jpg')}
        style={{
          width: 250,
          height: 350,
          resizeMode: 'contain',
          borderRadius: 5,
        }}
      />
    </View>
  );
};

export default Splash;
