import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header } from 'react-native-elements'

const HeaderComponent = () => {
    return (
        <View>
           <Header
                leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
        </View>
    )
}

export default HeaderComponent

const styles = StyleSheet.create({})
