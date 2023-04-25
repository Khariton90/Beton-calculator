const TOKEN = 'petrovich-microservices';

export const saveToken = (token: string) => {
  localStorage.setItem(TOKEN, token);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN) ?? "";
}

export const dropToken = () => {
  localStorage.removeItem(TOKEN);
}