const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type User{
      id: ID!
      username: String!
  }
  type Pet{
      id: String!
      createdAt: String!
      name: String!
      type: String
  }

  input PetInput {
      name: String
      type: String
      id: ID
  }

  type Query {
      pets(input: PetInput): [Pet]!
      pet(input: PetInput): Pet
  }
`;

module.exports = typeDefs
