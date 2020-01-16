const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
    type User{
        id: ID!
        username: String!
        pets: [Pet]!
    }

    type Pet{
        id: String!
        createdAt: String!
        name: String!
        image: String!
        type: PetType!
        owner: User!
    }

    # interface Pet{
    #     id: String!
    #     createdAt: String!
    #     name: String!
    #     type: PetType!
    #     owner: User!
    # }

    # type HousePet implements Pet{
    #     id: String!
    #     createdAt: String!
    #     name: String!
    #     type: PetType!
    #     owner: User!
    #     furryness: Int
    # }

    # type WildAnimal implements Pet{
    #     id: String!
    #     createdAt: String!
    #     name: String!
    #     type: PetType!
    #     owner: User!
    #     teethSize: Int
    # }

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
    input UserInput {
        id: ID
        username: String
        pets: String
    }

    input mtPetInput{
        name: String!
        type: PetType
    }

    type Query {
        pets(input: PetInput): [Pet]!
        pet(input: PetInput): Pet
        users(input: UserInput): [User]!
        user(input: UserInput): User
        owner: User!
    }

    type Mutation {
        newPet(input: mtPetInput!): Pet!
    }
`;

module.exports = typeDefs
