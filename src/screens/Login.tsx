import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Login extends Component<{}> {
    public render() {
        return (
            <View style={ styles.container }>
                <Text style={ styles.welcome }>Login</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flex: 1,
        justifyContent: 'center',
    },
    welcome: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
    },
})
