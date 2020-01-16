const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
    type User{
        id: ID!
        username: String!
    }

    interface Pet{
        id: String!
        createdAt: String!
        name: String!
        type: PetType!
    }
    type HousePet implements Pet{
        id: String!
        createdAt: String!
        name: String!
        type: PetType!
        furryness: Int
    }
    type WildAnimal implements Pet{
        id: String!
        createdAt: String!
        name: String!
        type: PetType!
        teethSize: Int
    }

"""
There are more Pet Types coming, but currently there are only 4. 
"""
    enum PetType {
        Dog
        Cat
        Mouse
        Gerble
    }

    input PetInput {
        name: String
        type: PetType!
        id: ID
    }

    input mtPetInput{
        name: String!
        type: PetType
    }

    type Query {
        pets(input: PetInput): [Pet]!
        pet(input: PetInput): Pet
    }

    type Mutation {
        newPet(input: mtPetInput!): Pet!
    }
`;

module.exports = typeDefs
