import React, { Component } from 'react'
import { Button, Platform, StyleSheet, Text, View } from 'react-native'
import { Navigation } from 'react-native-navigation'

const instructions = Platform.select({
    android: 'Double tap R on your keyboard to reload, Shake or press menu button for dev menu',
    ios: 'Press Cmd+R to reload, Cmd+D or shake for dev menu',
})

export default class Home extends Component<{}> {
    public render() {
        return (
            <View style={ styles.container }>
                <Text style={ styles.welcome }>React Native is running with TypeScript!</Text>
                <Text style={ styles.instructions }>{ instructions }</Text>
                <Button title='Login' onPress={ this.goToLogin } />
            </View>
        )
    }

    private goToLogin() {
        Navigation.showModal({
            stack: {
                children: [{
                    component: {
                        name: 'LoginScreen',
                        options: {
                            topBar: {
                                title: {
                                    text: 'Login',
                                },
                            },
                        },
                    },
                }],
            },
        })
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flex: 1,
        justifyContent: 'center',
    },
    instructions: {
        color: '#333333',
        marginBottom: 5,
        textAlign: 'center',
    },
    welcome: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
    },
})
