import React from 'react';
import { StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

const Header = () => {
    return (
                
        <Header
            leftComponent={{ icon: 'git', color: '#fff', iconStyle: { color: '#fff' } }}
            centerComponent={{ text: 'Gojek', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
        />
    )
}

export default Header

const styles = StyleSheet.create({})
