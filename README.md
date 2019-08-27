# spring-boot-graphql-spqr
Rapid development of simple CRUD GraphQL APIs in Java and Spring Boot

## Overview
Read more about [this project](https://medium.com/@iguissouma/rapid-development-of-simple-crud-graphql-apis-in-java-and-spring-boot-bafc4e8d387a) 

## open GUI 
http://localhost:8080/gui

## test case
### case 1 when you want find all cars.
```
{
  cars{
    id,
    name
  }
}
```

### case 2 when you want save new car.
```
mutation{
  saveCar(car:{name:"New Car"}){
    id,
    name
  }
}
```
### case 3 when you want update some car.
```
mutation{
  saveCar(car:{id: 9,name:"New Car"}){
    id,
    name
  }
}
```

### case 4 when you want inquiry some car.
```
{
  car(id: 9){
    id,
    name,
    isCool,
    giphyUrl
  }
}
```
