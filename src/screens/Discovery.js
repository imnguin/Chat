import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import Icon from '../components/Icon'
import { COLORS } from '../constants'

const Discovery = () => {
  return (
    <SafeAreaView style={styles.area}>
      <Header listIcon={listIcon} />
      <View style={styles.container}>

      </View>
    </SafeAreaView>
  )
}

const listIcon = [
  <Icon
    onPress={() => console.log('AA')}
    name="qrcode-scan"
    type="MaterialCommunityIcons"
    size={18}
  />,
]

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

export default Discovery