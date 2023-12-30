import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native"
import React, { useState, useRef, useContext } from "react"
import { getStatusBarHeight } from "react-native-status-bar-height"
import { FlatList } from "react-native-gesture-handler"
import { Octicons, Ionicons } from "@expo/vector-icons"
import { EvilIcons } from "@expo/vector-icons"
import HeaderTop from "../components/HeaderTop"
import { StoreContext } from "../store/RootStore"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
const statusBarHeight = getStatusBarHeight()

const HomeScreen = () => {
  const { authStore } = useContext(StoreContext)
  const { products } = authStore

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={HeaderTop}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ marginVertical: 16 }}
            onPress={() => navigation.navigate("Deetails", { item: item })}
          >
            <View style={styles.userDetails}>
              <View style={{ flexDirection: "row" }}>
                <View>
                  <Image
                    source={{ uri: item.image }}
                    style={{ width: 34, height: 34, borderRadius: 100 }}
                  />
                  {/* <View  style={[styles.isActive,{backgroundColor:item.isActive ? '#36F855' : 'red'}]}/> */}
                </View>
                <View style={{ marginLeft: 12 }}>
                  <Text style={styles.useNmae}>{item.title}</Text>
                  <View style={[styles.detailsView]}>
                    <Text style={[styles.detailsText, { marginLeft: 0 }]}>
                      {item.category.toUpperCase()}
                    </Text>
                    <View
                      style={{
                        width: 5,
                        height: 5,
                        backgroundColor: "black",
                        borderRadius: 100,
                      }}
                    />
                    <Text style={styles.detailsText}>
                      {item.rating.count} pcs left
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={[styles.content, { marginVertical: 10 }]}>
              <Text style={styles.postContent}>{item.description}</Text>

              <Image
                source={{ uri: item.image }}
                style={{ width: "100%", height: 200, borderRadius: 8 }}
              />
            </View>

            <View style={styles.activity}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={[styles.postText, { fontSize: 20 }]}>
                  $ {item.price.toFixed(2)}{" "}
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.postText}>{item.rating.rate} ratings</Text>
              </View>
            </View>

            <View style={styles.activityButtons}>
              <Octicons name="download" size={24} color="#525252" />
              <EvilIcons name="share-google" size={24} color="#525252" />
              <Octicons name="bookmark" size={24} color="#525252" />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default observer(HomeScreen)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusBarHeight,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  headerText: {
    fontFamily: "EuclidSemiBold",
    fontSize: 16,
    color: "#272727",
  },
  headerSubTitle: {
    fontFamily: "EuclidRegular",
    fontSize: 12,
    color: "#272727",
  },
  notiBell: {
    borderColor: "#E0E0E0",
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
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
  discoverHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  discoverHeaderText: {
    fontFamily: "EuclidSemiBold",
    fontSize: 14,
    color: "#272727",
  },
  discoverHeaderSubText: {
    fontFamily: "EuclidRegular",
    fontSize: 12,
    color: "#EB5CF8",
  },
  detailsView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 0,
  },
  detailsText: {
    fontFamily: "EuclidRegular",
    fontSize: 12,
    color: "#6E6E6E",
    marginHorizontal: 8,
  },
  userDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  createdTag: {
    backgroundColor: "#E10BF4",
    // alignSelf:'flex-end',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#fff",
  },
  isActive: {
    width: 12,
    height: 12,
    backgroundColor: "#36F855",
    borderRadius: 100,
    borderWidth: 2,
    flex: 1,
    alignSelf: "flex-end",
    bottom: 13,
    left: 3,
    borderColor: "#fff",
  },
  useNmae: {
    fontFamily: "EuclidSemiBold",
    fontSize: 14,
    color: "#272727",
    paddingRight: 50,
  },
  createdText: {
    color: "#fff",
    fontFamily: "EuclidRegular",
    fontSize: 14,
  },
  activity: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },
  postText: {
    fontFamily: "EuclidSemiBold",
    fontSize: 10,
    color: "#232323",
    marginHorizontal: 4,
  },
  postContent: {
    fontFamily: "EuclidRegular",
    fontSize: 12,
    color: "#272727",
    marginHorizontal: 4,
    marginBottom: 16,
  },
  activityButtons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 16,
  },
})
