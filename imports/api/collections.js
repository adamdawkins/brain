import { Mongo } from 'meteor/mongo';
const Thoughts = new Mongo.Collection('thoughts');
export {
  Thoughts,
};
