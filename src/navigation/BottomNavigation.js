import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { COLORS } from '../constants';
import Chats from '../screens/Chats';
import { Icons } from '../constants/icons';
import Contacts from '../screens/Contacts';
import Discovery from '../screens/Discovery';
import Timeline from '../screens/Timeline';
import Account from '../screens/Account';
import { Keyboard } from 'react-native';
const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
    const [keyboardShown, setKeyboardShown] = useState(false);
    useEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardShown(true);
        });
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardShown(false);
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);

    return (
        <Tab.Navigator
            detachInactiveScreens
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: COLORS.white,
                    height: Platform.OS === 'ios' ? 110 : 60,
                },
                tabBarActiveTintColor: '#009bf8',
            }}
        >
            <Tab.Screen
                name='Message'
                component={Chats}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icons.Ionicons name="chatbox-ellipses-outline" size={24} color={focused ? '#009bf8' : COLORS.gray} />
                    ),
                    title: "Tin nhắn",
                }}
            />

            <Tab.Screen
                name='Contacts'
                component={Contacts}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icons.AntDesign name="contacts" size={24} color={focused ? '#009bf8' : COLORS.gray} />
                    ),
                    title: "Danh bạ",
                }}
            />

            <Tab.Screen
                name='Discovery'
                component={Discovery}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icons.MaterialCommunityIcons name="view-grid-plus-outline" size={24} color={focused ? '#009bf8' : COLORS.gray} />
                    ),
                    title: "Khám phá",
                }}
            />

            <Tab.Screen
                name='Timeline'
                component={Timeline}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icons.MaterialCommunityIcons name="clock-time-nine-outline" size={24} color={focused ? '#009bf8' : COLORS.gray} />
                    ),
                    title: "Nhật ký",
                }}
            />

            <Tab.Screen
                name='Account'
                component={Account}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icons.Feather name="user" size={24} color={focused ? '#009bf8' : COLORS.gray} />
                    ),
                    title: "Cá nhân",
                }}
            />
        </Tab.Navigator>
    )
}


export default BottomNavigation