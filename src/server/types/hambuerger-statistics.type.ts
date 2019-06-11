import { GraphQLObjectType, GraphQLInt } from 'graphql';

export const HambuergerStatisticsType = new GraphQLObjectType({
  name: 'HambuergerStatisticsType',
  fields: () => ({
    clicks: {
      type: GraphQLInt
    }
  })
});
