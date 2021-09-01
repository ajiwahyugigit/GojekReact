import React from 'react';
import { Header } from 'react-native-elements';



function Home() {
    return (
        <Header
            leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
            centerComponent={{ text: 'Gojek', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
        />
        
    )
}

export default Home;
