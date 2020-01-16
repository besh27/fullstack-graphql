# Unions

- Like interfaces, unions are abstract types, but without any defined common fields amongst the Types.  
- Usefule when you need to access more than one disjoint Type from one Query, like a search. 
- A usecase for this is a site search. 

schema.js
```javascript
union AnimalKingdom = HousePet | WildAnimal
```
A resolver must be set up to resolve the data. 

resolver.js
```javascript
AnimalKingdom: {
    __resolveType(pet) {
      if (pet.furryness) {
        return 'HousePet'
      } else { return 'WildAnimal' }
    }
  }
```

GraphQL Playground
```javascript

Animal {
    ... on WildAnimal{
        clawSize
    }
    ... on HousePet {
        furryness
    }
}
```
- Like an interface we can use ```...``` when querying each type in the union. 
- Unlike an interface, there won't be any common fields, ```...``` would only be used. 
- We use unions to replace Schalars so that we have a larger result set. 


- Add new feilds on Types that reference other Types
- Create resolvers for field Types that point to Types

## Next Steps

Review the [Transcript](../05-transcripts/18-unions.txt)
Move on to the next section about [Relationships](../03-relationships.md)