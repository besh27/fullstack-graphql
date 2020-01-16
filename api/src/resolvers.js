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
      return ctx.models.Pet.findOne(input)
    }
  },
  Mutation: {
    newPet(_, { input }, ctx) {
      pet = ctx.models.Pet.create(input)
      return pet
    }
  },
  Pet: {
    __resolveType(pet) {
      if (pet.furryness) {
        return 'HousePet'
      } else { return 'WildAnimal' }
    }
  }

  // Mutation: {

  // },
  // Pet: {
  //   img(pet) {
  //     return pet.type === 'DOG'
  //       ? 'https://placedog.net/300/300'
  //       : 'http://placekitten.com/300/300'
  //   }
  // },
  // User: {

  // }
}
