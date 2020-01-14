# Creating a graphQL Server

```
const gql = require('require-tag');
const { ApolloServer } = require('apollo-server')

const typeDefs = gql`
    type User {
        email: String!
        avatar: String!
        friends: [User]
    }
    type Query{
        me: User!
    }
`
const resolver = {
    Query: {
        me(){
            return {
                email: 'babyYoda@jedi.com',
                avatar: 'http://yoda.png',
                freinds: []
            }
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen(4000)
    .then(() => console.log('on port 4000'))
```

NOTES:  
Bare minimum:

- Type.
- Query (recommended to just use the keyword "Query");
- Resolver

! required fields.  
example: The friends property is required to have freinds and required for that type to be an array.

---

Run `npm run demo` to open the graphql playground at http://localhost:4000

type in a simple query:

```
{
me {
  email
	}
}

```
result:
```
{
  "data": {
    "me": {
      "email": "babyYoda@jedi.com"
    }
  }
}
```