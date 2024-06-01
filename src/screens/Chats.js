import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, SIZES } from '../constants'
import Header from '../components/Header'
import Icon from '../components/Icon'

const Chats = (props) => {
    let {
        navigation
    } = props;


    const messsagesData = [
        {
            id: "164577",
            fullName: "Nguyễn Trung Hiếu",
            isOnline: false,
            userImg:
                "https://insite.thegioididong.com/cdninsite/UserImages/reviewed/164577_thumb.jpg",
            lastSeen: "2023-11-16T04:52:06.501Z",
            lastMessage: "hello em",
            messageInQueue: 2,
            lastMessageTime: "12:25 PM",
        },
        {
            id: "142188",
            fullName: "Phùng Thế Cơ",
            isOnline: true,
            userImg:
                "https://insite.thegioididong.com/cdninsite/UserImages/reviewed/142188_thumb.jpg",
            lastSeen: "2023-11-18T04:52:06.501Z",
            lastMessage: "Chieu nay em co ranh khong?",
            messageInQueue: 0,
            lastMessageTime: "12:15 PM",
        },
        {
            id: "1",
            fullName: "Phùng Thế Cơ",
            isOnline: true,
            userImg:
                "https://insite.thegioididong.com/cdninsite/UserImages/reviewed/142188_thumb.jpg",
            lastSeen: "2023-11-18T04:52:06.501Z",
            lastMessage: "Chieu nay em co ranh khong?",
            messageInQueue: 0,
            lastMessageTime: "12:15 PM",
        },
        {
            id: "2",
            fullName: "Phùng Thế Cơ",
            isOnline: true,
            userImg:
                "https://insite.thegioididong.com/cdninsite/UserImages/reviewed/142188_thumb.jpg",
            lastSeen: "2023-11-18T04:52:06.501Z",
            lastMessage: "Chieu nay em co ranh khong?",
            messageInQueue: 0,
            lastMessageTime: "12:15 PM",
        },
        {
            id: "3",
            fullName: "Phùng Thế Cơ",
            isOnline: true,
            userImg:
                "https://insite.thegioididong.com/cdninsite/UserImages/reviewed/142188_thumb.jpg",
            lastSeen: "2023-11-18T04:52:06.501Z",
            lastMessage: "Chieu nay em co ranh khong?",
            messageInQueue: 0,
            lastMessageTime: "12:15 PM",
        },
        {
            id: "4",
            fullName: "Phùng Thế Cơ",
            isOnline: true,
            userImg:
                "https://insite.thegioididong.com/cdninsite/UserImages/reviewed/142188_thumb.jpg",
            lastSeen: "2023-11-18T04:52:06.501Z",
            lastMessage: "Chieu nay em co ranh khong?",
            messageInQueue: 0,
            lastMessageTime: "12:15 PM",
        },
        {
            id: "5",
            fullName: "Phùng Thế Cơ",
            isOnline: true,
            userImg:
                "https://insite.thegioididong.com/cdninsite/UserImages/reviewed/142188_thumb.jpg",
            lastSeen: "2023-11-18T04:52:06.501Z",
            lastMessage: "Chieu nay em co ranh khong?",
            messageInQueue: 0,
            lastMessageTime: "12:15 PM",
        },
        {
            id: "6",
            fullName: "Phùng Thế Cơ",
            isOnline: true,
            userImg:
                "https://insite.thegioididong.com/cdninsite/UserImages/reviewed/142188_thumb.jpg",
            lastSeen: "2023-11-18T04:52:06.501Z",
            lastMessage: "Chieu nay em co ranh khong?",
            messageInQueue: 0,
            lastMessageTime: "12:15 PM",
        },
        {
            id: "7",
            fullName: "Phùng Thế Cơ",
            isOnline: true,
            userImg:
                "https://insite.thegioididong.com/cdninsite/UserImages/reviewed/142188_thumb.jpg",
            lastSeen: "2023-11-18T04:52:06.501Z",
            lastMessage: "Chieu nay em co ranh khong?",
            messageInQueue: 0,
            lastMessageTime: "12:15 PM",
        },
        {
            id: "8",
            fullName: "Phùng Thế Cơ",
            isOnline: true,
            userImg:
                "https://insite.thegioididong.com/cdninsite/UserImages/reviewed/142188_thumb.jpg",
            lastSeen: "2023-11-18T04:52:06.501Z",
            lastMessage: "Chieu nay em co ranh khong?",
            messageInQueue: 0,
            lastMessageTime: "12:15 PM",
        },
        {
            id: "9",
            fullName: "Phùng Thế Cơ",
            isOnline: true,
            userImg:
                "https://insite.thegioididong.com/cdninsite/UserImages/reviewed/142188_thumb.jpg",
            lastSeen: "2023-11-18T04:52:06.501Z",
            lastMessage: "Chieu nay em co ranh khong?",
            messageInQueue: 0,
            lastMessageTime: "12:15 PM",
        },
        {
            id: "11",
            fullName: "Phùng Thế Cơ",
            isOnline: true,
            userImg:
                "https://insite.thegioididong.com/cdninsite/UserImages/reviewed/142188_thumb.jpg",
            lastSeen: "2023-11-18T04:52:06.501Z",
            lastMessage: "Chieu nay em co ranh khong?",
            messageInQueue: 0,
            lastMessageTime: "12:15 PM",
        },
        {
            id: "12",
            fullName: "Phùng Thế Cơ",
            isOnline: true,
            userImg:
                "https://insite.thegioididong.com/cdninsite/UserImages/reviewed/142188_thumb.jpg",
            lastSeen: "2023-11-18T04:52:06.501Z",
            lastMessage: "Chieu nay em co ranh khong?",
            messageInQueue: 0,
            lastMessageTime: "12:15 PM",
        },
        {
            id: "13",
            fullName: "Phùng Thế Cơ",
            isOnline: true,
            userImg:
                "https://insite.thegioididong.com/cdninsite/UserImages/reviewed/142188_thumb.jpg",
            lastSeen: "2023-11-18T04:52:06.501Z",
            lastMessage: "Chieu nay em co ranh khong?",
            messageInQueue: 0,
            lastMessageTime: "12:15 PM",
        },
    ];

    const renderContent = () => {
        return (
            <View style={{ marginBottom: 40 }}>
                <FlatList
                    data={messsagesData}
                    showsVerticalScrollIndicator={false}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />

            </View >
        );
    };

    const renderItem = ({ item, index }) => (
        <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate("Chat", { userName: item.fullName })}
            style={[
                styles.userContainer,
                index % 2 !== 0 ? styles.oldBackground : null,
            ]}
        >
            <View style={styles.userImageContainer}>
                {item.isOnline && item.isOnline == true && (
                    <View style={styles.onlineIndicator} />
                )}
                <Image
                    source={{ uri: item.userImg }}
                    resizeMode="contain"
                    style={styles.userImage}
                />
            </View>
            <View
                style={{
                    flexDirection: "row",
                    width: SIZES.width - 104,
                }}
            >
                <View style={styles.userInfoContainer}>
                    <Text style={styles.userName}>{item.fullName}</Text>
                    <Text style={styles.lastSeen}>{item.lastMessage}</Text>
                </View>

                <View
                    style={{
                        position: "absolute",
                        right: 4,
                        alignItems: "center",
                    }}
                >
                    <Text style={styles.lastMessageTime}>{item.lastMessageTime}</Text>
                    <View>
                        <TouchableOpacity
                            style={{
                                width: 20,
                                height: 20,
                                borderRadius: 10,
                                backgroundColor: item.messageInQueue
                                    ? COLORS.primary
                                    : "trasparent",
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: 12,
                            }}
                        >
                            <Text style={styles.messageInQueue}>{item.messageInQueue}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );

    const listIcon = [
        <Icon
            onPress={() => console.log('AA')}
            name="qrcode-scan"
            type="MaterialCommunityIcons"
            size={18}
        />,
        <Icon
            onPress={() => console.log('AA')}
            style={{ marginLeft: 15 }}
            name="plus"
            type="AntDesign"
            size={24}
        />
    ]

    return (
        <SafeAreaView style={styles.area}>
            <Header listIcon={listIcon} />
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
    userContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        borderBottomColor: COLORS.secondaryWhite,
        borderBottomWidth: 1,
    },
    oldBackground: {
        backgroundColor: COLORS.white,
    },
    userImageContainer: {
        paddingVertical: 15,
        marginRight: 22,
    },
    onlineIndicator: {
        height: 14,
        width: 14,
        borderRadius: 7,
        backgroundColor: COLORS.primary,
        position: "absolute",
        top: 14,
        right: 2,
        zIndex: 999,
        borderWidth: 2,
        borderColor: COLORS.white,
    },
    userImage: {
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    userInfoContainer: {
        flexDirection: "column",
    },
    userName: {
        fontSize: 14,
        fontFamily: "semiBold",
        color: COLORS.black,
        marginBottom: 4,
    },
    lastSeen: {
        fontSize: 14,
        color: COLORS.secondaryGray,
    },
    lastMessageTime: {
        fontSize: 12,
        color: COLORS.black,
    },
    messageInQueue: {
        fontSize: 12,
        fontFamily: "regular",
        color: COLORS.white,
    },
})

export default Chats