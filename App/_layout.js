import { Stack } from "expo-router"
// implement custom fonts
import { useCallback } from "react"
import { useFonts } from "expo-font"
import * as SplashScreen from "expo-splash-screen"

// remain visible until the hideasunc is called to hide the splach screen
SplashScreen.preventAutoHideAsync()
const Layout = () => {
  //load fonts
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf")
  })

  const onLayoutRootView = useCallback(async () => {
    // hide the splash screen only if the fonts are loaded
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) return null

  return <Stack onLayout={onLayoutRootView} />
}

export default Layout
