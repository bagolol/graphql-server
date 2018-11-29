import {
  promiseCoins,
  getCoinValue,
  getCoinInfo
} from './fetchers';

const vault = {
  BTC: 0.55354996,
  XRP: 0.4880728391,
  ETH: 0.2341394760,
  BCH: 0.5286716764,
  XLM: 0.0758702173,
  EOS: 0.9464430211,
  LTC: 0.3445457100,
  USDT: 0.899024804,
  BSV: 0.4624739863,
  ADA: 0.8833145466,
  TRX: 0.3962778871,
  XMR: 0.0255185535,
  MIOTA: 0.76895031,
  DASH: 0.073539604,
  XEM: 0.6239409655,
  BNB: 0.8865389592,
  NEO: 0.3248120400,
  ETC: 0.2381571768,
  ZEC: 0.0488353336,
  BTG: 0.5016146754,
};

const typeDefs = `
type Query {
  coins: [Coin]
}
type CoinInfo {
  price: String
  coinheat: Int
  amountInPounds: Int
}
type Coin {
  amount: Float
  symbol: String
  cap: String
  coinInfo: CoinInfo
}
`

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    coins: () => promiseCoins(),
  },
  Coin: {
    amount: ({symbol}) => vault[symbol],
    symbol: ({symbol}) => symbol,
    cap: ({cap}) => cap,
    coinInfo: ({symbol}) => getCoinInfo(symbol)
  },
  CoinInfo: {
    price: ({price}) => price,
    coinheat: ({coinheat}) => coinheat,
    amountInPounds: ({ symbol, amount }) => getCoinValue(symbol, amount)
  }
}

export { typeDefs, resolvers };

