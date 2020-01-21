import { createStackNavigator } from 'react-navigation-stack';
import Home from './Home';
import Publicacion from './Publicacion';
import Autor from './Profile';
import Comentarios from './Comentarios';


const StackHome = createStackNavigator({
    Home: {
        screen: Home,
    },
    Autor: {
        screen: Autor,
    },
    Publicacion: {
        screen: Publicacion,
    },
    Comentarios: {
        screen: Comentarios,
    },
})


export { StackHome };