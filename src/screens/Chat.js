import { View, Text, TouchableOpacity, StatusBar, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../constants'
import Icon from '../components/Icon'
import { Bubble, GiftedChat, Time } from 'react-native-gifted-chat'
import changeNavigationBarColor, { hideNavigationBar, showNavigationBar } from 'react-native-navigation-bar-color'
import io from 'socket.io-client'
import { HOSTNAME } from '../utils/Constants/SystemVar'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Chat = ({ navigation }) => {
    const [socket, setSocket] = useState(null);
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState("");
    const [hiden, setHiden] = useState(true);
    const [userInfo, setUserInfo] = useState(null);
    const handleInputText = (text) => {
        setInputMessage(text);
    }

    useEffect(() => {
        getInfo().then((value) => {
            console.log('value', value)
            setUserInfo(JSON.parse(value))
        });
    }, [])

    const getInfo = async () => {
        return await AsyncStorage.getItem('logininfo')
    }

    useEffect(() => {
        // Đặt màu cho thanh điều hướng
        changeNavigationBarColor(COLORS.white, false); // Màu xanh lá cây
        // hideNavigationBar(isShow);
        // hideNavigationBar(hiden);
        showNavigationBar();
    }, [hiden]);

    useEffect(() => {
        const newSocket = io('http://10.0.2.2:8082/'); // Đảm bảo rằng địa chỉ IP và port là chính xác
        setSocket(newSocket);

        newSocket.on('chat message', (message) => {
            setMessages((previousMessage) =>
                GiftedChat.append(previousMessage, [message]))
        });

        return () => newSocket.close();
    }, []);

    const renderMessage = (props) => {
        const { currentMessage } = props;
        if (currentMessage.user._id === 1) {
            return (
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'flex-end'
                }}>
                    <Bubble
                        {...props}
                        wrapperStyle={
                            {
                                right: {
                                    backgroundColor: '#d0f0fd',
                                    marginRight: 12,
                                    marginVertical: 6,
                                    borderRadius: 7
                                }
                            }
                        }
                        textStyle={{
                            right: {
                                color: COLORS.black,
                                fontSize: 15,
                            }
                        }}
                        renderTime={(bubbleProps) => (
                            <Time
                                {...bubbleProps}
                                timeTextStyle={{
                                    right: {
                                        color: COLORS.black,
                                    }
                                }}
                            />
                        )}
                    />
                    {
                        currentMessage._id === messages[0]._id && <View
                            style={{
                                alignSelf: 'flex-end',
                                borderRadius: 7,
                                backgroundColor: "#B5C0C4",
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginHorizontal: 12,
                                marginBottom: 12,
                                // width: 55,
                                justifyContent: 'center'
                            }}>
                            <Image
                                source={{ uri: userInfo.thumbnail }}
                                style={{
                                    height: 17,
                                    width: 17,
                                    resizeMode: 'contain',
                                    borderRadius: 50,
                                    borderColor: COLORS.white,
                                    borderWidth: 1
                                }}
                            />
                            {/* <Icon
                                name="check"
                                type="Feather"
                                size={10}
                            />
                            <Text style={{
                                fontSize: 9,
                                marginLeft: 3,
                                color : COLORS.white
                            }}>Đã nhận</Text> */}
                        </View>
                    }

                </View>
            )
        } else {
            return (
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-start'
                }}>
                    <Bubble
                        {...props}
                        wrapperStyle={
                            {
                                left: {
                                    backgroundColor: COLORS.white,
                                    marginLeft: 12,
                                    marginVertical: 8,
                                    borderRadius: 7
                                }
                            }
                        }
                        textStyle={{
                            left: {
                                color: COLORS.black,
                                fontSize: 15
                            }
                        }}
                        renderTime={(bubbleProps) => (
                            <Time
                                {...bubbleProps}
                                timeTextStyle={{
                                    left: {
                                        color: COLORS.black,
                                    }
                                }}
                            />
                        )}
                    />
                </View>
            )
        }
    }

    const handleSendMessage = () => {
        const message = {
            _id: Math.random().toString(36).toString(7),
            text: inputMessage,
            createdAt: new Date().getTime(),
            user: { _id: 1 },
            read: false
        }

        if (socket) {
            socket.emit('chat message', message);
            setInputMessage("");
        }

        setMessages((previousMessage) =>
            GiftedChat.append(previousMessage, [message]))
    }

    const handleSendMessage2 = () => {
        const message = {
            _id: Math.random().toString(36).toString(7),
            text: inputMessage,
            createdAt: new Date().getTime(),
            user: { _id: 2 },
            read: false
        }

        if (socket) {
            socket.emit('chat message', message);
            setInputMessage("");
        }
    }

    return (
        userInfo && <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#e2e9f1'
            // backgroundColor: '#009bf8'
        }}>
            <StatusBar
                // translucent
                backgroundColor="#009bf8"
            />

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 16,
                paddingVertical: 12,
                backgroundColor: '#009bf8',
                borderBottomColor: COLORS.gray,
                borderBottomWidth: .2
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Icon
                        onPress={() => navigation.goBack()}
                        name="chevron-back"
                        type="Ionicons"
                        color={COLORS.white}
                    />
                    <View style={{ marginLeft: 16, width: '62%' }}>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: 'bold',
                                color: COLORS.white
                            }}
                        >{userInfo.name}
                        </Text>
                        <Text
                            style={{
                                fontSize: 11,
                                color: COLORS.white
                            }}
                        >Vừa mới truy cập
                        </Text>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Icon
                            onPress={handleSendMessage2}
                            name="call-outline"
                            type="Ionicons"
                            color={COLORS.white}
                            size={22}
                        />
                        <Icon
                            style={{ marginLeft: 20 }}
                            onPress={() => navigation.goBack()}
                            name="videocam-outline"
                            type="Ionicons"
                            color={COLORS.white}
                            size={22}
                        />
                        <Icon
                            style={{ marginLeft: 20 }}
                            onPress={() => navigation.goBack()}
                            name="list"
                            type="Feather"
                            color={COLORS.white}
                            size={22}
                        />
                    </View>

                </View>
            </View>
            <GiftedChat
                messages={messages}
                renderInputToolbar={() => { return null }}
                user={{ _id: 1 }}
                minInputToolbarHeight={0}
                renderMessage={renderMessage}
            />
            <View style={styles.inputContainer}>
                <View style={styles.inputMessageContainer}>
                    <View style={{
                        marginHorizontal: 10
                    }}>
                        <Icon
                            onPress={handleSendMessage}
                            name="smile"
                            type="Feather"
                            color={COLORS.gray}
                        />
                    </View>
                    <TextInput
                        placeholder='Tin nhắn...'
                        value={inputMessage}
                        onChangeText={handleInputText}
                        style={{
                            width: inputMessage != "" ? '80%' : '70%'
                        }}
                        multiline={true}
                        onFocus={() => setHiden(false)}
                        onBlur={() => setHiden(true)}
                    />
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        {
                            inputMessage != "" ? (
                                <Icon
                                    onPress={handleSendMessage}
                                    name="send"
                                    type="Feather"
                                    color='#009bf8'
                                />
                            ) : (
                                <>
                                    <Icon
                                        onPress={handleSendMessage}
                                        name="mic"
                                        type="Feather"
                                        color={COLORS.gray}
                                    />
                                    <Icon
                                        style={{
                                            marginHorizontal: 10
                                        }}
                                        onPress={handleSendMessage}
                                        name="image"
                                        type="FontAwesome"
                                        color={COLORS.gray}
                                    />
                                </>
                            )
                        }
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: COLORS.white,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputMessageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: COLORS.white,
        alignItems: 'center',
        width: '100%'
    }
})

export default Chat