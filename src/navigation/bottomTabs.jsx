/* eslint-disable react/no-unstable-nested-components */
import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "../screens/HomeScreen"
import ChatList from "../screens/ChatList"

import Profile from "../screens/Profile"
import Bookmark from "../screens/Bookmark"
import { Image, View } from "react-native"

import { useTabMenu } from "../context/TabContext"

const Tab = createBottomTabNavigator()

const getIconColor = (focused) => {
  return focused ? { tintColor: "#E10BF4" } : { tintColor: "grey" }
}

const BottomTabs = () => {
  const { opened, toggleOpened } = useTabMenu()
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#E10BF4",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          height: 100,
        },
        tabBarLabelStyle: { fontSize: 12, fontFamily: "EuclidRegular" },
        tabBarItemStyle: { marginVertical: 30 },

        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <Image source={require("../../assets/img/hmeCon.png")} />
              ) : (
                <Image
                  source={require("../../assets/img/hmeCon.png")}
                  style={getIconColor(focused)}
                />
              )}
            </View>
          ),

          // tabBarLabel: '',
        }}
        listeners={{
          tabPress: (e) => opened && e.preventDefault(),
        }}
      />
      <Tab.Screen
        name="Chats"
        component={ChatList}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <Image source={require("../../assets/img/chatcon.png")} />
              ) : (
                <Image
                  source={require("../../assets/img/chatcon.png")}
                  style={getIconColor(focused)}
                />
              )}
            </View>
          ),
          // tabBarLabel: '',
        }}
        listeners={{
          tabPress: (e) => opened && e.preventDefault(),
        }}
      />

      <Tab.Screen
        name="Bookmark"
        component={Bookmark}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <Image source={require("../../assets/img/bookcon.png")} />
              ) : (
                <Image
                  source={require("../../assets/img/bookcon.png")}
                  style={getIconColor(focused)}
                />
              )}
            </View>
          ),
          // tabBarLabel: '',
        }}
        listeners={{
          tabPress: (e) => opened && e.preventDefault(),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <Image source={require("../../assets/img/profilecon.png")} />
              ) : (
                <Image
                  source={require("../../assets/img/profilecon.png")}
                  style={getIconColor(focused)}
                />
              )}
            </View>
          ),
          // tabBarLabel: '',
        }}
        listeners={{
          tabPress: (e) => opened && e.preventDefault(),
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabs
