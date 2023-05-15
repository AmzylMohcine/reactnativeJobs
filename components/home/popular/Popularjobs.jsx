import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from "react-native"
import { useState } from "react"
import styles from "./popularjobs.style"
import { useRouter } from "expo-router"
import { SIZES, COLORS } from "../../../constants"
import PopularjobCard from "../../common/cards/popular/PopularJobCard"

import useFetch from "../../../hook/useFetch"

const Popularjobs = () => {
  const router = useRouter()

  const { isLoading, error, data } = useFetch("search", {
    query: "React Developer",
    num_pages: 1
  })

  const [selectedJob, setSelectedJob] = useState()

  const handleCardPress = () => {}

  // console.log(data)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}> Popular Job</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}> Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>{isLoading ? <ActivityIndicator size="large" /> : error ? <Text> Something went wrong</Text> : <FlatList data={data} renderItem={({ item }) => <PopularjobCard item={item} selectedJob={selectedJob} handleCardPress={handleCardPress}></PopularjobCard>} horizontal keyExtractor={item => item?.job_id} contentContainerStyle={{ columnGap: SIZES.medium }} />}</View>
    </View>
  )
}

export default Popularjobs
