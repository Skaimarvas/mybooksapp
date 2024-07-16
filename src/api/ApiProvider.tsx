import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import axios from 'axios';
import React, {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {MMKV} from 'react-native-mmkv';
import {ScreenParams} from '../../App';

export const storage = new MMKV();

export const BASE_URL = 'http://192.168.1.1:3001';

axios.defaults.timeout = 10000;

axios.defaults.baseURL = BASE_URL;

interface Iprops {
  children: any;
}

const ApiProvider: React.FC<Iprops> = ({children}) => {
  const navigation = useNavigation<
    NativeStackNavigationProp<ScreenParams> | any
  >();

  useMemo(() => {
    axios.interceptors.request.use(
      async (config: any) => {
        const token = storage.getString('mybookapp:token');
        axios.defaults.headers.common['Accept-Language'] = 'tr';
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
      },
      async (error: any) => {
        return Promise.reject(error);
      },
    );
    axios.interceptors.response.use(
      async (response: any) => {
        if (response.data?.token) {
          storage.set('mybookapp:token', response?.data?.token);
        }
        return response;
      },
      (error: any) => {
        const statusCode = error.response ? error.response.status : null;
        const detailMessage = error.response;

        switch (statusCode) {
          default:
            return detailMessage;
        }
      },
    );
  }, []);

  return children;
};

export default ApiProvider;

const styles = StyleSheet.create({});
