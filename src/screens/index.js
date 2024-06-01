import BottomNavigation from "../navigation/BottomNavigation";
import Chat from "./Chat";
import Chats from "./Chats";
import Login from "./Login";
import Signup from "./Signup";
import Welcome from "./Welcome";

export const screens = [
    {
        name: 'Welcome',
        component: Welcome
    },
    {
        name: 'Login',
        component: Login
    },
    {
        name: 'Signup',
        component: Signup
    },
    {
        name: 'Main',
        component: BottomNavigation
    },
    {
        name: 'Chat',
        component: Chat
    },
];