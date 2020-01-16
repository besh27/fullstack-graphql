# Further Reading

## Look into ...

- Request level caching
  - graphQL dataloader
  - apollo data-sources
  - both can be used in combination
- In memory caching
- Persistant caching (Redis)
  
## What about concurrency when making requests?
- Does the language allow concurrency?
- Are your data requests dependent on eachother?
- Performance hits. 

Apollo will batch queries for you in one event loop and run them in parallel.  
race conditions may be an issue.  
You can turn off batch features if data 'correctness' is an issue.  

## Links to great open source projects that use GraphQL
- awesome GraphQL
- prisma.io
  - A great typed ORM. 
  - Started off using graphQL
- Hasura
- GraphQL anywhere
- Gatsby
- Cloudflare
- fly.io