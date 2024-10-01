import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import Icon from '../components/Icon'
import { COLORS } from '../constants'

const Timeline = () => {
  const listIcon = [
    <Icon
      onPress={() => console.log('AA')}
      name="pencil-square-o"
      type="FontAwesome"
      size={18}
    />,
    <Icon
      onPress={() => console.log('AA')}
      style={{ marginLeft: 15 }}
      name="bell"
      type="FontAwesome5"
      size={18}
    />
  ]

  return (
    <SafeAreaView style={styles.area}>
      <Header listIcon={listIcon} />
      <View style={styles.container}>

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
    backgroundColor: COLORS.white
  },
});

export default Timeline