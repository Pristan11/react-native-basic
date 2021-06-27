import React,{ useContext} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DataContext } from './DataProvider'
const ProductsAdd = () => {
    const {cardItems} = useContext(DataContext);
    console.log('here the cart itme',cardItems);
    return (
        <View style={styles.container}>
            <Text>Products add</Text>
           {cardItems && cardItems.length> 0 && <View>
               {cardItems.map((item)=> {
                   return <View><Text>{item.name}</Text></View>
               })}
               </View>}
        </View>
    )
}

export default ProductsAdd

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });