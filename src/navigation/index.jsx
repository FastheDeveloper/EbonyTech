import React, { useContext, useEffect } from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Convo from "../screens/Convo"

import BottomTabs from "./bottomTabs"
import { TabContextProvider } from "../context/TabContext"
import LoginScreen from "../screens/LoginScreen"
import DetailScreen from "../screens/DetailScreen"
import { StoreContext } from "../store/RootStore"
import { observer } from "mobx-react-lite"
const Stack = createNativeStackNavigator()

const Nvigation = () => {
  const { authStore } = useContext(StoreContext)

  return (
    <TabContextProvider>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />

        <Stack.Screen name="Root" component={BottomTabs} />
        <Stack.Screen name="Deetails" component={DetailScreen} />

        <Stack.Screen name="Convo" component={Convo} />
      </Stack.Navigator>
    </TabContextProvider>
  )
}
export default observer(Nvigation)
