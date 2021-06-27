import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import ProductsView from './ProductsView'
import Products from './Products';
import ProductsAdd from './ProductsAdd';
const Stack = createStackNavigator();
const StoreDetails = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Products" component={Products} />
            <Stack.Screen name="Products-view" component={ProductsView} />
            <Stack.Screen name="ProductsAdd" component={ProductsAdd} />
        </Stack.Navigator>
    )
}

export default StoreDetails

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });