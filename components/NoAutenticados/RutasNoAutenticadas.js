import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SignIn from '../../screens/SignIn';
import SignUp from '../../screens/SignUp';

const RutasNoAutenticadas = createStackNavigator(
    {
        SignIn: {
            screen: SignIn,
            navigationOptions: {
                headerShown: false,
                title: 'SignIn',
                headerBackTitle: null,
            },
        },
        SignUp: {
            screen: SignUp,
            navigationOptions: {
                headerShown: false,
                title: 'SignUp',
                headerBackTitle: null,
            },
        },
    },
    {
        initialRouteName: 'SignIn',
    },
);

export default createAppContainer(RutasNoAutenticadas);