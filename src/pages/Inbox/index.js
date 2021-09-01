import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card, Button, Icon } from 'react-native-elements';
import { Header } from 'react-native-elements';



const Inbox = () => {
    return (
      <Header
      leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
      centerComponent={{ text: 'Inbox', style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
  />
    )
}

export default Inbox

const styles = StyleSheet.create({})
