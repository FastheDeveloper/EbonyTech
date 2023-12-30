import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native"
import React, { useContext } from "react"
import ChatData from "../data/CartData"
import { getStatusBarHeight } from "react-native-status-bar-height"
const statusBarHeight = getStatusBarHeight()
import {
  Ionicons,
  Entypo,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { AntDesign } from "@expo/vector-icons"
import { StoreContext } from "../store/RootStore"
const RecieveComp = ({ message, time, tick, dir }) => {
  return (
    <View
      style={[
        styles.recievedText,
        {
          borderTopLeftRadius: dir === "up" ? 0 : 100,
          borderBottomLeftRadius: dir === "down" ? 0 : 100,
        },
      ]}
    >
      <Text style={styles.Rmessage}>{message}</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {tick === "2" && (
          <MaterialCommunityIcons name="check-all" size={16} color="#BCBCBC" />
        )}
        {tick === "3" && (
          <MaterialCommunityIcons name="check-all" size={16} color="#E10BF4" />
        )}
        {tick === "1" && (
          <MaterialCommunityIcons name="check" size={16} color="#BCBCBC" />
        )}
      </View>
    </View>
  )
}

const SendComp = ({ message, time, tick, dir }) => {
  return (
    <View
      style={[
        styles.sentText,
        {
          borderTopRightRadius: dir === "up" ? 0 : 100,
          borderBottomRightRadius: dir === "down" ? 0 : 100,
        },
      ]}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {tick === "2" && (
          <MaterialCommunityIcons name="check-all" size={16} color="#BCBCBC" />
        )}
        {tick === "3" && (
          <MaterialCommunityIcons name="check-all" size={16} color="#E10BF4" />
        )}
        {tick === "1" && (
          <MaterialCommunityIcons name="check" size={16} color="#BCBCBC" />
        )}
      </View>
      <Text style={styles.Smessage}>{message}</Text>
    </View>
  )
}

const Convo = ({ route }) => {
  const { itemId } = route.params
  const navigation = useNavigation()
  const { authStore } = useContext(StoreContext)
  const { userName } = authStore
  const chatItem = ChatData.find((item) => item.id === itemId)
  return (
    <View style={styles.container}>
      {chatItem ? (
        <>
          <View style={styles.userDetails}>
            <View style={{ flexDirection: "row" }}>
              <Ionicons
                onPress={() => navigation.goBack()}
                name="chevron-back"
                size={30}
                color="black"
                style={{ marginRight: 11 }}
              />
              <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
                <View>
                  <Image
                    source={chatItem.image}
                    style={{ width: 34, height: 34, borderRadius: 100 }}
                  />
                  <View
                    style={[
                      styles.isActive,
                      {
                        backgroundColor: chatItem.isActive ? "#36F855" : "red",
                      },
                    ]}
                  />
                </View>
                <View style={{ marginLeft: 12 }}>
                  <Text style={styles.useNmae}>{chatItem.userName}</Text>
                  <View style={[styles.detailsView]}>
                    <Text
                      style={[
                        styles.detailsText,
                        { marginRight: 10, marginLeft: 0 },
                      ]}
                    >
                      {chatItem.isActive ? "Active Now" : "Offline"}
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Ionicons
                name="call-outline"
                size={24}
                color="black"
                style={{ marginRight: 18 }}
              />
              <Ionicons
                name="ios-videocam-outline"
                size={24}
                color="black"
                style={{ marginRight: 18 }}
              />
              <Entypo name="dots-three-vertical" size={24} color="black" />
            </View>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.chatLog}>
              <View style={styles.profile}>
                <Text style={styles.lowText}>You accepted the request</Text>
                <Image
                  source={chatItem.image}
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 100,
                    marginTop: 25,
                  }}
                />
                <Text style={styles.highText}>{chatItem.name}</Text>
                <Text style={styles.lowText}>{chatItem.userName}</Text>
                <Text style={styles.viewButton}>View Profile</Text>

                <Text style={[styles.lowText, { marginTop: 24 }]}>Today</Text>
              </View>
              <View style={styles.chats}>
                <RecieveComp
                  message={` Hello Good Morning ${userName}`}
                  time="12:00"
                  tick="3"
                  dir={"down"}
                />
                <RecieveComp
                  message="Keep doing it 🙌"
                  time="12:00"
                  tick="3"
                  dir={"up"}
                />
                <Text style={styles.timeText}>07:23am</Text>

                <SendComp message="Hello" time="12:00" tick="3" dir={"down"} />
                <SendComp
                  message={`Thanks ${chatItem.name.split(" ")[0]}`}
                  time="12:00"
                  tick="3"
                  dir={"up"}
                />
                <Text style={[styles.timeText, { alignSelf: "flex-end" }]}>
                  11:41am
                </Text>

                <RecieveComp
                  message=" I know two pants are available"
                  time="12:00"
                  tick="3"
                  dir={"down"}
                />
                <Text style={styles.timeText}>01:20am</Text>

                {chatItem.isSent &&
                  chatItem.isDelivered &&
                  !chatItem.isRead && (
                    <>
                      <SendComp
                        message={chatItem.lastMessage}
                        time="12:00"
                        tick="3"
                        dir={"down"}
                      />
                      <Text
                        style={[styles.timeText, { alignSelf: "flex-end" }]}
                      >
                        {chatItem.time}
                      </Text>
                    </>
                  )}
                {chatItem.isRead && (
                  <>
                    <SendComp
                      message={chatItem.lastMessage}
                      time="12:00"
                      tick="3"
                      dir={"down"}
                    />
                    <Text style={[styles.timeText, { alignSelf: "flex-end" }]}>
                      {chatItem.time}
                    </Text>
                  </>
                )}
                {!chatItem.isRead &&
                  !chatItem.isDelivered &&
                  chatItem.isSent && (
                    <>
                      <SendComp
                        message={chatItem.lastMessage}
                        time="12:00"
                        tick="3"
                        dir={"down"}
                      />
                      <Text
                        style={[styles.timeText, { alignSelf: "flex-end" }]}
                      >
                        {chatItem.time}
                      </Text>
                    </>
                  )}
                {chatItem.messageCount > 0 && (
                  <>
                    <RecieveComp
                      message={chatItem.lastMessage}
                      time="12:00"
                      tick="3"
                      dir={"up"}
                    />
                    <Text
                      style={[styles.timeText, { alignSelf: "flex-start" }]}
                    >
                      {chatItem.time}
                    </Text>
                  </>
                )}
              </View>
            </View>
          </ScrollView>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 15,
            }}
          >
            <View style={styles.searchBar}>
              <AntDesign name="paperclip" size={24} color="black" />
              <TextInput
                placeholder={`Meassage ${chatItem.name.split(" ")[0]}`}
                style={styles.searchBarText}
              />
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Octicons
                  name="smiley"
                  size={24}
                  color="black"
                  style={{ marginRight: 9 }}
                />
                <MaterialCommunityIcons
                  name="microphone-outline"
                  size={24}
                  color="black"
                  style={{ marginRight: 9 }}
                />
              </View>
            </View>
            <View style={{}}>
              <Ionicons
                name="md-paper-plane"
                size={24}
                color="#E10BF4"
                style={{}}
              />
            </View>
          </View>
        </>
      ) : (
        <Text>Item not found.</Text>
      )}
    </View>
  )
}

