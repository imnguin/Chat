import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screens } from '../screens';
import { checkAuthen } from '../services/checkAuthen';
const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  const [initialRouteName, setInitialRouteName] = useState('Wellcome');

  useEffect(() => {
    async function check() {
      if (await checkAuthen()) {
        setInitialRouteName('Main');
      } else {
        setInitialRouteName('Wellcome');
      }
    }
    check();
  }, [])

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={initialRouteName} screenOptions={{ headerShown: false }}>
          {
            screens.map((screen, index) => {
              return <Stack.Screen key={index} name={screen.name} component={screen.component} />
            })
          }
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default AppNavigation