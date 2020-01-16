# Input Types

- Just like Types, but only used for Arguments.
- Instead of using the `type` keyword, use the `input` keyword
- `input` and `type`titles can be the same with no problem, but it can be confusing.
- A good convention is to use `PetInput` as a title instead of `Pet`.
- When referencing the inputs, you can use default names in the query. Look at the query Type below.

```javascript
  input PetInput {
      name: String,
      type: String,
  }

  type Query{
      pets(input: PetInput): [Pet]!
  }
```

meanwhile in the resolvers file...

```javascript
module.exports = {
  Query: {
    pets(_, input, ctx){
      return ctx.models.Pet.findMany()
    }
  },
```

input is referenced as the second parameter.

## Next Steps

Review the [transcript](../05-transcripts/09-input-types.txt)  
Move on to notes on [Input Types](02-arguments-input-types-demo.md)
