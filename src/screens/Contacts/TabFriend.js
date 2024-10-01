import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SectionList, Image } from 'react-native'
import React, { useState } from 'react'
import Icon from '../../components/Icon'
import { services_TabFriend } from './constants'
import { COLORS, SIZES } from '../../constants'

const TabFriend = (props) => {
    let {
        navigation
    } = props;

    const [filter, setFilter] = useState('all')
    const [services, setServices] = useState(services_TabFriend)

    const renderService = (services) => {
        let render = services.map((services, index) => {
            return (
                <TouchableOpacity key={index} onPress={() => navigation.navigate(services.Route)}>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            gap: 15,
                            alignItems: 'center'
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: '#1D79FA',
                                borderRadius: 11,
                                padding: 7
                            }}>
                            <Icon name={services.Icon.Name} type={services.Icon.Type} size={services.Icon.Size || 19} />
                        </View>
                        <View style={{
                            gap: 5
                        }}>
                            <Text style={{
                                color: 'black',
                                fontSize: 15
                            }}>{services.Content}</Text>
                            {
                                services.SubContent && <Text style={{
                                    color: 'gray',
                                    fontSize: 12
                                }}>{services.SubContent}</Text>
                            }
                        </View>
                    </View>
                </TouchableOpacity>
            )
        });
        return render;
    }
    const sections = [];

    for (let i = 1; i <= 20; i++) {
        sections.push({
            title: `${i}`, data: [{
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
            },]
        })
    }

    const renderItem = ({ item, index }) => (
        <TouchableOpacity
            key={index}
            style={{
                marginLeft: 8,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 20
            }}
        >
            <View style={{ paddingVertical: 5 }}>
                <Image
                    source={{ uri: item.userImg }}
                    resizeMode="contain"
                    style={{ width: 40, height: 40, borderRadius: 25 }}
                />
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <View style={{ flex: 1, }}>
                    <Text style={{ color: 'black' }}>{item.fullName}</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    flex: 1,
                    gap: 20,
                    marginLeft: 40
                }}>
                    <TouchableOpacity>
                        <Icon
                            name="call-outline"
                            type="Ionicons"
                            color={COLORS.gray}
                            size={18}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon
                            name="videocam-outline"
                            type="Ionicons"
                            color={COLORS.gray}
                            size={18}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <ScrollView style={{ flex: 1, marginBottom: Platform.OS === 'ios' ? 110 : 60 }}>
            <View style={styles.container}>
                <View style={styles.services}>
                    {renderService(services)}
                </View>

                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'white',
                    }}>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        gap: 10,
                        padding: 15,
                        borderBottomColor: 'gray',
                        borderBottomWidth: 0.2
                    }}>
                        <TouchableOpacity style={{
                            backgroundColor: filter == 'all' ? '#EBEAEE' : undefined,
                            height: 30,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 10,
                            borderWidth: 0.3,
                            borderColor: 'gray',
                            alignSelf: 'flex-start',
                            paddingLeft: 10,
                            paddingRight: 10
                        }} onPress={() => { setFilter('all') }}>
                            <Text style={{ color: filter == 'all' ? 'black' : 'gray' }}>Tất cả 20</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            backgroundColor: filter == 'online' ? '#EBEAEE' : undefined,
                            height: 30,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 10,
                            alignSelf: 'flex-start',
                            paddingLeft: 10,
                            paddingRight: 10,
                            borderWidth: 0.3,
                            borderColor: 'gray'
                        }} onPress={() => { setFilter('online') }}>
                            <Text style={{ color: filter == 'online' ? 'black' : 'gray' }}>Vừa mới truy cập 7</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        paddingLeft: 15,
                        paddingRight: 15,
                        paddingTop: 5
                    }}>
                        <SectionList
                            sections={sections}
                            keyExtractor={(item, index) => item + index}
                            renderItem={renderItem}
                            renderSectionHeader={({ section: { title } }) => (
                                <Text style={{
                                    fontSize: 15,
                                    color: 'black',
                                    fontWeight: 'bold'
                                }}>{title}</Text>
                            )}
                            scrollEnabled={false}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 7
    },
    services: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        gap: 15,
        padding: 15
    },
    item: {
        padding: 10,
        marginVertical: 5,
    },
})

export default TabFriend