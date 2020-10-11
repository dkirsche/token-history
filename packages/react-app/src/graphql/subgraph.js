import { gql } from "apollo-boost";

// See more example queries on https://thegraph.com/explorer/subgraph/paulrberg/create-eth-app

const GET_TRANSFERS = gql`
query Recent
{
  priceHistoryDailies(first: 100, orderBy: timestamp, orderDirection: desc, where: {asset: "0xacd43e627e64355f1861cec6d3a6688b31a6f952"}) {
    pricePerShare
    timestamp
  }
}
`;
/*
const WITH_Variable_Example = gql`
query withVariableExample($epochTime: BigInt!)
{
  priceHistoryDailies(first: 100, orderBy: timestamp, orderDirection: desc, where: {vault: "0xacd43e627e64355f1861cec6d3a6688b31a6f952", timestamp_lt:$epochTime}) {
    getPricePerFullShare
    timestamp
  }
}
`;
*/
export default GET_TRANSFERS;
