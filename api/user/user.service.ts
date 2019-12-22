import { AsyncStorage } from 'react-native';
import Axios from '../axios';

export async function login(
  username: string,
  password: string,
) {
  const { statusCode, data } = await Axios.post('/user/auth', {
    username,
    password, // tslint:disable-line: object-literal-sort-keys
  });

  AsyncStorage.setItem('YEE_GUN_BIMIL_YEE_YA', data.jwt);
  return Math.floor(statusCode / 10) === 20;
}

export async function signup(
  username: string,
  password: string,
  fullName: string,
  email: string,
  phone: string,
  profilePicture: string,
) {
  const { statusCode } = await Axios.put('/user', {
    username,
    password, // tslint:disable-line: object-literal-sort-keys
    fullName,
    email,
    phone,
    profilePicture,
  });

  return Math.floor(statusCode / 10) === 20;
}

export default { login, signup };
