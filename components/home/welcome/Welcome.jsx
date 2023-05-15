import React from "react"
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from "react-native"
import { router, useRouter } from "expo-router"
import { useState } from "react"

import styles from "./welcome.style"
import { icons, SIZES } from "../../../constants"

// declare jobs

const jobTypes = ["Full-time", "Part-time", "Contractor"]
const Welcome = () => {
  const router = useRouter()
  const [ActiveJobsTypes, setActiveJobsTypes] = useState("Full-time")
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Mohcine</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput} placeholder="What are you looking for?" onChange={() => {}}></TextInput>
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image source={icons.search} resizeMode="contain" style={styles.searchBtnImage} />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(ActiveJobsTypes, item)}
              onPress={() => {
                setActiveJobsTypes(item)
                router.push(`/search/${item}`)
              }}
            >
              <Text style={styles.tabText(ActiveJobsTypes, item)}> {item}</Text>
            </TouchableOpacity>
          )}
          horizontal
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
        />
      </View>
    </View>
  )
}

export default Welcome
