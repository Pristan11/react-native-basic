
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, Button, View } from 'react-native';
import Home from './Home';
import Help from './Help';
import Store from './Store';
import DataProvider from './DataProvider';
import * as React from 'react';
import {RefObject} from 'react';
import {NavigationContainerRef} from '@react-navigation/native';
import MyCamera from './Camera';

export const navigationRef = React.createRef();

export const navigate = (name, params) => {
    navigationRef.current?.navigate(name, params);
};

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer
    onStateChange={() => {
      navigationRef.current?.getCurrentRoute()?.name;
  }}
  ref={navigationRef}>
      <DataProvider>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home"  options={{ drawerLabel: 'My Home' }} component={Home} />
        <Drawer.Screen name="Store"  options={{ drawerLabel: 'Our store' }} component={Store} />
        <Drawer.Screen name="Help You" options={{ drawerLabel: 'Help' }} component={Help} />
      </Drawer.Navigator>
      </DataProvider>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


