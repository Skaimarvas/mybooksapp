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

const defaultSignUpForm = {
  firstname: '',
  lastname: '',
  username: '',
  email: '',
  password: '',
};

const nameSchema = z
  .string()
  .min(2, {message: 'Must contain at least 2 characters.'})
  .max(20, {message: 'Must not exceed 20 characters.'});

const passwordSchema = z
  .string()
  .min(6, {message: 'Password must be at least 6 characters long.'})
  .regex(/[A-Z]/, {
    message: 'Password must contain at least one uppercase letter.',
  })
  .regex(/[a-z]/, {
    message: 'Password must contain at least one lowercase letter.',
  })
  .regex(/\d/, {message: 'Password must contain at least one number.'})
  .regex(/[^A-Za-z0-9]/, {
    message: 'Password must contain at least one special character.',
  });

const formSchema = z.object({
  firstname: nameSchema,
  lastname: nameSchema,
  username: nameSchema,
  email: z.string().email({message: 'Invalid email address.'}),
  password: passwordSchema,
});

const {width, height} = Dimensions.get('screen');

const SignUp = () => {
  const {control, handleSubmit} = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultSignUpForm,
  });

  const navigation = useNavigation<NativeStackNavigationProp<ScreenParams>>();

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log('Form Data:', data);
    Toast.show({
      type: ALERT_TYPE.SUCCESS,
      title: 'Success',
      textBody: 'User has been registered succesfully',
    });
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <Controller
        name="firstname"
        control={control}
        render={({field, fieldState}) => (
          <>
            <Text style={styles.labelText}>First Name</Text>
            <Input
              style={styles.input}
              placeholder="First Name"
              onChangeText={field.onChange}
              onBlur={field.onBlur}
              value={field.value}
            />

            {fieldState.error && <Text>{fieldState.error.message}</Text>}
          </>
        )}
      />
      <Controller
        name="lastname"
        control={control}
        render={({field, fieldState}) => (
          <>
            <Text style={styles.labelText}>Last Name</Text>
            <Input
              style={styles.input}
              placeholder="Last Name"
              onChangeText={field.onChange}
              onBlur={field.onBlur}
              value={field.value}
            />
            {fieldState.error && <Text>{fieldState.error.message}</Text>}
          </>
        )}
      />
      <Controller
        name="username"
        control={control}
        render={({field, fieldState}) => (
          <>
            <Text style={styles.labelText}>Username</Text>
            <Input
              style={styles.input}
              placeholder="Username"
              onChangeText={field.onChange}
              onBlur={field.onBlur}
              value={field.value}
            />
            {fieldState.error && <Text>{fieldState.error.message}</Text>}
          </>
        )}
      />
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
      <Button style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Register</Text>
      </Button>
      <Button onPress={() => navigation.replace('Login')}>
        <Text style={styles.buttonText}>
          If you have already account, login here!
        </Text>
      </Button>
    </View>
  );
};

export default SignUp;

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
