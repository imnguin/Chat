import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import { COLORS } from '../constants'
import Icon from '../components/Icon'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
const Tab = createMaterialTopTabNavigator()

const Contacts = () => {
  return (
    <SafeAreaView style={styles.area}>
      <Header listIcon={[<Icon onPress={() => console.log('AA')} name="adduser" type="AntDesign" size={20} />]} />
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Tab.Navigator
            screenOptions={{
              tabBarLabelStyle: {
                textTransform: 'none'
              }
            }}
          >
            <Tab.Screen
              name='friend'
              children={() => {
                return (
                  <View><Text>a</Text></View>
                )
              }}
              options={{
                tabBarLabel: 'Bạn bè'
              }}
            />
            <Tab.Screen
              name='group'
              children={() => {
                return (
                  <View><Text>b</Text></View>
                )
              }}
              options={{
                tabBarLabel: 'Nhóm'
              }}
            />
            <Tab.Screen
              name='page'
              children={() => {
                return (
                  <View><Text>c</Text></View>
                )
              }}
              options={{
                tabBarLabel: 'Trang'
              }}
            />
          </Tab.Navigator>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: '#009bf8',
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    flexDirection: 'column',
    gap: 5
  },
});

export default Contacts