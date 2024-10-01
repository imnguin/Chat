import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Icon from '../components/Icon'
import { COLORS } from '../constants'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'

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

  const listIcon = [
    <Icon
      onPress={() => console.log('AA')}
      name="setting"
      type="AntDesign"
      size={18}
    />
  ]

  return (
    <SafeAreaView style={styles.area}>
      <Header listIcon={listIcon} />
      <View style={styles.container}>
        <View
          style={{
            padding: 15,
            backgroundColor: 'white',
            flexDirection: 'column'
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 20
            }}
            onPress={() => navigation.navigate('Profile')}
          >
            <View>
              <Image
                source={{ uri: "https://scontent.fsgn1-1.fna.fbcdn.net/v/t39.30808-6/449074787_3286501664985752_2833373860847785822_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=VRnqfEH7IeoQ7kNvgEPM27I&_nc_ht=scontent.fsgn1-1.fna&oh=00_AYAdoOMH2qEx41Phe6OG1PC6dBX4i4W0xj_uHqLgk90r3A&oe=66E06055" }}
                resizeMode="contain"
                style={{ width: 40, height: 40, borderRadius: 25 }}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1
              }}
            >
              <View
                style={{
                  flex: 2
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 16,
                    fontWeight: '500'
                  }}
                >
                  Lâm Xuân Nguyên
                </Text>
                <Text
                  style={{
                    color: 'gray',
                    fontSize: 13
                  }}>
                  Xem trang cá nhân
                </Text>
              </View>

              <View style={{
                flex: 1,
                alignItems: 'flex-end',
                paddingRight: 10
              }}>
                <TouchableOpacity onPress={logout}>
                  <Icon
                    name="account-convert-outline"
                    type="MaterialCommunityIcons"
                    color={"#487BD1"}
                    size={19}
                  />
                </TouchableOpacity>
              </View>
            </View>

          </TouchableOpacity>
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
    backgroundColor: "#F3F3F3"
  },
});

export default Account