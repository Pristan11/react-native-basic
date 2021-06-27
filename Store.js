import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import StoreHome from './StoreHome';
import StoreDetails from './StoreDetails';
import StoreHelp from './StoreHelp';

const BottomTap = createBottomTabNavigator();
const Store = () => {
    return (
        <BottomTap.Navigator>
            <BottomTap.Screen name="store-home" component={StoreHome} />
            <BottomTap.Screen name="store-details" component={StoreDetails} />
            <BottomTap.Screen name="store-help" component={StoreHelp} />
        </BottomTap.Navigator>
    )
}

export default Store

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });