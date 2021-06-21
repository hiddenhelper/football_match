import axios from 'axios';

const createAxios = () => {
  const instance = axios.create();
  return instance;
};

export const getMatchData = (url: string) => (createAxios().get(url));

export default getMatchData;
