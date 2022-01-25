import Auth from "../pages/auth/Auth";
import Friends from "../pages/friends/Friends";
import Home from "../pages/home/Home";
import Conversation from "../pages/messages/Conversation";
import Messages from "../pages/messages/Messages";
import Profile from "../pages/profile/Profile";

export const routes = [
    {
        path: '/',
        Component: Home,
        auth: true
    },
    {
        path: '/profile',
        Component: Profile,
        auth: true
    },
    {
        path: '/messages',
        Component: Messages,
        auth: true
    },
    {
        path: '/message/:id',
        Component: Conversation,
        auth: true
    },
    {
        path: '/friends/:id',
        Component: Friends,
        auth: true
    },
    {
        path: '/auth',
        Component: Auth,
        auth: false
    }
]