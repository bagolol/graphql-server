import { promiseCoins } from './fetchers';

const typeDefs = `
type Query {
  coins: [Coin]
}

type Coin {
  symbol: String,
  cap: String
}
`

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    coins: () => promiseCoins(),
  },
  Coin: {
    symbol: (root) => root.symbol,
    cap: (root) => root.cap,
  }
}

export { typeDefs, resolvers };

