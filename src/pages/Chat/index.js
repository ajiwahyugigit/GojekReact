import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Header } from 'react-native-elements';


const Chat = () => {
    return (
        <Header
        leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
        centerComponent={{ text: 'Chat', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
    />
    )
}

export default Chat

const styles = StyleSheet.create({})
