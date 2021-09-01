import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Pesanan, Chat, Inbox, Profile } from '../pages';
import Ionicons from 'react-native-vector-icons/Ionicons';



 
const Tab = createBottomTabNavigator();

const Router = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'home'
                  : 'home-outline';

              } else if (route.name === 'Pesanan') {
                iconName = focused ? 'cart' : 'cart-outline';

              }else if (route.name === 'Chat') {
                iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';

              }else if (route.name === 'Inbox') {
                iconName = focused ? 'notifications' : 'notifications-outline';

              }else if (route.name === 'Profile') {
                iconName = focused ? 'person' : 'person-outline';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
          >
            <Tab.Screen name="Home" component={Home}  />
            <Tab.Screen name="Pesanan" component={Pesanan} />
            <Tab.Screen name="Chat" component={Chat} />
            <Tab.Screen name="Inbox" component={Inbox} />
            <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})
