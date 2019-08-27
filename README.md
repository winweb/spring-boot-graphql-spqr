# spring-boot-graphql-sqqr
Rapid development of simple CRUD GraphQL APIs in Java and Spring Boot

## Overview
Read more about [this project](https://medium.com/@iguissouma/rapid-development-of-simple-crud-graphql-apis-in-java-and-spring-boot-bafc4e8d387a) 

## open GUI 
http://localhost:8080/gui

## test case
### case 1
```
{
  cars{
    id,
    name
  }
}
```

### case 2
```
mutation{
  saveCar(car:{name:"New Car"}){
    id,
    name
  }
}
```

### case 3
```
{
  car(id: 1){
    id,
    name,
    isCool,
    giphyUrl
  }
}
```
