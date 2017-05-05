import { createApolloServer } from 'meteor/apollo';
import typeDefs from '/imports/api/schema';
import resolvers from '/imports/api/resolvers';
import { makeExecutableSchema } from 'graphql-tools';

const schema = makeExecutableSchema({ typeDefs, resolvers });
createApolloServer({ schema });
