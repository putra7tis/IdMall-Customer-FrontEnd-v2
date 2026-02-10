import { API_BASE_URL, ENV_NAME } from '@env';

export const Config = {
  apiBaseUrl: API_BASE_URL,
  env: ENV_NAME,
};

console.log("Current Config:", Config);
