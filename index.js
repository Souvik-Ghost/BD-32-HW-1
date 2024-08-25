let express = require("express");
let app = express();
let port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

let users = [
  {
    id: 1,
    username: "ankit",
    fullName: "Ankit Kumar",
    email: "ankit@gmail.com",
  },
  {
    id: 2,
    username: "dhananjit",
    fullName: "Dhananjit Singh",
    email: "dhananjit.singh@gmail.com",
  },
];

let creditCards = [
  { number: "1234567890123456", holder: "John Doe", expiry: "12/24" },
  { number: "9876543210987654", holder: "Jane Smith", expiry: "06/23" },
];

let books = [
  { isbn: "9783161484100", title: "Example Book", author: "John Author" },
  { isbn: "9781234567897", title: "Another Book", author: "Jane Writer" },
];

let people = [
  { ssn: "123-45-6789", name: "John Doe", birthDate: "1990-01-01" },
  { ssn: "987-65-4321", name: "Jane Smith", birthDate: "1985-05-05" },
];

//1
function checkAvailability(ele, username) {
  return ele.username === username;
}
app.get("/username/find/:username", (req, res) => {
  let username = req.params.username;
  let result = users.find((ele) => checkAvailability(ele, username));
  if (result) {
    res.json({ result: "Username is not available" });
  } else {
    res.json({ result: "Username is available" });
  }
});
//username/find/ankit123

//2
function findCreditCard(ele, cardNumber) {
  return ele.number === cardNumber;
}
app.get("/credit-cards/find", (req, res) => {
  let cardNumber = req.query.cardNumber;
  let creditCard = creditCards.find((ele) => findCreditCard(ele, cardNumber));
  res.json({ creditCard });
});
//credit-cards/find?cardNumber=1234567890123456

//3
function findUserByEmail(ele, email) {
  return ele.email === email;
}
app.get("/emails/find", (req, res) => {
  let email = req.query.email;
  let user = users.find((ele) => findUserByEmail(ele, email));
  res.json({ user });
});
//emails/find?email=ankit@gmail.com

//4
function findBookByISBN(ele, isbn) {
  return ele.isbn === isbn;
}
app.get("/books/find", (req, res) => {
  let isbn = req.query.isbn;
  let book = books.find(ele => findBookByISBN(ele, isbn));
  res.json({ book });
});
//books/find?isbn=9783161484100

//5
function findPersonBySSN(ele, ssn) {
  return ele.ssn === ssn;
}
app.get("/ssn/find", (req, res) => {
  let ssn = req.query.ssn;
  let person = people.find((ele) => findPersonBySSN(ele, ssn));
  res.json({ person });
});
//ssn/find?ssn=123-45-6789
