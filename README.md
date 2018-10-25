# TypeScript-Micro-Service


## Installing 

- `https://github.com/meligys/typescript-micro-service.git`
- `cd typescript-micro-service`
- `npm install`


## Building

- `tsc`

The build will create a folder `lib/` containing the javascript compiled code.


## Run the project

`npm start`


## Architecture

The project is composed of 4 layers :

 - `routes`
 - `interfaces`
 - `domains`
 - `tests`

The architecture is designed to allow `separation of concerns`, to have greater `code quality`. It also makes easier to do `unit tests`.

### Exposing resources
    
The layers `routes` is responsible for exposing web services. This is the entry point of the project. It's comparable to a controller.

In this layers, there shouldn't be any logical code. There can be class converts/mapping but no data transformation.
Having `routes` abstracts the access to resources. Now we use a `RestFull` service but it can be easily replaced and the other 3 layers wouldn't have any impact.

### Interfaces
This is a `Typescript` feature where we can define types for our variables. 

### Domain
This layer used to handle only business work. The classes in `domain` process business logic. The code in this layer should cover as much as possible of `unit-tests`. As we have no context, public methods in domain classes should be declared as `static`.

### Tests
We use `mocha` for `unit tests` and `chai` as assertion library.
