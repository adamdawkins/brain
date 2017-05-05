export default `
  type Thought {
    id: String!
    name: String!
    children: [Thought]
    parents: [Thought]
    related: [Thought]
  }

  type Query {
    thought(id: String!): Thought!
    anyThought: Thought!
  }

  type Mutation {
    createThought(name: String!): Thought
    linkFamilyThought(parentId: String!, childId: String!): Thought
    createParentThought(childId: String!, name: String!): Thought
    createChildThought(parentId: String!, name: String!): Thought
  }

schema {
  query: Query
  mutation: Mutation
}
`;
