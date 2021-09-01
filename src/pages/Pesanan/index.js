import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header } from 'react-native-elements';


const Pesanan = () => {
    return (
        <Header
        leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
        centerComponent={{ text: 'Pesanan', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
    />
    )
}

export default Pesanan

const styles = StyleSheet.create({})
