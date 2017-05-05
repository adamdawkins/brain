import { Thoughts } from '/imports/api/collections';
import { Random } from 'meteor/random';
export default {
  Mutation: {
    createThought(_, { name }) {
      const id = Random.id();
      Thoughts.insert({
        id,
        _id: id,
        name,
      })

      return Thoughts.findOne({ id });
    },
    linkFamilyThought(_, { parentId, childId }) {
      Thoughts.update({
        id: childId,
      }, {
        $addToSet: {
          parentIds: parentId,
        }
      });

      Thoughts.update({
        id: parentId
      }, {
        $addToSet: {
          childIds: childId,
        }
      });
    },
    createParentThought(_, { childId, name }) {
      const parentId = Random.id();
      Thoughts.insert({
        id: parentId,
        _id: parentId,
        name,
        childIds: [ childId ],
      });

      Thoughts.update({
        id: childId,
      }, {
        $addToSet: {
          parentIds: parentId,
        }
      });

      return Thoughts.findOne({id: childId});
    },
    createChildThought(_, { parentId, name }) {
      const childId = Random.id();
      Thoughts.insert({
        id: childId,
        _id: childId,
        name,
        parentIds: [ parentId ],
      });

      Thoughts.update({
        id: parentId,
      }, {
        $addToSet: {
          childIds: parentId,
        }
      });

      return Thoughts.findOne({id: childId});
    },
  },
  Query: {
    thought(_, { id }) {
      return Thoughts.findOne({ id });
    },
    anyThought() {
      const thoughtIds = Thoughts.find({}, {fields: { _id:1}}).fetch().map((thought) => thought._id)
      console.log({thoughtIds});
      const id = Random.choice(thoughtIds);
      
      return Thoughts.findOne(id);

    }
  },
  Thought: {
    parents({ parentIds }, _) {
      let thoughts = [];
      if (typeof parentIds !== 'undefined' && parentIds.length > 0) {
        thoughts = Thoughts.find({id: { $in: parentIds } }).fetch();
      }

      return thoughts;
    },
    children({ childIds }, _) {
      let thoughts = [];
      if (typeof childIds !== 'undefined' && childIds.length > 0) {
        thoughts = Thoughts.find({id: { $in: childIds } }).fetch();
      }

      return thoughts;
    },
    related() {
      return [];
    }
  }

}
