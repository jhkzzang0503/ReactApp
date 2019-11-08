import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import StartScreen from './StartScreen';
import LoginScreen from './LoginScreen';

export function registerScreens() {
    const FirstActivity_StackNavigator = createStackNavigator({
      //All the screen from the Screen1 will be indexed here
      First: {
        screen: StartScreen,
        navigationOptions: ({ navigation }) => ({
          title: 'Demo Screen 1',
          headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
          headerStyle: {
            backgroundColor: '#FF9800',
          },
          headerTintColor: '#fff',
        }),
      },
      Two: {
        screen: LoginScreen,
        navigationOptions: ({ navigation }) => ({
          title: 'Demo Screen 1',
          headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
          headerStyle: {
            backgroundColor: '#FF9800',
          },
          headerTintColor: '#fff',
        }),
      },
    });
}