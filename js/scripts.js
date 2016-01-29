//TODO:
// Create a website for a pizza company where a user can order a pizza and see the final cost:

// Allow the user to choose toppings and size for the pizza they'd like to order.
// Create a pizza object constructor with properties for toppings and size.
// Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.
//
//
//When you finish, submit it at the JavaScript OO link on Epicenter. Your teachers will review your code based on the following criteria:
//
// Code meets standards from previous weeks
// Objects drive business logic (in JavaScript not jQuery)
// Specs written for JavaScript functions
// Constructors and prototypes used successfully
// Web application works as expected

//TODO: EXTRA
// style your site with CSS and images
// allow users to order more than one pizza with different toppings
// display the list of pizzas ordered as links that can be clicked for details
// offer a delivery option that then requires address information

var Store = function(name){
  this.name = name;
  this.customer;
  this.delivery;
}

//total will calculate the toatal for this.pizzas which will probablly be an array
var Customer = function(name){
  this.name = name;
  this.address;
  this.total;
  this.pizzas;
}

var Delivery = function(address){
  this.address = address;
}

//give pizza a price function that will calculate the price based on toppings obj or array
var Pizza = function(toppings){
  this.toppings = toppings;
}
