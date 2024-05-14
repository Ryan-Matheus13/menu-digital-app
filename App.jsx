import React from "react";
import { useEffect, useCallback, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { useFonts, loadAsync } from "expo-font";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "./src/store";
import Telas from "./src/navigation/Screens";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await loadFont();
      prepare();
    };

    async function loadFont() {
      await Font.loadAsync({
        "Poppins-Bold": require("./src/assets/fonts/Poppins-Bold.ttf"),
        "Poppins-Medium": require("./src/assets/fonts/Poppins-Medium.ttf"),
        "Poppins-Regular": require("./src/assets/fonts/Poppins-Regular.ttf"),
      });
    }

    async function prepare() {
      setAppIsReady(true);
    }

    fetchData();
  }, [appIsReady]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      setTimeout(async () => {
        await SplashScreen.hideAsync();
      }, 1000);
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Telas />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}
