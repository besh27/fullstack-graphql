# Interfaces

- Abstract Types that can't be used as field values but instead used as foundations for explicit Types.
- Great for when you have Types that share common fields, but differ slightly. 
- This isn't for brevity purposes on the server side, but for the client side when querying data. 

schema.js
```
interface Animal{
    type: String!
    name: String!
}

type HousePet implements Animal{
    type: String!
    name: String!
    furryness: Number
}

type WildAnimal implements Animal{
    type: String!
    name: String!
    clawSize: Number
}

```
As you can see, all the fields still need to be in written on the server side, but
If we try to run this we will get an error bout missing a "__resolveType"
Why? Because we can't simply resolve to the Animal interface as it is simply an abstract type. We need to specify one of it's implemented types; either HousePet or WildAnimal in the resolver.js file.

resolvers.js
Use a simple if statement to see if a property is present, if so it's a 'HousePet', else 'WildAnimal'
```
Animal: {
    __resolveType(animal){
        if(animal.furryness) retun 'HousePet'
        return 'WildAnimal'
    }
}
```
in the playground
```

Animal {
    type
    name
    ... on WildAnimal{
        clawSize
    }
    ... on HousePet {
        furryness
    }
}
```
- We use the ```...``` on type that implements the Animal interface to retrieve specific data. 
- This way we only have to query Animal, not Animal, WildAnimal & HousePet. 
- Interfaces were created not to avoid writing the same code again, they were created to not write the same queries again. 

---
Review the [Transcript](../05-transcripts/17-interfaces.txt)
Move on to the next section about [Unions](../04-Advanced-SDL/02-unions.md)