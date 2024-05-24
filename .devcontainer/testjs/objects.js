// singleton 
// object literals

//Object.create
// singleton 
// object literals

//Object.create

const mySym = Symbol("Key1")
const JsUser = {
	name: "Gopal",
	"Full Name": "Gopal Vishwakarma",
	[mySym]: "mykey1",
	age: 28,
	location: "Indore",
	email: "gopal@gmail.com",
	isLoggedIn: false,
LastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["Full Name"])
console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
Object.freeze(JsUser)
JsUser.email - "hitesh@microsoft.com"
console.log(JsUser);
