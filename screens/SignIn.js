import React from 'react';
import { Text, View, Button } from 'react-native';

const SignIn = (props) => {
    console.log(props);
    const { navigation } = props;
    return (
        <View>
            <Text>
                Componente SignIn
            </Text>
            <Button
                title={"Navegar a la SignUp"}
                onPress={() => {
                    navigation.navigate('SignUp');
                }}
            />
        </View>
    );
};

export default SignIn;