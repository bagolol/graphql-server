import rp from 'request-promise-native';

const promiseCoins = () => {
  const options = {
    uri: 'https://chasing-coins.com/api/v1/top-coins/20',
    json: true,
  }
  return rp(options).then(obj => Object.values(obj));
};

export { promiseCoins };
