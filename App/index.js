import { useState } from "react"
import { View, ScrollView, SafeAreaView } from "react-native"
import { Stack, useRouter } from "expo-router"
import { COLORS, icons, images, SIZES } from "../constants"
import { Nearbyjobs, Popolarjobs, ScreenHeaderBtn, Welcome } from "../components"

const Home = () => {
  const router = useRouter()
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: true,
          headertLeft: () => <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />,
          headerRight: () => <ScreenHeaderBtn iconUrl={icons.profile} dimension="100%" />,
          headerTitle: "Home"
        }}
      />
    </SafeAreaView>
  )
}

export default Home
