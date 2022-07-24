import http from "./httpService";
import config from '../config.json'

export function register(user) {
  return http.post(config.apiUrl + 'users', {
      firstName: user.firstname,
      lastName: user.lastname,
      email: user.email,
      phoneNo: user.phoneNo,
      password: user.password
  });
}
