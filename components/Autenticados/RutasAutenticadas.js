import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { StackHome } from './StackHome';

import Follow from './Follow';
import Search from './Search';
import Add from './Add';
import Profile from './Profile';


const RutasAutenticadas = createBottomTabNavigator({
    Home: {
        screen: StackHome,
    },
    Search: {
        screen: Search,
    },
    Follow: {
        screen: Follow,
    },
    Profile: {
        screen: Profile,
    },
    Add: {
        screen: Add,
    }
});

export default createAppContainer(RutasAutenticadas);
