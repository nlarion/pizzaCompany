describe('Store', function(){
  it("Will return new store object ", function(){
    var store = new Store("somename");
    expect(store.name).to.equal("somename");
  });
});

describe('Customer', function(){
  it("Will return new customer object ", function(){
    var customer = new Customer("somename");
    expect(customer.name).to.equal("somename");
  });
  it("Will calculate total of pizzas based on pizza price ", function(){
    var customer = new Customer("somename");
    var pizza = new Pizza(["Extra Cheese"],3);
    customer.pizzas.push(pizza);
    var pizza = new Pizza(["Extra Cheese"],3);
    customer.pizzas.push(pizza);
    expect(customer.total()).to.equal(55.80);
  });
});

describe('Delivery', function(){
  it("Will return new Delivery object ", function(){
    var delivery = new Delivery("some address");
    expect(delivery.address).to.equal("some address");
  });
});

describe('Pizza', function(){
  it("Will return new Pizza object ", function(){
    var pizza = new Pizza(["Extra Cheese"],3);
    expect(pizza.toppings).to.eql(["Extra Cheese"]);
  });
  it("Will return a pizzas base price array ", function(){
    var pizza = new Pizza(["Extra Cheese"],3);
    expect(pizza.basePrice).to.eql([4.95,11.9,18.8,25.9]);
  });
  it("Will return this pizza's price ", function(){
    var pizza = new Pizza(["Extra Cheese"],3);
    expect(pizza.price()).to.equal(27.90);
  });
});

describe('ToppingsList', function(){
  it("Will return a multi-dimentional array of all toppings", function(){
    var toppings = new ToppingsList();
    expect(toppings).to.eql([["Olives","Canned Mushrooms","Fresh Mushrooms","Tomatoes","Green Peppers","Onions","Pineapple","Jalapeno","Garlic","Banana Wax Peppers","Spinach","Broccoli","Extra Sauce","Taco Chips"],["Pepperoni","Canadian Bacon-Styled Ham","Linguica","BBQ Chicken","Garlic Chicken","Fajita Chicken","Salami","Spicy Pepperoni","Country Sausage","Spicy Itilian Sausage","Fresh Lean Beef","Breakfast Baccon","Cheddar Topping","Extra Cheese"],["Artichoke Hears","Shrimp","Smoked Oysters","Anchovies"]]);
  });
});

describe('ToppingsPrice', function(){
  it("Will return a multi-dimentional array of toppings prices at different sizes", function(){
    var toppingsPrice = new ToppingsPrice();
    expect(toppingsPrice).to.eql([[0.4,0.7,1,1.4],[0.5,1,1.5,2][0.6,2.1,3,4.2]]);
  });
});
