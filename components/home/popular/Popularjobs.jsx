import React from "react"
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from "react-native"
import styles from "./popularjobs.style"
import { useRouter } from "expo-router"
import { SIZES, COLORS } from "../../../constants"
import PopularjobCard from "../../common/cards/popular/PopularJobCard"

const Popularjobs = () => {
  const router = useRouter()
  const isLoading = false
  const error = false
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}> Popular Job</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}> Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : error ? (
          <Text> Something went wrong</Text>
        ) : (
          <FlatList
            data={[1, 2, 3, 4]}
            renderItem={item => (
              <PopularjobCard>
                <Text> {item} </Text>
              </PopularjobCard>
            )}
            horizontal
            keyExtractor={item => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs
