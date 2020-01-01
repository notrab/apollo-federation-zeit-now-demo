- Based on https://github.com/apollographql/federation-demo
- Works with Zeit Now

* Run `now dev`
* Go to http://localhost:3000/api

Run example query:

```graphql
{
  topProducts {
    upc
    name
    price
    reviews {
      author {
        username
        name
      }
    }
  }
}
```
