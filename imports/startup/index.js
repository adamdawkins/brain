import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  import apolloServer from './apollo_server';
});
