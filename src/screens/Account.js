import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Account = () => {
  useEffect(() => {
    getInfo().then((value) => {
      console.log('Retrieved value:', value);
    });
  }, [])

  const getInfo = async () => {
    return await AsyncStorage.getItem('logininfo')
  }
  
  return (
    <View>
      {/* <Text>{user.username}</Text> */}
    </View>
  )
}

export default Account