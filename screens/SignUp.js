import React from 'react';
import { Text, View, Button } from 'react-native';

const SignUp = (props) => {
    console.log(props);
    const { navigation } = props;
    return (
        <View>
            <Text>
                Componente SignUp
            </Text>
            <Button
                title={"Regresar"}
                onPress={() => {
                    navigation.goBack();
                }}
            />

        </View>

    );
};

export default SignUp;