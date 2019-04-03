
# josh-graphql-prisma
A node server using graphql and prisma

## Project Setup
Clone the repo

```
cd josh-graphql-prisma
```

```
npm install
```

```
npm install -g prisma
```

Install and run [Docker](https://www.docker.com/)

## Launch Prisma (localhost:4466)
```
npm run startDocker
```

## Launch GraphQL API (localhost:4000)
```
npm start
```

## Project Checklist
#### 1. Prisma as your data modeling tool.
See [datamodel.prisma](https://github.com/jneb28/josh-graphql-prisma/blob/master/datamodel.prisma)
#### 2. Docker-based PostgreSQL, MySQL, or MongoDB as your data store.
See [docker-compose.yml](https://github.com/jneb28/josh-graphql-prisma/blob/master/docker-compose.yml)
#### 3. At least 3 Query resolvers to get data from your server.
See the graphql api [docs](http://localhost:4000/) tab for available queries.
##### Example Query 1:
```
query {
  realms {
    _id
    name
    population {
      _id
    }
  }
}
```
##### Example Query 2:
```
query {
  player(where: {
    _id: ""
  })
  {
    name
    wins
    losses
    race
    realm {
      name
    }
  }
}
```
##### Example Query 3:
```
query {
  players(where: {
    realm: {
      name: "NA"
    }
  })
  {
    _id
    name
  }
}
```
#### 4. At least 2 Mutation resolvers allowing users to create, update, or upsert an item.
See the graphql api [docs](http://localhost:4000/) tab for available mutations.
##### Example Upsert Mutation 1:
```
mutation {
  upsertPlayer(where: {
    _id: ""
  }, 
  create: {
    name: ""
    wins: 0
    losses: 0
    race: ""
    realm: {
      connect: {
        _id: ""
      }
    }
  },
  update: {
    realm: {
      connect: {
        _id: ""
      }
    }
  })
  {
    _id
    name
    wins
    losses
    race
    realm {
      _id
      name
    }
  }
}
```
##### Example Create Mutation 2:
```
mutation {
  createRealm(data: {
    name: ""
  })
  {
    _id
    name
    population {
      _id
      name
    }
  }
}
```
##### Example Update Mutation 3:
```
mutation {
  updateRealm(data: {
    population: {
      connect: {
        _id: ""
      }
    }
  },
  where: {
    _id: ""
  }) 
  {
    _id
    name
    population {
      _id
      name
    }
  }
}
```
#### 5. At least 1 Mutation resolver allowing users to delete an item.
See the graphql api [docs](http://localhost:4000/) tab for available delete mutations.
##### Example Delete Mutation:
```
mutation {
  deletePlayer(where: {
    _id: ""
  })
  {
    name
  }
}
```
#### 6. Your datastore will contain at least 25 items
See the prisma [docs](http://localhost:4466/) tab for available datastore queries.
##### Example Aggregate Query:
```
query {
  playersConnection {
    aggregate {
      count
    }
  }
}
```
#### 7. Your app will be deployable locally using Docker and will have seed data entered into the datastore.
See [docker-compose.yml](https://github.com/jneb28/josh-graphql-prisma/blob/master/docker-compose.yml)
#### 8. All of your source code will be properly uploaded to GitHub
See [github](https://github.com/jneb28/josh-graphql-prisma)
#### 9. Your ReadMe file will accurately describe your server install and run process and how to use the APIs
See [ReadMe](https://github.com/jneb28/josh-graphql-prisma/blob/master/README.md)