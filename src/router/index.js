import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Pesanan from '../pages/Pesanan';
import Chat from '../pages/Chat';
import Inbox from '../pages/Inbox';
import Profile from '../pages/Profile';

const Tab = createBottomTabNavigator();

const Router = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Pesanan" component={Pesanan} />
            <Tab.Screen name="Chat" component={Chat} />
            <Tab.Screen name="Inbox" component={Inbox} />
            <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})