import { api } from "./api";

export const login = (loginData, config) => {
  return api.post('/login', loginData, config).then(({ data }) => {
    const user = data.message;
    console.log(user);
    if (user) return user;
  });
};
