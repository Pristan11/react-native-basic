import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Help = () => {
    return (
        <View style={styles.container}>
            <Text>welocome to help page</Text>
        </View>
    )
}

export default Help

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });