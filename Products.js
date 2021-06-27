import React, {useContext} from 'react'
import { StyleSheet, Text, View , Button, ScrollView, TouchableOpacity} from 'react-native'
import {DataContext} from  './DataProvider'
const Products = ({navigation}) => {
    const {name, users} = useContext(DataContext)
    return (
        <ScrollView>
        <View style={styles.container}>
            <Text>Products</Text>
            <Text> here the name {name}</Text>
            {users && users.length> 0 && <View>
                {users.map((user) => {
                 return <TouchableOpacity  onPress={()=> navigation.navigate('Products-view',{product: user})}>
                     <View style={styles.view} >
                    <Text>{user.email}</Text>
                    <Text>{user.name}</Text>
                    <Text>{user.username}</Text>
                    {/* <Button title="view" onPress={()=> navigation.navigate('Products-view')}/> */}

                       
                    </View>
                    </TouchableOpacity>  
                })}
                </View>}
            <Button title="view" onPress={()=> navigation.navigate('ProductsAdd')}/>
        </View>
        </ScrollView>
    )
}

export default Products

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    view: {
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: 'red',
        borderRadius:10,
        marginVertical: 10
    }
  });