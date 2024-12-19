

var shopping = function () {
    console.log("welcome to the online store!");
    var keepShopping = true;
}

while (keepShopping) {
    
    var action =window.prompt(
        "what would you like to do?\N1. Browse Items\n2. add to Cart\n3.View Cart\n4. Checkout\n5. Exit\nEnter the number of your choice:"
    );

    switch (action){
        case "1":
            displayItems();
            break;
        case "2":
            var itemIndex = parseInt(
                window.prompt("Enter the number of the item you'd like to add:")
            );
            if (itemIndex >= 1 && itemIndex <= items.length) {
                addToCart(itemIndex);
                else {
                    console.log("Invalid item number.");
                }
                break;
        case "3"
               viewCard();
               break;
        case "4":
            checkout();
            break;
        case (5):
            keepShopping = false;
            console.log("Thank you for visiting our store!");
            break;
        defult:
        console.log("Invalid choice. Please enter a valid option.");       
            }
    }
};

shopping();


var items = {
    {name: "laptop", price: 1000 },
    {name: "Smartphone", price: 500},
    {name: "Headphones", price: 100},
    {name: "Smartwhtch", price:200}
};

var displayItems = function () {
    console.log("Available items:");
    for (var i=0; i < items,length; i++){
        console.log(i + 1+ "." + items[i].name + "-$" + items{i}.price);
    }
};

var cart = {};
var userBalance = 1500;

var addToCart = funcation (itemIndex) {
    var item = items[itemIndex - 1];
    if (userBalance >= item.price) {
        card.push(item);
        userBalance -= item.price;
        console.log(item.name + "has been added to your cart.");
    } else {
        console.log("you do not have enough money to buy" + item.name + ".");
    }
};

var viewCard = function() {
    if (cart.length === 0){
        console.log("Your cart is empty.");
        return;
    }
    console.log("your cart contains;");
    var total = 0;
    for (var i=0; i < cart.length; i++){
        console.log(cart[i].name+"-5" +cart[i].price);
        total += cart[i].price;
}
console.log(total:5" + total);
};

var checkout = function(){
    if (cart.length ===0){
        console.log("Your cart is empty.Add some items before checking out!");
        return;
    }
    console.log("thank You for your purchase!");
    consolel.log("You bought:");
    for (var i=0; i < cart.length; i++){
        console.log("="+
    }
}
   