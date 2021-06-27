import React, {useContext} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import {DataContext} from './DataProvider'
const ProductsView = ({navigation,route}) => {
    const products = route.params.product;
    const {addtoCard} = useContext(DataContext);
    return (
        <View style={styles.container}>
            <Text>{products.name}</Text>
            <Text>{products.email}</Text>
            <Button title='add Product'
             onPress={() =>addtoCard(products)}/>
        </View>
    )
}

export default ProductsView

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });