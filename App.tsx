import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";
import { ThemeProvider } from "styled-components/native";

import { NavigationContainer } from "@react-navigation/native";
import themes from "./src/themes";
import Routes from "./src/Routes/index.routes";
import Home from "./src/Screens/Home";

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <ThemeProvider theme={themes}>
      <NavigationContainer>
        <Routes />
        <StatusBar style="dark" translucent />
      </NavigationContainer>
    </ThemeProvider>
  );
}
