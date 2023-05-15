import { View, Text, TouchableOpacity, Image } from "react-native"

import styles from "./popularjobcard.style"

import { checkImageURL } from "../../../../utils"

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity style={styles.container(selectedJob, item)} onPress={() => handleCardPress(item)}>
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image source={{ uri: checkImageURL(item.employer_logo) ? item.employer_logo : "https://w7.pngwing.com/pngs/269/405/png-transparent-career-development-job-application-for-employment-business-career-miscellaneous-trademark-logo.png" }} resizeMode="contain" style={styles.logoImage} />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {" "}
        {item.employer_name}
      </Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {" "}
          {item.job_title}{" "}
        </Text>
        <Text style={styles.location}> {item.job_country}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard
