import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import InThreatre from './components/InThreatre';

// import {ScrollView} from 'react-native-gesture-handler';

const MoviesDahsboard = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView
        style={{
          flexGrow: 1,
          backgroundColor: '#b8e5f5',
        }}></ScrollView>
    </View>
  );
};

export default MoviesDahsboard;
