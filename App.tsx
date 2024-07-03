import * as eva from '@eva-design/eva';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ApplicationProvider} from '@ui-kitten/components';
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {default as mapping} from './mapping.json';
import {default as theme} from './custom-theme.json';
import {AlertNotificationRoot} from 'react-native-alert-notification';

//Assets
import HomePng from './src/assets/home.png';
import ProfilePng from './src/assets/profile.png';
import Reading from './src/assets/reading.png';

//Pages
import BookDetails from './src/screen/BookDetails/BookDetails';
import Homepage from './src/screen/Home/HomePage';
import Login from './src/screen/Login/Login';
import SignUp from './src/screen/SignUp/SignUp';
import TopBooks from './src/screen/TopBooks/TopBooks';
import Welcome from './src/screen/Welcome/Welcome';
import Colors from './src/constants/Colors';
import BookList from './src/screen/Home/BookList';

/** Notes(backBehavior): 
     * In a React Native app using React Navigation, the backBehavior prop is used to configure the behavior of the back button in a tab navigator.

In this specific case, backBehavior="firstRoute" means that when the user presses the back button on Android, it will behave as if they pressed the back button on the first tab/screen of the navigator, effectively navigating back to the initial screen in the stack instead of exiting the app or navigating back through the entire navigation stack.

This behavior can be useful in scenarios where you want to control how the back button behaves within your app's navigation flow, ensuring a consistent user experience.
     */

/** Notes(RNS Error)
 *  Could be about not installing react-native-screen and react-native-safe-area-context
 */

export type ScreenParams = {
  Home: any;
  Homepage: any;
  TopHeader: any;
  BookList: any;
  BookDetails: any;

  TopBooksPage: any;
  TopBooks: any;

  AudioBooks: any;

  SavedBooks: any;

  Profile: any;
  Login: any;
  Welcome: any;
  SignUp: any;

  BottomNavigator: any;
};

const Screen = createNativeStackNavigator<ScreenParams>();

const BottomTabs = createBottomTabNavigator<ScreenParams>();

const HomePageNavigator = () => {
  return (
    <Screen.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen.Screen name="Homepage" component={Homepage} />
    </Screen.Navigator>
  );
};

const TopBooksNavigator = () => {
  return (
    <Screen.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen.Screen name="TopBooks" component={TopBooks} />
    </Screen.Navigator>
  );
};
const ProfileNavigator = () => {
  return (
    <Screen.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen.Screen name="Homepage" component={Homepage} />
    </Screen.Navigator>
  );
};

const BottomNavigator = () => {
  return (
    <BottomTabs.Navigator
      backBehavior="firstRoute"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: '#ffffff',
          elevation: 5,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}>
      <BottomTabs.Screen
        name="Home"
        component={HomePageNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={[
                {
                  backgroundColor: focused ? '#4D4D4D' : '#FFFFFF',
                },
                styles.tabBarIcon,
              ]}
              source={HomePng}
            />
          ),
          tabBarActiveBackgroundColor: '#4D4D4D',
        }}
      />

      <BottomTabs.Screen
        name="SavedBooks"
        component={HomePageNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={[
                {
                  backgroundColor: focused ? '#4D4D4D' : '#FFFFFF',
                },
                styles.tabBarIcon,
              ]}
              source={Reading}
            />
          ),
          tabBarActiveBackgroundColor: '#4D4D4D',
        }}
      />

      <BottomTabs.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={[
                {
                  backgroundColor: focused ? '#4D4D4D' : '#FFFFFF',
                },
                styles.tabBarIcon,
              ]}
              source={ProfilePng}
            />
          ),
          tabBarActiveBackgroundColor: '#4D4D4D',
        }}
      />
    </BottomTabs.Navigator>
  );
};

const IColors = {
  label: Colors.regular.grey,
  card: Colors.regular.white,
  overlay: Colors.regular.white,
  success: Colors.regular.green,
  danger: Colors.regular.red,
  warning: Colors.regular.orange,
  info: Colors.regular.blue,
};

const App: React.FC = () => {
  return (
    <AlertNotificationRoot colors={[IColors, IColors]}>
      <ApplicationProvider
        {...eva}
        customMapping={mapping as any}
        theme={{...eva.light, ...theme}}>
        <NavigationContainer>
          <Screen.Navigator
            initialRouteName="Welcome"
            screenOptions={{
              headerShown: false,
            }}>
            <Screen.Screen name="Login" component={Login} />
            <Screen.Screen name="SignUp" component={SignUp} />
            <Screen.Screen name="Welcome" component={Welcome} />
            <Screen.Screen name="BottomNavigator" component={BottomNavigator} />
            <Screen.Screen name="BookDetails" component={BookDetails} />
            <Screen.Screen name="BookList" component={BookList} />
          </Screen.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </AlertNotificationRoot>
  );
};

const styles = StyleSheet.create({
  sectionDescription: {},
  sectionTitle: {},
  sectionContainer: {},
  tabBarIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

export default App;
