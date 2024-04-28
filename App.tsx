import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Assets
import HomePng from './src/assets/home.png';
import TopBooksPng from './src/assets/topbooks.png';
import AudioBooksPng from './src/assets/audiobooks.png';
import SavedBooksPng from './src/assets/savedbooks.png';
import ProfilePng from './src/assets/profile.png';

//Pages
import Home from './src/screen/Home/HomePage';
import BookDetails from './src/screen/BookDetails/BookDetails';

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
  HomePage: any;
  TopHeader: any;
  BookList: any;
  BookDetails: any;

  TopBooks: any;

  AudioBooks: any;

  SavedBooks: any;

  Profile: any;

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
      <Screen.Screen name="Home" component={Home} />
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
        name="HomePage"
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
        name="TopBooks"
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
              source={TopBooksPng}
            />
          ),
          tabBarActiveBackgroundColor: '#4D4D4D',
        }}
      />

      <BottomTabs.Screen
        name="AudioBooks"
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
              source={AudioBooksPng}
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
              source={SavedBooksPng}
            />
          ),
          tabBarActiveBackgroundColor: '#4D4D4D',
        }}
      />

      <BottomTabs.Screen
        name="Profile"
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
              source={ProfilePng}
            />
          ),
          tabBarActiveBackgroundColor: '#4D4D4D',
        }}
      />
    </BottomTabs.Navigator>
  );
};

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Screen.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Screen.Screen name="BottomNavigator" component={BottomNavigator} />
        <Screen.Screen name="BookDetails" component={BookDetails} />
      </Screen.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionDescription: {},
  sectionTitle: {},
  sectionContainer: {},
  tabBarIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default App;
