// console.log("Hello World this is just the begining");

// getting objects into an array
// const ContactInfo = [
//   {
//     name: "Umair",
//     Id_no: "42201-4742177-3",
//     city: "karachi",
//     age: 29,
//     status: "alive",
//   },
//   {
//     name: "Azhar",
//     Id_no: "42201-91353435-3",
//     city: "karachi",
//     age: 20,
//     status: "alive",
//   },
//   {
//     name: "reema",
//     Id_no: "42201-4742177-3",
//     city: "islamabad",
//     age: 25,
//     status: "unknown",
//   },
// ];

// console.log(ContactInfo);
// console.log("next coomand");
// console.log(ContactInfo[1]);
// console.log("next coomand");
// console.log(ContactInfo[2].city);

// now getting array from an object

// const animal_kingdom = {
//     mamals : ["cat","dog","lion","tiger","wolf","fox"],
//     birds : ["eagle","hawk","vulture","crow","pigeon"],
//     reptile : ["lizard","kamodo dragon","bugs","ants","snake"],
//     amphibians : ["walrus","crocodile","penguin","seal"]
// }

// console.log(animal_kingdom);
// console.log(animal_kingdom.birds);
// console.log(animal_kingdom.reptile[1]);

// console.log("set time out example");

// // login user with set time out
// const loginuser = (username, email) => {
//   setTimeout(() => {
//     console.log("you can logged in", username); // print login user
//     return email; // return nothing
//   }, 5000);
// };

// loginuser("umair", "@gmail.com");
// // console.log(loginuser("umair", "@gmail.com")); // return undefine

// // // // login user with set time out and callback example 1 with function built in parameter
// const loginuser = (username, email,callback) => {
//   setTimeout(() => {
//     // console.log("you can logged in", username); // print login user
//     return callback(username,email)  // return nothing
//   }, 5000);
// };

// loginuser("umair", "@gmail.com",(username,email)=>{console.log("callback function is executed","username is", username,
// "and email is",email);});
// // console.log(loginuser("umair", "@gmail.com")); // return undefine

// // login user with set time out and callback  example 2 with function built seperately
// const loginuser = (username, email, callback) => {
//     setTimeout(() => {
//       console.log("You can log in", username); // print login user
//       callback(); // invoke the callback function
//     }, 5000);
//   };

//   // Define the callback function
//   const callbackFunction = () => {
//     console.log("Callback executed");
//   };

//   // Call loginuser with the correct callback
//   loginuser("umair", "@gmail.com", callbackFunction);

// function add(a, b) {
//   return (c = a + b);
// }

// function square(c) {
//   return (d = c * c);
// }

// square(2) // passing square as parameter in adding and then adding
// console.log(add(d,2));

// // console.log(square(add(2, 2))); // getting square after adding in one line

// add(5, 1); // passing parameter in square func

// console.log(add(c)); //getting square after adding




























