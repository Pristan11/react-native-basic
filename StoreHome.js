import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const StoreHome = () => {
    return (
        <View style={styles.container}>
            <Text>welocome to store home</Text>
        </View>
    )
}

export default StoreHome

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });