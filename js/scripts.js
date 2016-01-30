/*
// UI LOGIC
*/
$(document).ready(function(){
  var sizeArr = ["Mini","Small","Medium","Large"];
  $('[data-toggle="tooltip"]').tooltip()
  var store = new Store();
  store.customer = new Customer("Default");
  $("form#newPizza").submit(function(event) {
    var pizzaSize = $('input[name=size]:checked').val()
    var allToppings = [];
    $("#newPizza :checked").each(function(){
      allToppings.push($(this).val());
    });
    var pizza = new Pizza(allToppings,pizzaSize);
    store.customer.pizzas.push(pizza);
    $('#total').text("$"+store.customer.total().toFixed(2));
    $("ul#orders").append("<li><span class='order' id='pizza"+store.customer.order+"'>Order " + (store.customer.order+1) + "</span></li>");
    $('.order').last().click(function(e) {
      $("#pizzaDisplay").empty();
      var order = e.toElement.getAttribute("id");
      order = order.replace(/pizza/g,"");
      $("#pizzaDisplay").append("<h3>Order Number: "+(parseInt(order)+1)+"</h3><h4>Total: "+store.customer.pizzas[order].price()+"</h4><h5>Toppings: "+store.customer.pizzas[order].toppings.toString()+"</h5><h6>Size: "+sizeArr[parseInt(store.customer.pizzas[order].size)]+"</h6>");
    });
    store.customer.order++;
    console.log(store.customer);
    event.preventDefault();
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
  this.order = 0;
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
  var ret = this.basePrice[size]+toppingsRunningTotal;
  return Math.round(ret*100)/100; //gotta round cuz js sux at math
}

var ToppingsList = function(){
  return [["Olives","Canned Mushrooms","Fresh Mushrooms","Tomatoes","Green Peppers","Onions","Pineapple","Jalapeno","Garlic","Banana Wax Peppers","Spinach","Broccoli","Extra Sauce","Taco Chips"],["Pepperoni","Canadian Bacon","Linguica","BBQ Chicken","Garlic Chicken","Fajita Chicken","Salami","Spicy Pepperoni","Country Sausage","Spicy Itilian Sausage","Fresh Lean Beef","Breakfast Baccon","Cheddar Topping","Extra Cheese"],["Artichoke Hears","Shrimp","Smoked Oysters","Anchovies"]];
}

var ToppingsPrice = function(){
  return [[0.4,0.7,1,1.4],[0.5,1,1.5,2],[0.6,2.1,3,4.2]];
}
