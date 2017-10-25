Makersbnb
============

A website written in Javascipt enabling users to list and book properties for certain dates.

Written by Will Porter, Lizzie Hard, Abi Travers and Freddie Ofori


Set Up
----------
```
$ git clone https://github.com/willjsporter/makersbnb.git
$ npm install
$ brew install mongodb
$ mongod
```

Running Tests
----------
Start the database - `$ mongod`

Ensure the server is running - `$ nodemon app.js`

Run the tests - `$ mocha`


Technologies used
-----------
Code: JavaScript - written in Node.js;

Testing: Mocha with Zombie;

Databases: Mongo;

Server: Express.


User Stories
-----------

```
As a user
I want to be able to sign up to makersbnb
To register my details
```
```
As a user
I want to be able to log into makersbnb
To be able to see a list of available Properties
```
```
As a property owner
I want to be able to log into makersbnb
So that I can list my property for certain dates
```
```
As a user
I want to be able to book a property
So that I can reserve the property and make it unavailable to others for my given dates
```
