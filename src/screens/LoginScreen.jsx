import { View, StyleSheet } from "react-native"
import React from "react"
import { getStatusBarHeight } from "react-native-status-bar-height"

import HeaderLogin from "../components/HeaderLogin"
const statusBarHeight = getStatusBarHeight()

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderLogin />
    </View>
  )
}

export default LoginScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusBarHeight,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
})
