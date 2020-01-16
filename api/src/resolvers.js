/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    pets(_, { input }, ctx) {
      return ctx.models.Pet.findMany(input)
    },
    pet(_, { input }, ctx) {
      console.log("Query => pet")
      return ctx.models.Pet.findOne(input)
    },
    user(_, {input}, ctx ){
      return ctx.models.User.findMany(input)
    },
    user(_, {input}, ctx){
      return ctx.models.User.find(input)
    }
  },
  Mutation: {
    newPet(_, { input }, ctx) {
      pet = ctx.models.Pet.create(input)
      return pet
    }
  },
  Pet: {
    owner(pet, __, ctx) {
      console.log('Pet Owner')
      return ctx.models.User.findOne()
    }
  },
  User: {
    pets(user, __, ctx) {
      console.log('Owner of Pets')
      return ctx.models.Pet.findMany()
    }
  }
}
