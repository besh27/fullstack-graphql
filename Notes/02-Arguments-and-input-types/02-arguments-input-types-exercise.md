# Arguments & Input Types Exercise

- Create input Types for Query arguments
- Add arguments for your Queries
- Use arguments in your Query field resolvers to filter data

go back to the schema.js file

- add an input for the pets query that allows a user to filter by pet type.
- create a second query for one single pet by name or ID.

See the api/src director for the results.

schema.js

```javascript
const { gql } = require("apollo-server");

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type User {
    id: ID!
    username: String!
  }
  type Pet {
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

module.exports = typeDefs;
```

resolvers.js

```javascript

module.exports = {
  Query: {
    pets(_, { input }, ctx) {
      return ctx.models.Pet.findMany(input)
    },
    pet(_, { input }, ctx) {
      return ctx.models.Pet.findOne(input)
    }
  },
```

run `npm run server` and visitor `localhost:4000`

```javascript
{
    pets(input: {type: "Dog"}) {
      type
      name
      id
    }
}
```

returns

```javascript
{
  "data": {
    "pets": [
      {
        "type": "Dog",
        "name": "Ollie",
        "id": "1"
      },
      {
        "type": "Dog",
        "name": "Daryl",
        "id": "2"
      },
      {
        "type": "Dog",
        "name": "Molly",
        "id": "3"
      }
    ]
  }
}
```

The pet query type:

```javascript
{
    pet(input: {name: "Molly", type: "Cat"}) {
      type
      name
      id
    }
}
```

returns

```javascript
{
  "data": {
    "pet": {
      "type": "Cat",
      "name": "Molly",
      "id": "5"
    }
  }
}
```

## Next Steps
Review the [Exercise transcript](../05-transcripts/10-arguments-input-types-exercise.txt)  
Review the [Solution transcript](../05-transcripts/10-arguments-input-types-solutiontxt)  
Move on to the next section about [Mutations](../03-Mutations/00-mutation-types.md)
