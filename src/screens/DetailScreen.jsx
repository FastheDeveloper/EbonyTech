import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native"
import React from "react"
import { Ionicons } from "@expo/vector-icons"
import { useNavigation, useRoute } from "@react-navigation/native"
import { getStatusBarHeight } from "react-native-status-bar-height"

const statusBarHeight = getStatusBarHeight()
const { width, height } = Dimensions.get("window")
const DetailScreen = () => {
  const route = useRoute()
  const { item } = route.params
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",

          alignItems: "center",
        }}
      >
        <Ionicons
          name="ios-arrow-back"
          size={24}
          color="black"
          onPress={() => navigation.goBack()}
        />
        <Text
          style={[
            styles.postText,
            {
              fontSize: 30,
              flex: 1,
              textAlign: "center",
            },
          ]}
        >
          Details Screen
        </Text>
      </View>
      <View style={{ marginVertical: 16 }}>
        <ScrollView
          style={{ marginBottom: 23 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ height }}>
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
                style={{
                  width: "100%",
                  height: "80%",
                  borderRadius: 8,
                }}
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
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: height,
    paddingTop: statusBarHeight,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  userDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  activity: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginTop: 16,
    position: "absolute",
    bottom: 30,
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
})
