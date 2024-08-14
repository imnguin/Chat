import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react';
import Button from '../components/Button';
import { COLORS, SIZES } from '../constants';
import { checkAuthen } from '../services/checkAuthen';
import { hideNavigationBar } from 'react-native-navigation-bar-color';

const Welcome = (props) => {
  let { navigation } = props;

  // useEffect(() => {
  //   async function check() {
  //     await checkAuthen(navigation);
  //   }
  //   check();
  // }, [])

  useEffect(() => {
    // hideNavigationBar();
  },[])

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: SIZES.width }}>
        <Image
          source={{ uri: 'https://th.bing.com/th/id/OIP.TgNYsPhTO-xK5XfPXm4DyQHaE8?w=1470&h=980&rs=1&pid=ImgDetMain' }}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Chat Bizlinks</Text>
          <Text style={styles.subTitle}>Trò truyện thật đã với hình ảnh sắc nét.</Text>
        </View>
      </View>
      <View style={{ marginBottom: 50 }}>
        <Button
          style={{
            backgroundColor: COLORS.primary,
            titleStyle: {
              fontWeight: 'bold'
            }
          }}
          onPress={() => navigation.navigate('Login')}
          title='Đăng nhập'
        />
        <Button
          style={{
            backgroundColor: COLORS.gray,
            titleStyle: {
              fontWeight: 'bold'
            }
          }}
          onPress={() => navigation.navigate('Signup')}
          title='Tạo tài khoản'
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 200,
    marginBottom: 20
  },
  textContainer: {
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    padding: 6
  }
})

export default Welcome