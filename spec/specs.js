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
});

describe('Delivery', function(){
  it("Will return new Delivery object ", function(){
    var delivery = new Delivery("some address");
    expect(delivery.address).to.equal("some address");
  });
});

describe('Pizza', function(){
  it("Will return new Delivery object ", function(){
    var pizza = new Pizza(["cheese"]);
    expect(pizza.toppings).to.eql(["cheese"]);
  });
});
