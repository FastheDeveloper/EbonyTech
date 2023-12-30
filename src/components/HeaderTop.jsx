import { View, Text, TextInput, StyleSheet } from "react-native"
import React, { useContext, useEffect, useState } from "react"

import { Feather } from "@expo/vector-icons"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import DiscoverList from "../components/DiscoverList"
import { StoreContext } from "../store/RootStore"
import { observer } from "mobx-react-lite"

const HeaderTop = () => {
  const { authStore } = useContext(StoreContext)
  const { userName, catList } = authStore
  return (
    <View>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerText}>Hello {userName}</Text>
          <Text style={styles.headerSubTitle}>What would you like to buy?</Text>
        </View>
        <View style={styles.notiBell}>
          <Feather name="bell" size={24} color="#EB5CF8" />
        </View>
      </View>
      <View style={styles.searchBarView}>
        <View style={styles.searchBar}>
          <Feather name="search" size={24} color="#EB5CF8" />
          <TextInput placeholder="Search" style={styles.searchBarText} />
          <MaterialCommunityIcons
            name="tune-variant"
            size={24}
            color="#BCBCBC"
          />
        </View>
      </View>
      <View style={styles.discoverHeader}>
        <Text style={styles.discoverHeaderText}>Categories</Text>
        <Text style={styles.discoverHeaderSubText}>See All</Text>
      </View>
      <View style={{ marginVertical: 16 }}>
        <DiscoverList />
      </View>
      <View style={styles.discoverHeader}>
        <Text style={styles.discoverHeaderText}>Trending Products</Text>
        <Text style={styles.discoverHeaderSubText}>See All</Text>
      </View>
    </View>
  )
}

export default observer(HeaderTop)

const styles = StyleSheet.create({
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
