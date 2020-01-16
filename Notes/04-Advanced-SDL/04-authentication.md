# Authentication

## The Simpliest Approach

Authention can happen at the server level. 

server.js
```javascript
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context() {
   // const auth = req.headers.authentication
    throw new Error('Not Auth');
    
    const user = db.get('user').value()
    return {models, db, user}
  }
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
})
```

## Authentication over single Services
https://www.apollographql.com/docs/apollo-server/data/data-sources/

## Next Steps
Review the [Transcript](../05-transcripts/26-authentication.txt)
Move on to the next section about [Authentication](05-further-reading.md)