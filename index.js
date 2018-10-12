import Home from './src/screens/Home'
import { Navigation } from 'react-native-navigation'

Navigation.registerComponent(`HomeScreen`, () => Home)

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            component: {
                name: 'HomeScreen'
            }
        }
  })
})
