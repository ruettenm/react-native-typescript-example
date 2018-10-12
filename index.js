import Home from './src/screens/Home'
import Login from './src/screens/Login'
import { Navigation } from 'react-native-navigation'

Navigation.registerComponent(`HomeScreen`, () => Home)
Navigation.registerComponent(`LoginScreen`, () => Login)

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            component: {
                name: 'HomeScreen'
            }
        }
  })
})
