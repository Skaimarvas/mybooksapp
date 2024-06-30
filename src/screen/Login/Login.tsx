import {zodResolver} from '@hookform/resolvers/zod';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Button, Input} from '@ui-kitten/components';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {ALERT_TYPE, Toast} from 'react-native-alert-notification';
import {z} from 'zod';
import {ScreenParams} from '../../../App';
import {storage} from '../../api/ApiProvider';

const defaultLoginForm = {
  email: '',
  password: '',
};

const formSchema = z.object({
  email: z.string().email({message: 'Invalid email address.'}),
  password: z
    .string()
    .min(6, {message: 'Password must be at least 6 characters long.'}),
});

const {width, height} = Dimensions.get('screen');

const Login = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ScreenParams>>();

  const {control, handleSubmit} = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultLoginForm,
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log('Form Data:', data);
    storage.set('mybookapp:token', JSON.stringify(data));
    Toast.show({
      type: ALERT_TYPE.SUCCESS,
      title: 'Success',
      textBody: 'User has been logged in succesfully',
    });
    navigation.replace('BottomNavigator');
  };

  return (
    <View style={styles.container}>
      <Controller
        name="email"
        control={control}
        render={({field, fieldState}) => (
          <>
            <Text style={styles.labelText}>Email</Text>
            <Input
              style={styles.input}
              placeholder="Email"
              onChangeText={field.onChange}
              onBlur={field.onBlur}
              value={field.value}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {fieldState.error && <Text>{fieldState.error.message}</Text>}
          </>
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({field, fieldState}) => (
          <>
            <Text style={styles.labelText}>Password</Text>
            <Input
              style={styles.input}
              placeholder="Password"
              onChangeText={field.onChange}
              onBlur={field.onBlur}
              value={field.value}
              secureTextEntry
            />
            {fieldState.error && <Text>{fieldState.error.message}</Text>}
          </>
        )}
      />
      <Button onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Log in</Text>
      </Button>
      <Button onPress={() => navigation.replace('SignUp')}>
        <Text style={styles.buttonText}>
          You don't have an account ? Sign up here
        </Text>
      </Button>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    gap: 16,
    padding: 24,
    justifyContent: 'center',
    height,
  },

  input: {
    borderColor: 'black',
  },

  labelText: {
    fontSize: 16,
    color: 'black',
  },

  button: {
    textTransform: 'uppercase',
  },
  buttonText: {
    textTransform: 'uppercase',
  },
});
