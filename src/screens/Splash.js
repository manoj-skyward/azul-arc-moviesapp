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
      <Text style={{fontSize: 20, fontWeight: 'bold', color: '#05c1f5'}}>
        All Movies In One Place
      </Text>
      <Image
        source={require('../res/images/splash_logo.jpg')}
        style={{
          width: 250,
          height: 350,
          resizeMode: 'contain',
          borderRadius: 20,
        }}
      />
    </View>
  );
};

export default Splash;
