# Resolvers

## What are they?
Functions that are responsible for returning values for fields that exist on Types in a schema. Resolvers execution is dependent on the incoming client Query. 

## Important things to know
- GraphQL only has ONE endpoint. 
- This is diferent from REST apis that have multiple endpoints.
- GraphQL doesn't respect HTTP
- With this said, if there is an error, a 200 status will be returned. 
- Everything in graphQL is in the response. Possibly add error handling to the response.  
- The part that is dynamic about GQL is the query, which then dictates which resolver is executed. 


## Creating Resolvers

- Resolvers names must match the exact field name of the schema's types. 
- Resolvers must return the value declared for the matching field.
    - Make sure your resolvers respect the schema. 
- Resolvers can be async
- Can retrieve data from any source
    - Completely data source agnostic. Just make sure that it satisfies the shape.

## Schema + Resolvers => Server

To create a server, at minimum, we need a Query Type with a field, and a Resolver for that field. 
This is essensially what is build in our first [Demo file](../../api/src/demos/demo-1.js) 

You can serve almost anything with this model, as long as the resolver data types match schema. 

---

Review the [transcript](../05-transcripts/04-resolvers.txt)  
Move on to notes on [Query Type Exercise](02-query-type-exercise.md)