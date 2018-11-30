import rp from 'request-promise-native';

const vault = {
  BTC: 0.553,
  XRP: 0.488,
  ETH: 0.234,
  BCH: 0.528,
  XLM: 0.075,
  EOS: 0.946,
  LTC: 0.344,
  USDT: 0.89,
  BSV: 0.462,
  ADA: 0.883,
  TRX: 0.396,
  XMR: 0.025,
  MIOTA: 0.7,
  DASH: 0.07,
  XEM: 0.623,
  BNB: 0.886,
  NEO: 0.324,
  ETC: 0.238,
  ZEC: 0.048,
  BTG: 0.501,
};


const promiseCoins = () => {
  const options = {
    uri: 'https://chasing-coins.com/api/v1/top-coins/20',
    json: true,
  }
  return rp(options)
    .then(coinsObj => Object.values(coinsObj)
      .map(coin => ({ ...coin, amount: vault[coin.symbol] }))
    );
};

const getCoinInfo = ({ symbol, amount }) => {
  const options = {
    uri: `https://chasing-coins.com/api/v1/std/coin/${symbol}`,
    json: true,
  }
  return rp(options).then(coinInfo => ({ ...coinInfo, symbol, amount }));
}

const getCoinValue = (symbol, amount) => {
  const options = {
    uri: `https://chasing-coins.com/api/v1/convert/${symbol}/EUR`,
    json: true,
  }
  return rp(options).then(({ result }) => parseInt(result) * amount);
}

export { promiseCoins, getCoinInfo, getCoinValue };