export default Convo

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusBarHeight + 20,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  isActive: {
    width: 12,
    height: 12,
    backgroundColor: "#36F855",
    borderRadius: 100,
    borderWidth: 2,
    alignSelf: "flex-end",
    bottom: 13,
    left: 3,
    borderColor: "#fff",
  },
  userDetails: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
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
  useNmae: {
    fontFamily: "EuclidSemiBold",
    fontSize: 14,
    color: "#272727",
  },
  chatLog: {
    height: "100%",
    marginTop: 20,

    marginBottom: 50,
  },
  profile: {
    alignSelf: "center",
    alignItems: "center",
  },
  lowText: {
    fontFamily: "EuclidRegular",
    fontSize: 12,
    color: "#9C9C9C",
  },
  highText: {
    fontFamily: "EuclidSemiBold",
    fontSize: 14,
    color: "#272727",
    marginTop: 12,
  },
  viewButton: {
    fontFamily: "EuclidSemiBold",
    fontSize: 12,
    color: "#E10BF4",
    marginTop: 18,
    backgroundColor: "#FCE7FE",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 100,
  },
  chats: {
    flex: 1,
  },
  recievedText: {
    flexDirection: "row",
    backgroundColor: "#272727",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 100,
    alignSelf: "flex-start",
    marginTop: 12,
  },
  sentText: {
    flexDirection: "row",
    backgroundColor: "#EBEBEB",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 100,
    alignSelf: "flex-end",
    marginTop: 12,
  },
  Rmessage: {
    fontFamily: "EuclidRegular",
    fontSize: 14,
    color: "#fff",
    marginRight: 8,
  },
  Smessage: {
    fontFamily: "EuclidRegular",
    fontSize: 14,
    color: "black",
    marginLeft: 8,
  },
  timeText: {
    fontFamily: "EuclidRegular",
    fontSize: 12,
    color: "#525252",
    alignSelf: "flex-start",
    marginTop: 4,
    marginBottom: 20,
  },
  searchBarView: {},
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#E0E0E0",
    borderWidth: 1,
    padding: 10,
    borderRadius: 100,
    // marginTop: 20,
    backgroundColor: "#EBEBEB",
    borderRadius: 100,
    width: "90%",
  },
  searchBarText: {
    flex: 1,
    padding: 2,
    marginRight: 10,
    color: "#BCBCBC",
    fontFamily: "EuclidRegular",
    fontSize: 12,
    marginLeft: 8,
  },
})
