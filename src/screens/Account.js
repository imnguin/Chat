import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Icon from '../components/Icon'
import { COLORS } from '../constants'

const Account = ({ navigation }) => {
  useEffect(() => {
    getInfo().then((value) => {
      console.log('Retrieved value:', value);
    });
  }, [])

  const getInfo = async () => {
    return await AsyncStorage.getItem('logininfo')
  }

  const logout = async () => {
    await AsyncStorage.removeItem('logininfo');
    navigation.navigate('Login');
  }

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center'
    }}>
      <Icon
        onPress={logout}
        name="smile"
        type="Feather"
        color={COLORS.gray}
      />
    </View>
  )
}

export default Account