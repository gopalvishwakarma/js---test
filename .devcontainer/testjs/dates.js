// dates

let myDate = new Date()
// console.log(myDate.toString()); // Wed May 22 2024 12:20:07 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toISOString()); // 2024-05-22T12:20:07.567Z 
// console.log(myDate.toJSON()); // 2024-05-22T12:20:07.567Z
// console.log(myDate.toLocaleDateString()); // 5/22/2024

// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23) // month started 0 in javascript
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-03")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp =  Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time` : interpolation write 

newDate.toLocaleString('default',{
    weekday: "long",
})