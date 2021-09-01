import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const Inbox = () => {
    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <FontAwesome5 name={'home'} />
        <Text>Inbox</Text>
    </View>
    )
}

export default Inbox

const styles = StyleSheet.create({})
