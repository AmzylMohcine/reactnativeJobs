import { View, Text, TouchableOpacity, Image } from "react-native"

import styles from "./nearbyjobcard.style"

import { checkImageURL } from "../../../../utils"

const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        handleNavigate
      }}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image source={{ uri: checkImageURL(job.employer_logo) ? job.employer_logo : "https://w7.pngwing.com/pngs/269/405/png-transparent-career-development-job-application-for-employment-business-career-miscellaneous-trademark-logo.png" }} resizeMode="contain" style={styles.logImage} />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {" "}
        {job.employer_name}
      </Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {" "}
          {job.job_title}{" "}
        </Text>
        <Text style={styles.location}> {job.job_country}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard
