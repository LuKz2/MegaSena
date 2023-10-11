import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Estilo from '../Estilo'
import { LinearGradient } from 'expo-linear-gradient';

export default ({ num }) => {
    return (
        <LinearGradient colors={['#00d2ff','#3a7bd5']} style={style.container}>
            <Text style={[Estilo.txtG1, style.num]}>
                {num}
            </Text>
        </LinearGradient>
    )
}
const style = StyleSheet.create({
    container: {
        fontFamily:'serif',
        backgroundColor: '#fff',
        flexDirection:'column',
        height: 50,
        width: 50,
        margin: 5,
        borderRadius: 25
    },
    num: {
        color: '#fff'
    }
})