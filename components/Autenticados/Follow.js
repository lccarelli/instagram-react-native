import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class Follow extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Follow</Text>
                <Button
                    title="Go to Home"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
        )
    }
}
