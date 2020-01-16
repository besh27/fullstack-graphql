# Arguments

- Allows clients to pass variables along with Queries that can be in your Resolvers to get data.
- They must be defined in your schema.
  - Arguments must be defined in the schema.js file.
  - Resolvers won't even run if an arg isn't defined because the first step is to validate the query.
  - You can add arguments to ANY field within any query type.

Creating an argument.

- When applying an argument to a Query Type you need to add a Scalar or Input Type.
  - String, Int, Boolean, ID, etc.

Let's create an argument for the Pet Query Type

```javascript
type Query {
    pets(type: String): [pet]!
}

// or a manditory arugument of String and an Int

type Query {
    pets(type: String!, another: Int): [pet]!
}
```

One more Example:

```javascript
type Pet {
    id: ID!
    createdAt: String!
    name: String!
    img(height: String, width: String): String
}

```

In this example we are adding `height` and `width` values to the image property.

## Next Steps

Review the [transcript](../05-transcripts/08-arguments.txt)  
Move on to notes on [Input Types](01-input-types.md)
