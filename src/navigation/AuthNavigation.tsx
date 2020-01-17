import { createStackNavigator } from 'react-navigation-stack'
import Login from '../screens/Login-Test'
import Signup from '../screens/Signup'

const AuthNavigation = createStackNavigator(
  {
    Login: { screen: Login },
    Signup: { screen: Signup }
  },
  {
    initialRouteName: 'Login'
  }
)

export default AuthNavigation
