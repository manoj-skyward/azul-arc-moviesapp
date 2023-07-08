// In App.js in a new project
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './screens/Splash';
import HeaderImage from './res/HeaderImage';
import MoviesDahsboard from './screens/MoviesDahsboard';
import MovieDetails from './screens/MovieDetails';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MoviesDashboard"
          component={MoviesDahsboard}
          options={{
            title: 'Search Movies', //Set Header Title
            headerStyle: {
              backgroundColor: '#000', //Set Header color
            },
            headerTintColor: '#07f2f2', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name="MovieDetails"
          component={MovieDetails}
          options={{
            title: 'Movie Details', //Set Header Title
            headerStyle: {
              backgroundColor: '#000', //Set Header color
            },
            headerTintColor: '#07f2f2', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
            headerLeft: () => <HeaderImage />,

            // headerRight: () => <UserImage dashboard={true} />,
            // headerRight: () => <UserImage dashboard={true} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
