import React, {useEffect} from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ScreenParams} from '../../../App';
import {storage} from '../../api/ApiProvider';
import welcome from '../../assets/welcomeblack.png';

/**
 * In the context of React Navigation, particularly in React Native, the `reset` method is used to reset the navigation state of a navigator to a new state. This method is useful for scenarios where you need to replace the current stack of screens with a new set of screens, typically after a significant event such as user login or logout.

Here's a breakdown of the parameters and their purpose in the provided code snippet:

### `navigation.reset` Method

```javascript
navigation.reset({
  index: 0,
  routes: [{ name: 'Home' }],
});
```

1. **`reset` Method**:
   - This method resets the navigation state to the new state defined in its parameters. It is often used when you want to clear the current stack of screens and set a new stack from scratch.

2. **`index` Parameter**:
   - The `index` determines which route in the new state will be active (focused) after the reset. In this case, `index: 0` means that the first route (at position 0) in the `routes` array will be the active screen.
   - This is particularly useful when you have multiple routes and you want to specify which one should be shown first after the reset. Here, setting `index: 0` means that after the reset, the `Home` screen will be displayed.

3. **`routes` Parameter**:
   - The `routes` array specifies the new stack of routes (screens) that will replace the current stack. Each element in the array represents a route object.
   - In this example, the `routes` array contains a single route object `{ name: 'Home' }`, which means the new navigation state will only have the `Home` screen.
   - The `name` property in each route object specifies the name of the route (screen) you want to navigate to. This name should correspond to the name you used when defining your screens in the navigator.

### Practical Example

Consider a scenario where you want to navigate to the `Home` screen and remove all previous screens from the stack after a user logs in. Using the `reset` method like the example above will ensure that the `Home` screen is the only screen in the navigation stack, and it will be the active screen.

### Detailed Steps of What Happens:

1. **Clear the Stack**: The current navigation stack is completely cleared.
2. **Set New Routes**: The navigation state is set to the new routes provided in the `routes` array.
3. **Activate a Route**: The route specified by the `index` parameter in the new state becomes the active route.

### Use Cases for `reset`

- **Login/Logout**: After a user logs in or out, you might want to reset the navigation stack to start at the main application screen (`Home`) or the login screen.
- **Form Submission**: After successfully submitting a multi-step form, you might reset the navigation to go back to a dashboard or summary screen, removing the form steps from the stack.
- **Navigation Flow Control**: In some flows where certain screens should not be navigable once the user progresses (like after onboarding), resetting the stack helps in managing the flow.

### Summary

The `navigation.reset` method is a powerful tool in React Navigation that allows for complete control over the navigation stack, enabling scenarios where you need to ensure a clean start in navigation state, like post-authentication flows or after completing a significant process. The `index` and `routes` parameters allow you to specify exactly which screen should be shown and what the new stack should look like.


 */

const {width, height} = Dimensions.get('window');

const Welcome = () => {
  const token = storage.getString('mybookapp:token');
  const navigation = useNavigation<NativeStackNavigationProp<ScreenParams>>();

  useEffect(() => {
    setTimeout(() => {
      if (token) {
        navigation.reset({
          index: 0,
          routes: [{name: 'BottomNavigator'}],
        });
      } else {
        navigation.reset({
          index: 0,
          routes: [{name: 'Login'}],
        });
      }
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.welcome} source={welcome} />
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    width,
    height,
  },
});
