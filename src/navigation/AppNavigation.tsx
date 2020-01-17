import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screens/Weather'

const AppNavigation = createStackNavigator(
  {
    Home: { screen: Home }
  },
  {
    initialRouteName: 'Home'
  }
)

export default AppNavigation