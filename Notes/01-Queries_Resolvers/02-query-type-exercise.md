# Query Type and Resolvers Excercise

## Let's build some Query Types and Resolvers!

Let's look at our Repo.

- Everything we need is in the API and Client directories.
- This excercise will be localized within the api/scr folder
- There are three important files for our work in GraphQL:

  - resolvers.js
  - schema.js
  - server.js

- There is a simple in memory database directory (/db)

## What are we doing?

- Define a Query Type in your Schema
  - All this work will be in the schema.js file.
  - Look inside the db/schema.js file for the needed shapes of the data.
  - need to define pet and user types
- Define fields on yor Query Type
  - Create a query type to retrieve an array of pets.
- Create some resolvers based on the Query Types
  - All this work will be in the resolvers.js file.
- Last, we need to get the server up and running.
  - in server.js, the ApolloServer is currently not taking any arguments.
  - type defs and resolvers need to be passed in as arguments.

Let's go to the schema.js file and build out some Query Types.

```javascript
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
      id: ID!
      createdAt: string!
      name: String!
      type: String!
  }
  type Query {
      pets: [Pet]!
  }
`;

module.exports = typeDefs
```

- This is build around the types found in the /db/schema.json file.
- Important note, these types don't have to be one-for-one.
  - GraphQL can have additional 'virtual' fields that aren't in the db.
  - These are fields that represent a combination of fields.
- You can download a custom schollar for timetimes for the createdAt field.

Next, we start let's look into the work within the resolvers.js file.

```javascript
module.exports = {
    Query: {
       demo(_, __,  ){

       }
    }
}

```

Notes:

- the first argument in the demo resolver is called the 'initial value'
- The value is an underscore, this is called a tope level resolver.
- This means nothing will be resolved before anything else. This is like the parent value we may need before other data is resolved.
- The second argument is just going to be a placeholder to have dynamic args sent in for pagination, sortings, etc.
- The last argument is the 'Context Object' which is shared context amongst all the resolvers.

### Using the Context Object

in the server.js file...

```javascript
...
const {models, db} = require('./db')

const server = new ApolloServer({
    context(){
        return { models// THIS IS THE CONTEXT, so we added the models from the db }
    }
})
```

Next let's pass that context object to the resolver.

```javascript
module.exports = {
  Query: {
    pets(_, __, ctx){
      return ctx.models.Pet.findMany()
    }
  },
```

### Why don't we simply import the model context?

- When you get to testing the context can be mocked easier by simply overriding the arguments.
- By importing, you have to rely on the testing framework to mock that context object, which can get complicated.
- A good practice is not using import statements within resolver files

run `npm run server` and then visit `localhost:4000` to access the GraphQL playground.

```javascript
{
    pets {
        id
        name
    }
}
```

will return ...

This is because we currently don't have any pets yet.
We need to specify the fields we want in the pet object or we will recieve an error. Always specify the fields within the object that is being queried.

```javascript
{
  "data": {
    "pets": []
  }
}
```

---

Review the [transcript](../05-transcripts/05-query-types-exercise.txt)  
Review the [Solution transcript](../05-transcripts/06-query-types-solution.txt)
Move on to the next section about [Arguments & Input Types](../02-Arguments-and-input-types/00-arguments.md)
