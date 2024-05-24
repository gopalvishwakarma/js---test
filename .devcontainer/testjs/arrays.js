// Arrays

const myArr = [0,1,2,3,4,5]

const myHeros = ["shaktiman", "Nagraj","Krish"]

const myArr2 = new Array(1,2,3,4)

// console.log(myArr[1]);
// console.log(myHeros[2]);
// console.log(myArr2);

// Array Method

// myArr.push(6)
// myArr.push(7)
// myArr.pop(3)

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(1));


// const newArr = myArr.join()

// console.log(newArr);
// console.log(myArr);
// console.log(typeof newArr,typeof myArr);

// slice, splice

//remembered manipulate original operations  in splice

// console.log("A", myArr);

// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B", myArr); 

// const myn2 = myArr.splice(1, 3)
// console.log("c", myArr); 
// console.log(myn2);

//-------------------------------------//----------------------------------------------------

// const marvel_heros = ["thor", "spider", "iron"]
// const dc_heros  = ["flash", "superman", "batman"]


// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros); // prefer spread operators uses by developers 


// marvel_heros.push(dc_heros) // push operators uses by developers 
// dc_heros.push(marvel_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) // concate operators uses by developers 
// console.log(allHeros);

// dc_heros.concat(marvel_heros)
// console.log(dc_heros);


// const another_Array = [1,2,3,[4,5,6],7,8,9,[10,11,12,13],14,15,16]

// const Real_another_Array = another_Array.flat(Infinity)

// console.log(Real_another_Array);



console.log(Array.isArray("Gopal"));
console.log(Array.from("Gopal")); // uses from convert to arrays form

console.log(Array.from({name: "gopal"})); // intresting blank array 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); // uses of operatore for elements values merge