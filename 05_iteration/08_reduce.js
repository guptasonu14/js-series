const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (accumalator,currentValue){
//     console.log(`acc:${accumalator} and currVal:${currentValue}`);
//     return accumalator + currentValue
// },0)
// console.log(myTotal);

const myTotal = myNums.reduce((acc,curr)=> acc+curr,0)
console.log(myTotal);

const shoppingCart = [
    {
      itemName: "JavaScript Course",
      price: 2000
    },
    {
      itemName: "Web Development Book",
      price: 300
    },
    {
      itemName: "Wireless Headphones",
      price: 100
    },
    {
      itemName: "Laptop Backpack",
      price: 50
    },
    {
      itemName: "Smartwatch",
      price: 150
    },
    {
      itemName: "Coffee Maker",
      price: 80
    },
    {
      itemName: "Fitness Tracker",
      price: 120
    },
    {
      itemName: "Bluetooth Speaker",
      price: 70
    },
    {
      itemName: "Portable Charger",
      price: 25
    },
    {
      itemName: "Sunglasses",
      price: 40
    }
  ];
  
  const priceToPay = shoppingCart.reduce((acc,item)=>acc+item.price,0)
  console.log(priceToPay);
  