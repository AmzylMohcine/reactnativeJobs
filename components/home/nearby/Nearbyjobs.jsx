import React from "react"
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native"
import styles from "./nearbyjobs.style"
import { useNavigation } from "@react-navigation/native" // Import the correct navigation hook
import { COLORS } from "../../../constants"
import NearbyjobCard from "../../common/cards/nearby/NearbyJobCard"

import useFetch from "../../../hook/useFetch"

const Nearbyjobs = () => {
  const navigation = useNavigation() // Use the correct navigation hook
  const { isLoading, error, data } = useFetch("search", {
    query: "React Developer",
    num_pages: 1
  })

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}> Nearby Job</Text>
        <TouchableOpacity onPress={() => navigation.navigate("AllNearbyJobs")}>
          {/* Replace "AllNearbyJobs" with the correct screen name */}
          <Text style={styles.headerBtn}> Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>{isLoading ? <ActivityIndicator size="large" color={COLORS.primary} /> : error ? <Text> Something went wrong</Text> : data?.map(job => <NearbyjobCard key={job.job_id} />)}</View>
    </View>
  )
}

export default Nearbyjobs
