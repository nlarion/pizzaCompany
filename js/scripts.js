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

/*
// UI LOGIC
*/
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip()
  var store = new Store();
  store.customer = new Customer("Default");
  $("form#newPizza").submit(function(event) {
    event.preventDefault();
    var allToppings = [];
    $("#newPizza :checked").each(function(){
      allToppings.push($(this).val());
    });
    console.log(allToppings);
  });
});

/*
// BUSINESS LOGIC
*/
var Store = function(){
  this.name = "PizzaTown";
  this.customer;
  this.delivery;
}

var Customer = function(name){
  this.name = name;
  this.address;
  this.total;
  this.pizzas = [];
}

Customer.prototype.total = function(){
  var pizzasRunningTotal = 0;
  this.pizzas.forEach(function(pizza){
    pizzasRunningTotal += pizza.price();
  });
  return Math.round(pizzasRunningTotal*100)/100;
}

var Delivery = function(address){
  this.address = address;
}

var Pizza = function(toppings,size){
  this.basePrice = [4.95,11.9,18.8,25.9];
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.price = function(){
  var toppingsRunningTotal = 0;
  var toppingsList = new ToppingsList();
  var toppingsPrice = new ToppingsPrice();
  var size = this.size;
  this.toppings.forEach(function(topping){
    for (var i = 0; i < toppingsList.length; i++) {
      for (var j = 0; j < toppingsList[i].length; j++) {
        if(topping === toppingsList[i][j]){
          toppingsRunningTotal += toppingsPrice[i][size];
        }
      }
    }
  });
  var ret = this.basePrice[this.size]+toppingsRunningTotal;
  return Math.round(ret*100)/100; //gotta round cuz js sux at math
}

var ToppingsList = function(){
  return [["Olives","Canned Mushrooms","Fresh Mushrooms","Tomatoes","Green Peppers","Onions","Pineapple","Jalapeno","Garlic","Banana Wax Peppers","Spinach","Broccoli","Extra Sauce","Taco Chips"],["Pepperoni","Canadian Bacon","Linguica","BBQ Chicken","Garlic Chicken","Fajita Chicken","Salami","Spicy Pepperoni","Country Sausage","Spicy Itilian Sausage","Fresh Lean Beef","Breakfast Baccon","Cheddar Topping","Extra Cheese"],["Artichoke Hears","Shrimp","Smoked Oysters","Anchovies"]];
}

var ToppingsPrice = function(){
  return [[0.4,0.7,1,1.4],[0.5,1,1.5,2],[0.6,2.1,3,4.2]];
}
