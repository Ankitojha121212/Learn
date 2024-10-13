const mongoose = require("mongoose");
const {Schema} = mongoose;

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/shop");
}

main().then(()=>{
    console.log("Database Connected");
}).catch((err)=>{
    console.log(err);
});



const orderSchema = new Schema({
    item : String,
    price : Number
});



const customerSchema = new Schema({
    name : String,
    orders : [
        {
            type : Schema.Types.ObjectId,
            ref : "Order",
        }
    ]
})


const Order = mongoose.model("Order",orderSchema);
const Customer = mongoose.model("Customer",customerSchema);

const addCustomer = async()=>{
    let cust1 = new Customer({
        name : "Rahul Kumar",
    });

    let order1 = await Order.findOne({item : "Charger"});
    let order2 = await Order.findOne({item : "Laptop"});

    cust1.orders.push(order1);
    cust1.orders.push(order2);

    let result = await cust1.save();
    console.log(result);
}
addCustomer();
// const addOrders = async()=>{
//      let res = await  Order.insertMany([
//         {item : "Laptop" , price : 84000},
//         {item : "Charger" , price : 3500},
//         {item : "Beard Oil" , price : 999},
//         {item : "Router" , price : 8430}
//     ]);
// console.log(res);
// };

// addOrders();