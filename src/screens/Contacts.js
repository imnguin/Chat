import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import { COLORS } from '../constants'
import Icon from '../components/Icon'

const Contacts = () => {
  const renderContent = () => {
    return (
      <View>
        <Text>Đây là nội dung màn hình Danh bạ</Text>
      </View>
    );
  }
  
  return (
    <SafeAreaView style={styles.area}>
      <Header
        listIcon={[
          <Icon onPress={() => console.log('AA')} name="adduser" type="AntDesign" size={20} />
        ]} />
      <View style={styles.container}>{renderContent()}</View>
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
    padding: 16,
  },
});

export default Contacts