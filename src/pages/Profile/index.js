import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { Header } from 'react-native-elements';


const Profile = () => {
    return (
        <Header
            leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
            centerComponent={{ text: 'Profile', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
        />
    )
}

export default Profile

const styles = StyleSheet.create({})
