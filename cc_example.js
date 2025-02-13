// Task 5
// let orders = [
//     {id: 101, customer: "Alice", total: 300},
//     {id: 102, customer: "Bob", total: 450},
//     {id: 103, customer: "Charlie", total: 200},
// ];

// function findOrders(order, orderId) {
//     return order.find(orders => order.Id === orderId);
// };
// console.log(findOrders(orders,102)); 

// Task 6 
// let inventory = {
//     items: [],
//     addItem(name, quantity) {
//         this.items.push({name, quantity});
//     },
//     removeLastestItem(){
//         this.items.pop();
//     },
//     removeFirstItem(){
//         this.items.shift();
//     }
// };
// inventory.addItem("Monitro", 5);
// inventory.addItem("Keyboard", 10);
// inventory.addItem("Mouse", 3);
// console.log(JSON.stringify(inventory.items));
// inventory.removeLastestItem();
// console.log(JSON.stringify(inventory.items));
// inventory.removeFirstItem();
// console.log(JSON.stringify(inventory.items));

// Task 7 
// let employee = [
//     {name: "Alice", position: "Developer", salary: 70000},
//     {name: "Bob", position: "Designer", salary: 60000},
//     {name: "CHarlie", position: "Manager", salary: 90000}
// ]
// function findEmployee(employees, name) {
//     return employees.find(employee => employee.name === name);
// };
// console.log(findEmployee(employee, "Bob")); 

// Task 8 
let orders1 = [{ id: 1, customer: "Alice"}, {id: 2, cusomter: "Bob"}];
let orders2 = [{id : 3, customer: "Charlie"}, {id: 4, customer: "David"}];

function mergeOrders(orderA, orderB) {
    return [...orderA, ...orderB];
}
console.log(mergeOrders(orders1, orders2)); 
