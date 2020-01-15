# Mutations

## What are GraphQL Mutations?

- A type on a Schema that defines operations clients can perform to mutate data CRUD(create, update, delete)

# Creating a Mutations
- Define mutation Type on Schema using SDL
- Add fields for Mutation type
- Add arguments for Mutation fields
- Create Resolvers for Mutation fields

example:
api/src/schema.js
```

input NewPetInput{
    name: String!
    type: String!
}

type Mutation {
    newDog(input: NewPetInput!): Dog!
}
```

api/src/resolvers
```
Mutation: {
    newPet(_, {input}, ctx){
        pet = ctx.models.Pet.create(input)
        return pet
    }
  }
```
run ```npm run server``` and visit ```localhost:4000```
```
mutation{
  newPet(input: {type: "Dog", name: "Benji"}){
    type
    name
  }
}
```
returns
```
{
  "data": {
    "newPet": {
      "type": "Dog",
      "name": "Benji"
    }
  }
}
```

## Return values fr Mutation fields
- Dependent on your clients and use case
- If using a client side GraphQL cache, you shoud return the exact value Queries return
- We do this because the client side will need that new value to update the cache. 
- When you update something, just return it because the client will have to make additional query to fetch the new data. 
  


---
