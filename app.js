// //arrray literal//
// var numbers= [3, 55, 87];
// console.log (numbers);

// //Creating an Array with the New JS Keyboard//
// var strings= new Array("mangoes", "pineapples", "kiwis", "bananas");
// console.log (strings);

// //Creating an array with the new JS keyboard by making the index//

// var booleans= new Array()
// booleans[0]= 9<10;
// booleans[1]= 11===11.5;
// booleans[2]= 12>8;
// // booleans[3]= "Sky" == "SKY";

// // console.log (booleans);

// //Create an Array of your classmates' names//
// var classNames= new Array("Sky", "Trent", "Katie", "Danielle", "Heather");
// console.log (classNames);


var shoppingCart = { 
        banana: "1.25",
        mango: ".99",
        Tshirt: "25.01",
        apple: "0.60",
        peanutButter: "10.34",
        shoes: "22.36"
      };
      


function cashRegister (shoppingCart){
    var items = Object.keys(shoppingCart); // array of items by key   
  var sum = 0; 
  
  for (var i = 0; i < items.length; i++) {
    var itemName = items[i]; // get the name of the key for the item
    var itemPrice = shoppingCart[itemName]; // get the price for the item
    sum += Number.parseFloat(itemPrice); // convert the price to a float and add it to the sum
  }

  return sum;
}


  document.write(cashRegister(shoppingCart)); 





// //When to start, when to stop, and how to get to the next item
// for (i=0; i<classNames.length; i++) {
//     console.log(classNames[i]);
// }
// //i=index, so start at index=0 (i=) then stop once you go through the whole length (i<classNames.length) then i++ means next?
// //really important to have all three in your code or else it will be an endless loop and it can break the website or computer