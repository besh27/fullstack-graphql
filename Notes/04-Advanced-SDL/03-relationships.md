# Relationships

## Thinking in Graphs

- In the data we are querying, there are no relationships by default.
- GraphQL enables us to virtualize relationships between the data.
- This is essensially the 'graph' in GraphQL

Your API is no longer a predefined list of operations that always return the same shapes. Instead, your API is a set of Nodes that know how to resolve themselves and have links to other Nodes. This allows a client to ask for Nodes and then follow those links to get related Nodes.

This differs from a REST approach where you would have pre-defined routes, with specific verbs, parameters and query strings. With GraphQL, the server serves the data nodes and the relationships. The rest is up to how the client wants to retrieve or use that data.

## Adding Relationships

- Add a Type as a field value on another Type
- Create resolvers for those fields on the Type

schema.js

```javascript
type User {
    email: String!
    name: String!
    pets: [Pet]!
}

// or

type Pet {
    type: String!
    name: String!
    owner: User!
}
```
Note:
- Any field level data that doesn't resolve must have a resolver made specifically for it to resolve. 
- In this case, we need to make a resolver for both the user -> pets relationship. 
- We also need to make a field level resolver for the Pet -> user relationship. 

Review the [Transcript](../05-transcripts/19-relationships.txt)
Move on to the next section about [Authentication](04-authentication.md)