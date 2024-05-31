import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import { screens } from './screens'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
          {
            screens.map((screen, index) => {
              return <Stack.Screen key={index} name={screen.name} component={screen.component} />
            })
          }
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
