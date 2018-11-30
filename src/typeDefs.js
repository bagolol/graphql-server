import {
  promiseCoins,
  getCoinValue,
  getCoinInfo
} from './fetchers';

const typeDefs = `
type Query {
  coins: [Coin]
}
type CoinInfo {
  price: String
  coinheat: Int
  amountInPounds: Float
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
    coinInfo: (parent) => getCoinInfo(parent)
  },
  CoinInfo: {
    amountInPounds: ({ symbol, amount }) => getCoinValue(symbol, amount)
  }
}

export { typeDefs, resolvers };

