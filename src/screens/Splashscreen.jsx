import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Splashscreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/img/wec.png')}/>
    </View>
  )
}

export default Splashscreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',

    },
})