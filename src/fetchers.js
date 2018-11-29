import rp from 'request-promise-native';

const promiseCoins = () => {
  const options = {
    uri: 'https://chasing-coins.com/api/v1/top-coins/20',
    json: true,
  }
  return rp(options).then(obj => Object.values(obj));
};

const getCoinInfo = (symbol) => {
  const options = {
    uri: `https://chasing-coins.com/api/v1/std/coin/${symbol}`,
    json: true,
  }
  return rp(options)
}

const getCoinValue = (symbol, amount) => {
  const options = {
    uri: `https://chasing-coins.com/api/v1/convert/${symbol}/EUR`,
    json: true,
  }
  return rp(options).then((result) => {
    parseInt(result) * amount
  });
}

export { promiseCoins, getCoinInfo, getCoinValue };
