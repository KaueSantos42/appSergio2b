import { createStackNavigator } from './react-navigation-stack';

import Login from './pages/login';
import Main from './pages/main';
import Cadastro from './pages/Cadastro';

const Routes = createStackNavigator({
    Login,
    Main,
    Cadastro
});

export default Routes;