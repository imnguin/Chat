import { View, Text, TouchableOpacity, StatusBar, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../constants'
import Icon from '../components/Icon'
import { Bubble, GiftedChat } from 'react-native-gifted-chat'
const Chat = ({ navigation }) => {

    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState("");
    const handleInputText = (text) => {
        setInputMessage(text);
    }
    const renderMessage = (props) => {
        const { currentMessage } = props;

        if (currentMessage.user._id === 1) {
            return (
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end'
                }}>
                    <Bubble
                        {...props}
                        wrapperStyle={
                            {
                                right: {
                                    backgroundColor: COLORS.primary,
                                    marginRight: 12,
                                    marginVertical: 12
                                }
                            }
                        }
                        textStyle={{
                            right: {
                                color: COLORS.white
                            }
                        }}
                    />
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
                                    backgroundColor: COLORS.primary,
                                    marginRight: 12,
                                    marginVertical: 12
                                }
                            }
                        }
                        textStyle={{
                            left: {
                                color: COLORS.white
                            }
                        }}
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
            user: { _id: 1 }
        }

        const cloneMessage = {
            _id: Math.random().toString(36).toString(7),
            text: inputMessage,
            createdAt: new Date().getTime(),
            user: { _id: 2 }
        }

        setMessages((previousMessage) =>
            GiftedChat.append(previousMessage, [message, cloneMessage]))
        setInputMessage("");
    }

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#F5F5F5'
        }}>
            <StatusBar
                translucent
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
                        >Nguyễn Trung Hiếu
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
                            onPress={() => navigation.goBack()}
                            name="call-outline"
                            type="Ionicons"
                            color={COLORS.white}
                            size={22}
                        />
                        <Icon
                            style={{ marginLeft: 20 }}
                            onPress={() => navigation.goBack()}
                            name="videocamera"
                            type="AntDesign"
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
                            color='#009bf8'
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
                                        color='#009bf8'
                                    />
                                    <Icon
                                        style={{
                                            marginHorizontal: 10
                                        }}
                                        onPress={handleSendMessage}
                                        name="image"
                                        type="FontAwesome"
                                        color='#009bf8'
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
        // justifyContent: 'center',
        backgroundColor: COLORS.white,
        alignItems: 'center',
        width: '100%'
    }
})

export default Chat