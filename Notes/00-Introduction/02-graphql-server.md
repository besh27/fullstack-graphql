# Creating a graphQL Server

```javascript
const gql = require("require-tag");
const { ApolloServer } = require("apollo-server");

const typeDefs = gql`
  type User {
    email: String!
    avatar: String!
    friends: [User]
  }
  type Query {
    me: User!
  }
`;
const resolver = {
  Query: {
    me() {
      return {
        email: "babyYoda@jedi.com",
        avatar: "http://yoda.png",
        freinds: []
      };
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen(4000).then(() => console.log("on port 4000"));
```

NOTES:  
Bare minimum:

- Type.
- Query (recommended to just use the keyword "Query");
- Resolver

! means that field cannot be null. Thus it's a required field. GraphQL will throw an exception if null.
example: The friends property is required to have freinds and required for that type to be an array.

---

Run `npm run demo` to open the GraphQL playground at http://localhost:4000

type in a simple query:

```javascript
{
me {
  email
	}
}

```

result:

```javascript
{
  "data": {
    "me": {
      "email": "babyYoda@jedi.com"
    }
  }
}
```

## Next Steps

Review the [transcript](../05-transcripts/02-graphql-server.txt)  
Awesome! Let's Move on to the next section about [Queries & Resolvers](../01-Queries_Resolvers/00-query-types.md)
