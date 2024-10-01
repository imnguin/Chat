import React, { useState } from 'react'
import { Button, Dimensions, Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import Icon from '../../components/Icon';
import { COLORS } from '../../constants';
const { height } = Dimensions.get('window'); // Lấy chiều cao của màn hình

const Profile = ({ navigation }) => {
    const [scrolly, setScrolly] = useState(false);
    const handleScroll = (event) => {
        const scrollY = event.nativeEvent.contentOffset.y
        if (scrollY >= height * 0.15) {
            setScrolly(true)
        } else {
            setScrolly(false)
        }
    };

    return (
        <>
            <StatusBar
                barStyle="dark-content"
            />
            <View
                style={{
                    height: 60,
                    backgroundColor: scrolly ? '#FFFFFF' : undefined,
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    padding: 5,
                    position: 'absolute',
                    zIndex: 1,
                    width: '100%'
                }}
            >
                <View style={{ flex: 2 }}>
                    <Icon
                        onPress={() => navigation.goBack()}
                        name="chevron-back"
                        type="Ionicons"
                        color={COLORS.black}
                    />
                </View>
                <View style={{ flex: 1 , alignItems: 'flex-end',}}>
                    <Icon
                        onPress={() => navigation.goBack()}
                        name="ellipsis-h"
                        type="FontAwesome5"
                        color={COLORS.black}
                    />
                </View>
            </View>

            <ScrollView style={{ flex: 1, backgroundColor: 'white' }} onScroll={handleScroll}
                scrollEventThrottle={16}>
                <ImageBackground
                    source={{ uri: 'https://scontent.fsgn1-1.fna.fbcdn.net/v/t39.30808-6/453188008_3312338152402103_4516339350413437500_n.jpg?stp=cp6_dst-jpg_s960x960&_nc_cat=111&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=FwJw9Rvc45kQ7kNvgGcWrPn&_nc_ht=scontent.fsgn1-1.fna&_nc_gid=AcxB3TGJHUoJDe4L_9gz-mh&oh=00_AYDNlSLFRrBA_vitITCB2zfItkWd-HCAJr59p-EbIGJcQA&oe=66E07980' }}  // Đường dẫn URI của ảnh nền
                    style={[styles.viewOne, { height: height * 0.25 }]}
                    resizeMode="cover"
                >
                </ImageBackground>
                <View style={styles.viewTwo}>
                    <View
                        style={{
                            marginTop: 40,
                        }}
                    >
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 19 }}>Lâm Xuân Nguyên</Text>
                    </View>
                </View>
                <View style={[styles.buttonContainer, { top: height * 0.25 }]}>
                    <Image
                        source={{ uri: "https://scontent.fsgn1-1.fna.fbcdn.net/v/t39.30808-6/449074787_3286501664985752_2833373860847785822_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=VRnqfEH7IeoQ7kNvgEPM27I&_nc_ht=scontent.fsgn1-1.fna&oh=00_AYAdoOMH2qEx41Phe6OG1PC6dBX4i4W0xj_uHqLgk90r3A&oe=66E06055" }}
                        resizeMode="contain"
                        style={{ width: 110, height: 110, borderRadius: 55, borderWidth: 4, borderColor: '#FFFFFF' }}
                    />
                </View>
            </ScrollView >
        </>

    );
}
const styles = StyleSheet.create({
    viewOne: {
        // backgroundColor: 'yellow',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    viewTwo: {
        flex: 1,  // Chiếm phần còn lại
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        position: 'absolute',
        left: '50%',
        transform: [{ translateX: -50 }, { translateY: -75 }],
    },
});

export default Profile
