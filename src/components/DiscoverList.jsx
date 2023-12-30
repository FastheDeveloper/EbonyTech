import { View, Text, FlatList, ImageBackground, StyleSheet } from "react-native"
import React, { useContext, useState } from "react"
import { StoreContext } from "../store/RootStore"
import { observer } from "mobx-react-lite"

const DiscoverList = () => {
  const { authStore } = useContext(StoreContext)
  const { catList } = authStore

  console.log("catttt", catList, "catttt")
  return (
    <FlatList
      data={catList}
      horizontal
      showsHorizontalScrollIndicator={false}
      //   keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return (
          <ImageBackground
            source={{
              uri: item.image,
            }}
            style={styles.imageBG}
          >
            <View style={styles.detailTags}>
              <View style={styles.nameAge}>
                <Text style={styles.name}>{item.category.toUpperCase()}</Text>
              </View>
            </View>
          </ImageBackground>
        )
      }}
    />
  )
}

export default observer(DiscoverList)

const styles = StyleSheet.create({
  imageBG: {
    width: 150,
    height: 200,
    marginRight: 10,
    // justifyContent:'flex-end',
    padding: 10,
    borderRadius: 8,
    overflow: "hidden",
  },
  createdTag: {
    backgroundColor: "#E10BF4",
    alignSelf: "flex-end",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#fff",
  },
  createdText: {
    color: "#fff",
    fontFamily: "EuclidRegular",
    fontSize: 14,
  },
  nameAge: {
    flexDirection: "row",
    backgroundColor: "gainsboro",
    padding: 5,
    borderRadius: 15,
  },
  detailTags: {
    justifyContent: "flex-end",
    flex: 1,
    paddingBottom: 10,
    alignItems: "center",
  },
  name: {
    color: "black",
    fontFamily: "EuclidSemiBold",
    fontSize: 14,
    marginRight: 5,
    textAlign: "center",
  },
  addressText: {
    color: "#fff",
    fontFamily: "EuclidRegular",
    fontSize: 14,
  },
})
