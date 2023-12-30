import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native"
import React, { useState, useContext, useEffect } from "react"

import { Entypo, Ionicons, FontAwesome } from "@expo/vector-icons"
import { observer } from "mobx-react-lite"
import { StoreContext } from "../store/RootStore"
import { useNavigation } from "@react-navigation/native"

const HeaderLogin = () => {
  const navigation = useNavigation()
  const { authStore } = useContext(StoreContext)
  const { loading, success, productSuccess } = authStore
  const [hide, setHide] = useState(false)
  const [userDetails, setUserDetails] = useState({
    username: "mor_2314",
    password: "83r5^_",
  })
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

  const SignIn = () => {
    // authStore.setUserName(userName)
    authStore.Login(userDetails)
  }
  const getProducts = async () => {
    await authStore.getProducts()
  }
  useEffect(() => {
    if (success === "Success") {
      getProducts()
    }
  }, [success])

  useEffect(() => {
    if (productSuccess === "product get") {
      navigation.navigate("Root")
    }
  }, [productSuccess])

  const disabled = !userName || !password
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerText}>LOGIN</Text>
        </View>
      </View>
      <View style={styles.searchBarView}>
        <View style={styles.searchBar}>
          <Ionicons name="person" size={24} color="#EB5CF8" />
          <TextInput
            placeholder="Username"
            style={[styles.searchBarText, { borderRightWidth: 0 }]}
            placeholderTextColor="#0008"
            placeholderStyle={{ fontSize: 30 }}
            onChangeText={(text) => setUserName(text)}
          />
        </View>
      </View>

      <View style={[styles.searchBarView, { marginTop: 30 }]}>
        <View style={styles.searchBar}>
          <Entypo
            name={hide ? "lock-open" : "lock"}
            size={24}
            color="#EB5CF8"
          />
          <TextInput
            placeholder="Password"
            style={styles.searchBarText}
            placeholderTextColor="#0008"
            placeholderStyle={{ fontSize: 30 }}
            secureTextEntry={hide ? false : true}
            onChangeText={(text) => setPassword(text)}
          />
          <FontAwesome
            name={hide ? "eye" : "eye-slash"}
            size={24}
            color="#BCBCBC"
            onPress={() => setHide(!hide)}
          />
        </View>
      </View>

      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: disabled ? "white" : "#E10BF4" },
        ]}
        onPress={SignIn}
        disabled={disabled}
      >
        <Text
          style={[styles.ButtonText, { color: disabled ? "#e10bf4" : "white" }]}
        >
          {loading ? <ActivityIndicator size="large" color="white" /> : "Login"}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default observer(HeaderLogin)

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  headerText: {
    fontFamily: "EuclidSemiBold",
    fontSize: 24,
    color: "#272727",
    marginBottom: 100,
  },
  searchBarView: {
    marginTop: 20,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#E0E0E0",
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
  },
  searchBarText: {
    flex: 1,
    padding: 2,
    borderRightWidth: 1,
    borderRightColor: "#BCBCBC",
    marginRight: 10,
    color: "#BCBCBC",
    fontFamily: "EuclidRegular",
    fontSize: 12,
    marginLeft: 8,
  },

  button: {
    backgroundColor: "#E10BF4",
    // alignSelf:'flex-end',
    paddingVertical: 15,
    paddingHorizontal: 10,
    // marginHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    alignItems: "center",
    marginTop: 50,
    borderColor: "#E10BF4",
  },
  ButtonText: {
    color: "white",
    fontFamily: "EuclidSemiBold",
    fontSize: 20,
  },
})
